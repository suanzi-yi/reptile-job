import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Back from '@/pages/Back'
import BackIndex from '@/components/back/BackIndex'
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
          path:'index2'
        },
        { 
          path:'index3'
        }
      ]
    }
  ]
})
