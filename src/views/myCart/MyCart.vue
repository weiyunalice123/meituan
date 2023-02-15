<template>
  <div class="cart main-box">
    <div class="content">
      <Header title="购物车" :showEditBtn="showEditBtn"/>
      <Empty v-if="store.state.cartList.length === 0" :labelText="text"/>
      <CartList v-else />
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
  import { reactive, toRefs } from 'vue';
  export default {
    components: {
      Footer,
      Header,
      Empty,
      CartList
    },
    setup(){
      const store = useStore();
      const data = reactive({
        text: "购物车为空,请加入商品",
        showEditBtn: store.state.cartList.length === 0 ? false : true
      });
      return {
        store,
        ...toRefs(data),
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