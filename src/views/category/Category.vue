<template>
  <div id="category">
    <div class="sc-wrapper" ref='aaa'>
      <div class="container">
        <ul >
         <li v-for="(item, index) in 100" :key=index height='20px'>{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="ddd">
        <ul >
         <li v-for="(item, index) in 100" :key=index height='20px'>{{item*1000}}</li>
        </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll';

// let scroll = new BScroll(document.querySelector('.sc-wrapper'), {})


export default {
  
  name: "Category",
  data(){
    return {
      lStr: 'ii',
      bsc: null,
      isShow: false
    }
  },
  mounted(){
    // console.log(document.querySelector('.sc-wrapper'));
    // console.log(this.$refs.aaa);
    this.bsc = new BScroll(this.$refs.aaa, {
        probeType:2
      })
  },
  watch: {
 }
}
</script>

<style scoped>
#category {
  overflow: hidden;
  color: darkorchid;
  height: 100vh;
  font-size: 20px;
}
.sc-wrapper {
  background-color: red;
  height: 500px;
  overflow: hidden;
  /* overflow-y: scroll; */
}


</style>