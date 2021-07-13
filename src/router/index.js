import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index'),
    children:[
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('../views/Category')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../views/Message')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/Mine')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
/*router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if(to.path == '/login'){
    next();
  }else{
    isLogin ? next() : next('/login')
  }
})*/

export default router
