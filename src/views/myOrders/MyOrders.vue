<template>
  <div class="order main-box">
    <Header title="订单" />
    <div class="content">
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
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Empty from '../../components/Empty.vue';
import { useStore } from 'vuex';
import { reactive, toRefs } from 'vue';
export default {
  components: {
    Header,
    Footer,
    Empty
  },
  setup() {
    const store = useStore();
    const data = reactive({
      text: '列表为空',
      tabData: ["全部", "交易完成", "待付款", "待发货", "已发货"]
    })
    return {
      store,
      ...toRefs(data),
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