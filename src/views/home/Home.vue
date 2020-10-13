<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCompos/HomeSwiper'
import Recommend from './childCompos/Recommend'

import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    Recommend
  },
  data(){
    return{
      banners: [],
      recommends: []
    }
  },
  created(){
    getHomeMultidata().then(res =>{
      console.log(11111111111);
      console.log(res.data.banner.list[0].image);
      console.log(222222222222);
      this.banners = res.data.banner.list;
      console.log(this.banners.length);
      console.log(33333333333);
      this.recommends = res.data.recommend.list
      console.log(444444444444);
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    /* background-color: #ff8198; */
    color: #fff;
  }

</style>