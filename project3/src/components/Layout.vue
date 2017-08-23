<template>
  <div>
    <div class="header"></div>
    <div class="content">
      <router-view></router-view>
      <div>{{mag}}</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg: '123456'
    }
  }
}
</script>

<style scoped>

</style>
