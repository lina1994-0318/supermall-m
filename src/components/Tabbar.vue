<template>
  <div class="tabBar">
    <router-link class="tab-item"
                 v-for="(item,index) in tabBar"
                 :key="index"
                 :to="item.path"
                 active-class="is-selected"
    >
      <div class="tab-item-icon">
        <i :class="'iconfont icon-' + item.iconFont"></i>
      </div>
      <div class="tab-item-label">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props:{
    tabBar: Array
  }
}
</script>

<style scoped lang="less">
  .tabBar{
    .pf();
    bottom: 0;
    left: 0;
    .df();
    align-items: center;
    .w100();
    height: 3rem;
    .tc();
    .bc(#fff);
    .tab-item{
      flex: 1;
      .tab-item-icon {
        width: 20px;
        height: 20px;
        margin: 0 auto 5px;
        i {
          font-size: 1.2rem;
        }
      }
      .tab-item-label {
        color: inherit;
        font-size: 10px;
        line-height: 1;
      }
      &.is-selected {
        color: #f39606;
      }
    }
  }
</style>