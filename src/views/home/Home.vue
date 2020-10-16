<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <my-scroll class="sc-wrapper" ref="refscroll" 
                           :probe-type="scrollProbeType" 
                           @scrollem='scrollli'
                           :pull-up="scPullUp"
                           @pullUp='loadMore'
                           >
      <div class="sc-content">
        <home-swiper :banners="banners"></home-swiper>
        <recommend :recommends="recommends"></recommend>
        <Featuree></Featuree>
        <tab-control  class="tab-control" 
                                    :titles="tabList[1]"
                                    @tabClick='tabTabClick'></tab-control>
                                    
        <goods-list  class="goods" :goods="goodsTabList"></goods-list>

        <!-- <ul>
          <li v-for="(num, ind) in 391" :key="ind" height="20px">{{num*100}}</li>
        </ul> -->

      </div>
    </my-scroll>

    <div >  
      <back-top @click.native="backClick" v-show='isShowBackTop'></back-top>
    </div>

    <!-- <ul>
      <li v-for="(num, ind) in 100" :key="ind">{{num}}</li>
    </ul> -->


  </div>
</template>

<script>

import HomeSwiper from './childCompos/HomeSwiper'
import Recommend from './childCompos/Recommend'
import Featuree from './childCompos/Feature'

import NavBar from 'components/common/navbar/NavBar'
import MyScroll from 'components/common/scroll/MyScroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods, postHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    MyScroll,
    BackTop,
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
      isShowBackTop: false,
      scrollProbeType: 3,
      scPullUp: true
    }
  },
  
  computed: {
    currentGoodsTab(){
      return this.tabList[0][this.currentTabIndex]
    },
    goodsTabList(){
      return this.goods[this.currentGoodsTab].list
    }
  },

  methods: {
    // 1. 事件监听
    tabTabClick(index){
    this.currentTabIndex = index
    },
    backClick(){
      console.log('backtoppppp');
      this.$refs.refscroll.scrollTo(0, 0)
      this.isShowBackTop = false
    },

    loadMore(){
      this.postGoods(this.currentGoodsTab)
    },

    scrollli(position){
      // console.log(position);
      // if((-position.y) > 1000) {
      //   console.log(6666666);
      //   this.isShowBackTop = true
      //   this.scrollProbeType = 3
      // }
      // else {
      //   console.log(9999999);
      //   this.isShowBackTop = false
      //   this.scrollProbeType = 2
      // }
      this.isShowBackTop = (-position.y) > 1000

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

        //scroll 停止
        this.$refs.refscroll.finishPullUp()
      })
    },

    // 3. 工具
  },

  created(){
    this.getMultidata()
    this.postGoods('pop')
    this.postGoods('new')
    this.postGoods('sell')
  },

  mounted(){
    const refresh = debounce(this.$refs.refscroll.refresh, 100)
    this.$bus.$on('itemImageLoad', ()=> {
      console.log('-----------');
      // this.$refs.refscroll && this.$refs.refscroll.refresh()
      refresh()
    })
  }

}
</script>

<style scoped>
  #home {
    height: calc(100vh - 49px);
    /* padding-top: 44px;  */
    position: relative;
    overflow:hidden;
  }

  .home-nav {
    background-color: var(--color-tint);
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index:9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .sc-wrapper {
    /* margin-top: 44px; */
    /* height: calc(100% - 44px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
  }

</style>
  