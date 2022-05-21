import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Back from '@/pages/Back'
import BackIndex from '@/components/back/BackIndex'
import BackCommit from '@/components/back/BackCommit'
import BackView from '@/components/back/BackView'
import BackData from '@/components/back/BackData'
import BackChart from '@/components/back/BackChart'
Vue.use(Router)

export default new Router({
  routes: [
    { 
      path:'/',
      component: Index
    },
    { 
      path:'/login',
      component: Login
    },
    { 
      path:'/back',
      component:Back,
      redirect:'/back/index',
      children:[
        { 
          path:'index',
          component:BackIndex
        },
        {
          path:'commit',
          component:BackCommit
        },
        { 
          path:'view',
          component:BackView
        },
        { 
          path:'data',
          component:BackData
        },
        { 
          path:'chart',
          component:BackChart
        },
      ]
    }
  ]
})
