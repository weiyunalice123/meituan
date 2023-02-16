import { Toast } from "vant";
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/myHome/MyHome.vue')
    },
    {
      path: '/home',
      component: () => import('../views/myHome/MyHome.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/myCart/MyCart.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/order',
      component: () => import('../views/myOrders/MyOrders.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/mine',
      component: () => import('../views/mine/Mine.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/store',
      component: () => import('../views/myStore/MyStore.vue')
    },
    {
      path: '/createorder',
      component: () => import('../views/createOrder/CreateOrder.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/address',
      component: () => import('../views/address/Address.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/addressedit',
      component: () => import('../views/addressEdit/AddressEdit.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/redpacket',
      component: () => import('../views/myRedPacket/RedPacket.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/coupon',
      component: () => import('../views/coupon/Coupon.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/allowance',
      component: () => import('../views/allowance/Allowance.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/mywallet',
      component: () => import('../views/myWallet/MyWallet.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/remaining',
      component: () => import('../views/myWallet/components/MyRemaingSum.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/validationcenter',
      component: () => import('../views/mine/components/ValidationCenter'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../views/register/Register.vue')
    }
  ]
});
//全局路由守卫
/*router.beforeEach((to, from, next) => {
  if(to.meta.isAuth) {
    if(localStorage.isLogin === "1") {
      next();
    } else {
      Toast("请先登录");
      setTimeout(() => {
        router.push('/login');
      }, 300);
    }
  } else {
    next();
  }
})*/

export default router;