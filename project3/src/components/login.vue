<template>
  <div class="login">
    <div>
      <input type="text" v-model="name" class="" name="username" maxlength="20">
      <input type="password" v-model="pwd" class=""  name="password">
      <button type="button" class="" @click="onLogin" >登&nbsp;&nbsp;录
      </button>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import $ from 'jquery'

  Vue.use($)
  export default {
    data () {
      return {
        name: '',
        pwd: '',
        errorMessage: ''
      }
    },
    computed: {
    },
    methods: {
      onLogin () {
        if (this.name === '' && this.pwd === '') {
          this.errorMessage = '用户名密码不能为空'
        } else {
          if (this.name === '11' && this.pwd === '22') {
            this.$router.push('/index')
          } else {
            this.errorMessage = '用户名或密码错误'
          }
//          $.ajax({
//            type: 'post',
//            url: '../data.json',
//            success: function (data) {
//
//            },
//            error: function () {
//              this.errorMessage = '用户名或密码错误'
//            }
//          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
