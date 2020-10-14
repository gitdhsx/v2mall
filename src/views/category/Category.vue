<template>
  <h2>
    <div class="sc-wrapper" ref='aaa'>
      <div class="container">
        <ul v-for="(item, index) in 200" :key=index>
         <li height='20px'>{{item}}</li>
        </ul>
      </div>
    </div>
  </h2>

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
    console.log(document.querySelector('.sc-wrapper'));
    console.log(this.$refs['aaa']);
    setTimeout(()=>{
      this.isShow = true
      this.bsc = new BScroll(this.$refs['aaa'], {
      })
    }, 1000)
  },
  watch: {
 }
}
</script>

<style>
.sc-wrapper {
  background-color: red;
  height: 300px;
  overflow: hidden;
  /* overflow-y: scroll; */
}


</style>