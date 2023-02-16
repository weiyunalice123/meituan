<template>
  <div class="order main-box">
    <Header title="订单" />
    <div class="content" v-if="isLogin === '1'">
      <van-tabs color="#ffc400">
        <van-tab v-for="item in tabData" :title="item">
          <div class="goods_item" v-if="item === '全部' && store.state.orderListed.length !== 0" v-for="i in store.state.orderListed">
            <van-card 
              :num="i.goodsNum" 
              :price="i.price" 
              :title="i.title"
              :thumb="i.pic"
            />
          </div>
          <Empty v-else :labelText="text"/>
        </van-tab>
      </van-tabs>
    </div>
    <div class="content bgcolor" v-else>
      <EmptyLogin text="您还没有登录，请登陆后查看订单" page="order" :login="login"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Empty from '../../components/Empty.vue';
import EmptyLogin from '../../components/EmptyLogin.vue';
import { useStore } from 'vuex';
import { reactive, toRefs, computed } from 'vue';
export default {
  components: {
    Header,
    Footer,
    Empty,
    EmptyLogin
  },
  setup() {
    const store = useStore();
    const data = reactive({
      text: '列表为空',
      tabData: ["全部", "交易完成", "待付款", "待发货", "已发货"]
    });

    //计算登陆状态
    const isLogin = computed(() => {
      return localStorage.getItem("isLogin");
    });

    //登录button事件
    const login = () => {
      store.commit('UPDATE_CURRENT_ROUTE', '/order');
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
/deep/ .van-tabs__content {
  margin-bottom: 10px;
}
.order {
  .content {
    .goods_item {
      margin-top: 10px;
    }
  }
}

</style>