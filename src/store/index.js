import { createStore } from "vuex";
export default createStore({
  state:{
    cartList: [],//购物车列表
    orderList: [],//生成订单列表（未生成的订单）
    isShowEdit: true,
    orderListed: [],//订单列表页（已生成的订单）
    userAddress: [
      {
        id: "1001",
        name: "Alice",
        tel: "18240898953",
        province: "陕西省",
        city: "西安市",
        county: "长安区",
        addressDetail: "天谷八路120号",
        isDefault: true,
        areaCode: '110101'//邮编要和areaList里的county_list要一样
      },
      {
        id: "1002",
        name: "魏芸",
        tel: "18240898953",
        province: "陕西省",
        city: "西安市",
        county: "长安区",
        addressDetail: "天谷八路520号",
        isDefault: false,
        areaCode: '110101'
      }
    ],
  },
  mutations:{//同步
    ADDCART(state, value) {//加入购物车
      state.cartList = value;
    },
    PAY(state, value) {//结算按钮
      state.orderList = value;
    },
    UPDATE_CART(state, value) {//删除购物车数据
      state.cartList = value;
    },
    EDIT(state, value) {//购物车编辑按钮
      if(value === 'delete') {
        state.isShowEdit = true;
      } else {
        state.isShowEdit = !state.isShowEdit;
      }
    },
    UPDATE_ORDERLISTED(state, value) {
      state.orderListed = state.orderListed.concat(state.orderList);
    },
    UPDATE_ADDRESS_LIST(state, value) {//保存编辑的地址
      state.userAddress = state.userAddress.map(item => {
        if(value.isDefault) {
          item.isDefault = false;
        }
        return item.id === value.id ? value : item
      })
    },
    ADD_ADDRESS_LIST(state, value) {//保存新增的地址
      state.userAddress.map(item => {
        if(value.isDefault) {
          item.isDefault = false;
        }
      });
      state.userAddress.push(value);
    },
    DELETE_ADDRESS(state, value) {
      state.userAddress = state.userAddress.filter(item => item.id !== value.id);
      if(value.isDefault) {
        if(state.userAddress.length !== 0) {
          state.userAddress[0].isDefault = true;
        }
      }
    }
  },
  actions:{}//异步
})