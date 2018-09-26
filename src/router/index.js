import Vue from 'vue'
import Router from 'vue-router'
import parent from '@/components/parentCom/parent'
import vxDome from '@/components/vxDome'
import parentCom1 from '@/components/comCom/parentCom1'
import parentList from '@/components/rouDome/parentList'
import detail from '@/components/rouDome/detail'
import index from '@/components/index'
import watDome from '@/components/watch/dome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index//默认
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent//eventBus
    },
    {
      path: '/vxDome',
      name: 'vxDome',
      component: vxDome//vuex
    },
    {
      path: '/parentCom1',
      name: 'parentCom1',
      component: parentCom1//组件通信(父子 父父)
    },{
      path: '/parentList',
      name: 'parentList',
      component: parentList//路由传参
    },{
      path: '/detail/id::id',
      name: 'detail',
      component: detail//路由传参
    },{
      path: '/watDome',
      name: 'watDome',
      component: watDome//计算属性 以及监听
    },
    { path: '/promise', component: () => import('@/components/testDome/promise')},
  ]
})
