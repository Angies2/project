<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="pic-nature">
      <img src="../assets/11.jpg">
      <img src="../assets/22.jpg">
      <img src="../assets/33.jpg">
      <img src="../assets/44.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pic',
  data () {
    return {
      msg: 'pic'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pic-nature img {
    display: inline-block;
    width: 150px;
    height: 200px;
  }
</style>
