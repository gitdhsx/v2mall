<template>
  <div class="cart">
    <div class="topp">ddddddd</div>
    <his-scroll class="scro" ref='cartscroll' :probe-type="2" @scrollem="cartScroll">
      <div>eee</div>
      <nav-bar class="cart-nav">
        <div slot="center">购物车</div>
      </nav-bar>
      <Featuree/>
      <ul>
        <li v-for="(num, ind) in 100" :key="ind">{{num}}</li>
      </ul>
    </his-scroll>

    <ul>
      <li v-for="(num, ind) in 100" :key="ind">{{num*100}}</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HisScroll from 'components/common/scroll/MyScroll'

import Featuree from 'views/home/childCompos/Feature'


export default {
  name: "Cart",
  components: {
    NavBar,
    HisScroll,
    Featuree
  },
  data(){
    return {
      scro: null
    }
  },
  methods: {
    cartScroll(position) {
      // console.log(position);
    }
  }
}
</script>

<style scoped>
.cart {
  height: 600px;
  background-color: blue;
  overflow: hidden;
  font-style: 20px;
}
.cart-nav {
    background-color: var(--color-tint);
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
.scro {
height: 350px;
background-color: burlywood;
/* overflow: hidden; */
color: lightseagreen;
font-style: 30px;
}
</style>
