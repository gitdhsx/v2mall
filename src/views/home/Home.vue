<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <Featuree></Featuree>
    <tab-control  class="tab-control" 
                                :titles="tabList[1]"
                                @tabClick='tabTabClick'></tab-control>
                                
    <goods-list  class="goods" :goods="goodsTabList"></goods-list>

    <ul v-for="(item, index) in 100" :key=index>
      <li height='20px'></li>
    </ul>


  </div>
</template>

<script>

import HomeSwiper from './childCompos/HomeSwiper'
import Recommend from './childCompos/Recommend'
import Featuree from './childCompos/Feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods, postHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    Recommend,
    Featuree,

  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: []},
        'new': { page: 0, list: []},
        'sell': { page: 0, list: []},
      },
      tabList: [['pop', 'new', 'sell'], ['流行', '新款', '精选']],
      currentTabIndex: 0,
      lStr: 'ii',
    }
  },
  computed: {
    goodsTabList(){
      return this.goods[this.tabList[0][this.currentTabIndex]].list
    }
  },
  methods: {
    // 1. 事件监听
    tabTabClick(index){
    this.currentTabIndex = index
    },

    //2. 网络请求
    getMultidata(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    postGoods(type){
      const page = this.goods[type].page + 1;
      postHomeGoods(type, page).then(res => {
        const newList = res.data[type].list
        this.goods[type].list = this.goods[type].list.concat(newList);
        this.goods[type].page += 1;
      })
    },
  },
  created(){
    this.getMultidata()
    this.postGoods('pop')
    this.postGoods('new')
    this.postGoods('sell')
  }
}
</script>

<style>
  #home{
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    /* background-color: #ff8198; */
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index:9
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  

</style>