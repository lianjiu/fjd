import Vue from 'vue'
import Router from 'vue-router'
import shou from '@/components/Shou'
import shopping from '@/components/Shopping'
import my from '@/components/My'
import signIn from '@/components/SignIn'
import search from '@/components/Search'
import classify from '@/components/Classify'
import address from '@/components/Address'
import binding from '@/components/Binding'
import collection from '@/components/Collection'
import password from '@/components/Password'
import personal from '@/components/Personal'
import newadd from '@/components/NewAdd'
import register from '@/components/Register'
import order from '@/components/Order'
import details from '@/components/Details'
import detailshop from '@/components/DetailShop'
import detailxq from '@/components/DetailXQ'
import detailevaluate from '@/components/DetailEvaluate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'shou'
    },{
      path: '/shou',
      component: shou
    },{
      path: '/shopping',
      component: shopping
    },{
      path: '/my',
      component: my
    },{
      path: '/signIn',
      component: signIn
    },{
      path: '/search',
      component: search
    },{
      path: '/classify',
      component: classify
    },{
      path: '/address',
      component: address
    },{
      path: '/binding',
      component: binding
    },{
      path: '/collection',
      component: collection
    },{
      path: '/password',
      component: password
    },{
      path: '/personal',
      component: personal
    },{
      path: '/newadd',
      component: newadd
    },{
      path: '/register',
      component: register
    },{
      path: '/order',
      component: order
    },{
      path: '/details',
      component: details
    },{
      path: '/detailshop',
      component: detailshop
    },{
      path: '/detailxq',
      component: detailxq
    },{
      path: '/detailevaluate',
      component: detailevaluate
    }
  ]
})
