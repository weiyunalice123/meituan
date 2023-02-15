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
      component: () => import('../views/myCart/MyCart.vue')
    },
    {
      path: '/order',
      component: () => import('../views/myOrders/MyOrders.vue')
    },
    {
      path: '/mine',
      component: () => import('../views/mine/Mine.vue')
    },
    {
      path: '/store',
      component: () => import('../views/myStore/MyStore.vue')
    },
    {
      path: '/createorder',
      component: () => import('../views/createOrder/CreateOrder.vue')
    },
    {
      path: '/address',
      component: () => import('../views/address/Address.vue')
    },
    {
      path: '/addressedit',
      component: () => import('../views/addressEdit/AddressEdit.vue')
    },
    {
      path: '/redpacket',
      component: () => import('../views/myRedPacket/RedPacket.vue')
    },
    {
      path: '/coupon',
      component: () => import('../views/coupon/Coupon.vue')
    },
    {
      path: '/allowance',
      component: () => import('../views/allowance/Allowance.vue')
    },
    {
      path: '/mywallet',
      component: () => import('../views/myWallet/MyWallet.vue')
    },
    {
      path: '/remaining',
      component: () => import('../views/myWallet/components/MyRemaingSum.vue')
    },
    {
      path: '/validationcenter',
      component: () => import('../views/mine/components/ValidationCenter')
    }
  ]
});
export default router;