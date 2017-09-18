export const addUsers = (state, { users }) => {
  state.users = users
}
export const addPassword = (state, { password }) => {
  state.password = password
}
export const showUsers = state => {
  alert('用户名为:' + state.users + '密码为:' + state.password)
}
