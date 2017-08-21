import Vue from 'vue'
import Router from 'vue-router'
import Pic from '@/components/Pic'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'
import last from '@/components/last'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Pic},
    {path: '/first', component: first},
    {path: '/second', component: second},
    {path: '/third', component: third},
    {path: '/last', component: last}]
})
