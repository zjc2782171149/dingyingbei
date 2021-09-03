import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/LoginPasswd',
    name: 'LoginPasswd',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPasswd.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    }
  },
  {
    path: '/LoginCode',
    name: 'LoginCode',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginCode.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 进入报名系统前，必须进入两个登录页面或注册页面
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  (isLogin || to.name === 'LoginPasswd' || to.name === 'LoginCode' || to.name === 'Register') ? next() : next({ name: "LoginPasswd" });
})

export default router
