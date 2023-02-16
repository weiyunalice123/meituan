<template>
  <div class="cart main-box">
    <Header title="购物车" :showEditBtn="showEditBtn"/>
    <div class="content" v-if="isLogin === '1'">
      <Empty v-if="store.state.cartList.length === 0" :labelText="text"/>
      <CartList v-else />
    </div>
    <div class="content bgcolor" v-else>
      <EmptyLogin text="您还没有登录，请登陆后查看购物车" page="cart" :login="login"/>
    </div>
    <Footer/>

  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import Footer from '../../components/Footer.vue';
  import Header from '../../components/Header.vue';
  import Empty from '../../components/Empty.vue';
  import CartList from './components/CartList.vue';
  import EmptyLogin from '../../components/EmptyLogin.vue';
  import { reactive, toRefs, computed } from 'vue';

  export default {
    components: {
      Footer,
      Header,
      Empty,
      CartList,
      EmptyLogin
    },
    setup(){
      const store = useStore();
      const data = reactive({
        text: "购物车为空,请加入商品",
        showEditBtn: store.state.cartList.length === 0 ? false : true
      });

      //计算登陆状态
      const isLogin = computed(() => {
        return localStorage.getItem("isLogin");
      });

      //登录button事件
      const login = () => {
        store.commit('UPDATE_CURRENT_ROUTE', '/cart');
      }
      return {
        store,
        ...toRefs(data),
        login,
        isLogin
      }
    }
  }
</script>

<style lang="less" scoped>
.cart {

  .content {

  }
}
</style>