<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key=index
                                        :goodsItem=item></goods-list-item>

  </div>
  
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap; /*让弹性盒元素在必要的时候拆行*/
        justify-content: space-around; /*在弹性盒对象的 <div> 元素中的各项周围留有空白*/

        padding: 2px;  /*中间的空隙比边上大， 用这个属性来进行微调，因为Goods是整个大的控件*/
    }
</style>