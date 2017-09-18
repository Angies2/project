<template>
  <div class="">
    <h1>{{ msg }}</h1>
    用户名：<input type="text" v-model="users" v-on:blur="usersChange(users)">
    密码：<input type="text" v-model="password" v-on:blur="passwordChange(password)">
    <button type="button"  v-on:click="submit" class="btn btn-default">查看</button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '设置用户名和密码',
        users: '',
        password: ''
      }
    },
    methods: {
      usersChange (users) {
        this.$store.dispatch('addUsers', { users })
      },
      passwordChange (password) {
        this.$store.dispatch('addPassword', { password })
      },
      submit () {
        this.$store.dispatch('showUsers')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
