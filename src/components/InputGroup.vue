<template>
  <div class="input-wrap">
    <div class="input-group" :class="{ 'is-incalid' : error }">

      <!--
        @input="$emit('input',$event.target.value)"
          -- 绑定个input 事件，获取到input的值，
          -- 它与 Login.vue 里的 v-model=“phone” v-model=“verifyCode” 相对应
          -- v-model=“phone” == ① v-bind:value="phone"
                                ② v-on:input="phone = $event.target.value"
      -->

      <!-- 输入框 -->
      <input :type="type"
             :placeholder="placeholder"
             :value="value"
             :name="name"
             :disabled="disabled"
             @input="$emit('input',$event.target.value)"
      >

      <!-- 按钮 -->
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{ btnTitle }}</button>
    </div>

    <!-- 错误提醒 -->
    <div class="error-txt" v-if="error"><i class="iconfont icon-jinggao"></i>{{ error }}</div>
  </div>
</template>

<script>
  export default {
    name: "InputGroup",
    props: {
      type:{
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: String,
      name: String,
      disabled: Boolean,
      btnTitle: String,
      error: String
    }
  }
</script>

<style scoped lang="less">
  .input-wrap{
    .input-group{
      .df();
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      input{
        .w100();
        height: 3.333rem;
        line-height: 3.333rem;
        font-size: .85rem;
        .c(#666);
      }
      button{
        border: none;
        outline: none;
        width: 40%;
        background: #fff;
        font-size: .8rem;
        color: #999;
      }
      button[disabled]{
        color: #aaa;
      }
    }
    .is-incalid{
      border-bottom: 1px solid #ffbe5a;
    }
    .error-txt{
      .df();
      align-items: center;
      color: #ff9c00;
      font-size: .8rem;
      padding-top: 0.333rem;
      i{
        font-size: 18px;
        margin-right: 1%;
      }
    }
  }
</style>