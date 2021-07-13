<template>
  <div class="order">
    <Header :isLeft="true">
      <div class="head-left" slot="head-left"></div>
      <div class="head-center" slot="head-center"></div>
      <div class="head-right" slot="head-right"></div>
    </Header>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Order",
  data(){
    return{

    }
  },
  components:{
    Header
  },
}
</script>

<style scoped lang="less">
  .order{
    .w100();
    .h100();
    .header{
      .head-left{
        width: 10%;
      }
    }
  }

</style>