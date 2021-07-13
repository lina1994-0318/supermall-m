<template>
  <div class="index">
    <router-view></router-view>

    <tab-bar :tabBar="tabBarData"></tab-bar>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";

  export default {
    name: "index",
    data(){
      return{
        tabBarData: [
          { title: '首页', iconFont: 'home', path: '/home' },
          { title: '点餐', iconFont: 'category', path: '/category' },
          { title: '订单', iconFont: 'shopcart', path: '/order' },
          { title: '信息', iconFont: 'xinxi', path: '/message' },
          { title: '我的', iconFont: 'mine', path: '/mine' }
        ]
      }
    },
    components:{
      'tab-bar': Tabbar
    }
  }
</script>

<style scoped lang="less">
  .index{
    .w100();
    height: calc(100% - 3rem);
  }
</style>