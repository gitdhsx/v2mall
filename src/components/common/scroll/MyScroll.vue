<template>
<div class="wrapper" ref="scrollerr">
  <div class="content">
    <slot></slot>
  </div>
</div>
  
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: "MyScroll",
  data() {
    return {
      scrolll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    ScClick: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //
    // console.log(this.$refs.scrollerr);
    this.scrolll = new BScroll(this.$refs.scrollerr, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: this.ScClick
    })

    // console.log(this.scrolll);

    //监听滚动位置
    if (this.probeType === 2 || this.probeType === 3){
      this.scrolll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scrollem', position)
      })
    } 

    // //监听上拉事件
    if (this.pullUpLoad) {
      this.scrolll.on('pullingUp', () => {
        this.$emit('pullUp')
      })
    }

  },
  methods: {
    scrollTo(x, y, time=300) {
      // console.log('scrolltoooooo');
      this.scrolll && this.scrolll.scrollTo(x, y, time)
    },
    refresh(){
      this.scrolll && this.scrolll.refresh()
    },
    finishPullUp(){
      this.scrolll && this.scrolll.finishPullUp()
    }
  },
}
</script>

<style scoped>

</style>