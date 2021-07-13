<template>
  <div class="header">
    <!-- 左侧内容 -->
    <slot name="head-left" v-show="isLeft"></slot>

    <!-- 中间内容 -->
    <slot name="head-center"></slot>

    <!-- 右侧内容 -->
    <slot name="head-right" v-show="isRight"></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    isLeft: {
      type: Boolean,
      default: false
    },
    isRight: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style scoped lang="less">
  .header{
    .pf();
    top: 0;
    left: 0;
    .df();
    align-items: center;
    .w100();
    padding: 0 4%;
    height: 3rem;
    .bc(#fff);
    border-bottom: 1px solid #ccc;
    .bs();
  }
</style>