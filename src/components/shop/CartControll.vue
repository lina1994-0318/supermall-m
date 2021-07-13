<template>
  <div class="cart-controll">
    <span class="cart-button button-minus" v-if="food.count>0" @click.stop="decreaseCount()">
      <i class="iconfont icon-minus-circle-fill"></i>
    </span>
    <span class="cartcount" v-if="food.count>0">{{ food.count }}</span>
    <span class="cart-button" @click.stop="increaseCount()">
      <i class="iconfont icon-jiahao"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CartControll",
  props:{
    food: Object
  },
  methods:{
    decreaseCount(){
      this.food.count--;
    },
    increaseCount(){
      this.food.count++;
    }
  }
}
</script>

<style scoped lang="less">
.cart-controll {
  .df();
  align-items: center;
}
.cart-button {
  .db();
}
.cart-button i {
  color: #f39606;
  vertical-align: middle;
  font-size: 1.4rem;
}
.cartcount {
  .db();
  text-align: center;
  color: #333;
  vertical-align: middle;
  font-size: 1rem;
  width: 1.3rem;
  overflow: hidden;
}

</style>