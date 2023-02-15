<template>
  <div class="cart_list">
    <van-checkbox-group v-model="result" @change="groupCheckedChange">
      <div class="cart_list_content" v-for="item in store.state.cartList" :key="item.id">
        <FoodItem :showCheckbox="true" :itemData="item" :showAdd="true" :onChange="onChange" />
      </div>
    </van-checkbox-group>

    <!--price的单位是分，所以要乘100-->
    <van-submit-bar 
      :price="totalPrice * 100" 
      button-color="#ffc400" 
      button-text="结算" 
      @submit="onSubmit"
      v-if="isNotDelete"
    >
      <van-checkbox 
        v-model="all" 
        checked-color="#ffc400" 
        @change="checkedChange"
      >
        全选
      </van-checkbox>
    </van-submit-bar>
    <div class="action" v-else>
      <div class="left">
        <van-checkbox 
        v-model="all" 
        checked-color="#ffc400" 
        @change="checkedChange">
          全选
        </van-checkbox>
      </div>
      <div class="delete">
        <van-button round color="#ffc400" @click="deleteClick">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import FoodItem from '../../../components/FoodItem.vue';
import { useStore } from 'vuex';
import { reactive, toRefs, onMounted, computed } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import emitter from '../../../common/js/eventBus';
export default {
  components: {
    FoodItem
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const data = reactive({
      result: [],
      all: true,
      isNotDelete: true
    });

    //初始化选中数据
    const init = () => {
      data.result = store.state.cartList.map(item => item.id);
    }

    onMounted(() => {
      //默认全部选中
      init();
    });

    //商品个数同步
    const onChange = (value, detail) => {
      store.state.cartList.forEach(element => {
        if (element.id === detail.name) {
          element.goodsNum = value;
        }
      });
    };

    const updateCartList = (type) => {
      return type === 2 ? store.state.cartList.filter(item => data.result.includes(item.id)) :
      store.state.cartList.filter(item => !data.result.includes(item.id));
    }

    const onSubmit = () => {
      if(data.result.length === 0) {
        Toast.fail("请选择要支付的商品");
      } else {
        store.commit('PAY', updateCartList(2));
        router.push('/createorder');
      }
    }

    //全选
    const checkedChange = (value) => {
      if(value === true) {
        init();
      } else {
        data.result = [];
      }
    }

    //单选
    const groupCheckedChange = (result) => {
      //这个事件多次进入，不明原因，需优化
      data.result = result;
      if (result.length === store.state.cartList.length) {
        data.all = true;
      } else {
        data.all = false;
      }
    }

    //计算总价格
    const totalPrice = computed(() => {
      let sum = 0;
      store.state.cartList.forEach((item) => {
        if (data.result.includes(item.id)) {
          sum += item.goodsNum * item.price;
        }
      });
      return sum;
    })

    //事件接收
    emitter.on("edit", () => {
      data.isNotDelete = !data.isNotDelete;
    })

    //删除事件
    const deleteClick = () => {
      if(data.result.length === 0) {
        Toast.fail("请选择要删除的商品！");
      } else {
        //删除购物车数据
        store.commit('UPDATE_CART', updateCartList(1));

        //更新购物车选中数据
        data.result = [];

        if(store.state.cartList.length === 0) {
          store.commit('EDIT', 'delete');//购物车数据全部删除，设置显示“编辑”按钮
        }
      }
    }

    return {
      ...toRefs(data),
      onChange,
      onSubmit,
      store,
      totalPrice,
      checkedChange,
      groupCheckedChange,
      deleteClick
    }
  }
}
</script>

<style lang="less" scoped>
.cart_list {
  margin-top: 10px;
  padding: 0 15px;
  margin-bottom: 60px;

  .van-checkbox-group {
    background-color: #fff;
    border-radius: 10px;

    .cart_list_content {
      display: flex;
      padding: 5px 10px 0 0;

      .food_item {
        flex: 2;
      }
    }
  }

  .van-submit-bar {
    position: absolute;
    bottom: 47px;
  }
  .action {
    display: flex;
    align-items: center;
    height: 47px;
    font-size: 14px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 47px;
    padding: 0 16px;
    justify-content: space-between;
    .van-checkbox {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
  }
}
</style>