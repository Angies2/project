<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="pic-nature">
      <router-link :to="{ path: '/first' }"><img src="../assets/11.jpg"></router-link>
      <router-link :to="{ path: '/second' }"><img src="../assets/22.jpg"></router-link>
      <router-link :to="{ path: '/third' }"><img src="../assets/33.jpg"></router-link>
      <router-link :to="{ path: '/last' }"><img src="../assets/44.jpg"></router-link>
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
