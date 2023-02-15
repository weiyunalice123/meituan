<template>
  <div class="create_order">
    <Header title="生成订单" />
    <van-contact-card type="edit" 
      :tel="contactInfo.tel" 
      :name="contactInfo.name" 
      @click="onEdit" 
    />
    <div class="order_list">
      <van-card v-for="item in store.state.orderList" :num="item.goodsNum" :price="item.price" :title="item.title"
        :thumb="item.pic" />
    </div>
    <div class="footer">
      <div class="all_price">
        <label>商品金额</label>
        <span>¥ {{ allPrice }}</span>
      </div>
      <van-button block color="#ffc400" @click="createOrderClick">生成订单</van-button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { useStore } from 'vuex';
import { reactive, toRefs, onMounted } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from 'vant';
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      contactInfo: {
        tel: '',
        name: ''
      }
    });

    //初始化地址中的数据，将默认地址作为展示的地址
    const initAddress = () => {
      data.contactInfo = store.state.userAddress.find(item => item.isDefault);
    }

    //初始化数据
    onMounted(() => {
      initAddress();
    })

    //编辑地址
    const onEdit = () => {
      router.push('/address');
    }

    const createOrderClick = () => {
      if (store.state.orderList.length !== 0) {
        //弹框提示用户订单创建成功
        Dialog({
          title: '提交订单',
          message: '您的订单已提交成功',
        }).then(() => {

          //从购物车里删除已结算的商品
          let selectedGoodsIds = [];
          store.state.orderList.forEach(item => {selectedGoodsIds.push(item.id)});
          let newList = store.state.cartList.filter(item => {
             return !selectedGoodsIds.includes(item.id);
          })
          store.commit('UPDATE_CART', newList);

          //更新订单页面数据
          store.commit('UPDATE_ORDERLISTED');

          //跳转到订单页面
          router.push('/order');
        });        
      }
    }

    //计算总价格
    const allPrice = computed(() => {
      let totalPrice = 0;   
      store.state.orderList.forEach(item => {
        totalPrice += item.goodsNum * item.price;
      });
      return totalPrice;
    })
    return {
      store,
      ...toRefs(data),
      allPrice,
      onEdit,
      createOrderClick
    }
  }
}
</script>

<style lang="less" scoped>
.create_order {
  .order_list {
    overflow: hidden;
    padding-bottom: 100px;
  }

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 90px;
    background-color: #fff;
    padding: 5px 15px 5px 15px;

    .all_price {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;

      span {
        color: #ee0a24;
      }
    }

    .van-button {
      border-radius: unset;
    }
  }

}
</style>