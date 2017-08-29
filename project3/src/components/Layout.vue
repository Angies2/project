<template>
  <div id="app">
    <div class="header">
  我是头部
    </div>
    <div class="content">
      <router-view></router-view>
      <div> {{ }}</div>
    </div>
    <div class="footer">
      我是尾部
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '123456'
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    background-color: #e7a7fb;
  }
  .footer {
    width: 100%;
    height: 100px;
    background-color: #e7a7fb;
    position: fixed;
    bottom: 0;
  }
</style>
