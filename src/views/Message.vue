<template>
  <div class="message">
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
  name: "Message",
  components:{
    Header
  }
}
</script>

<style scoped>

</style>