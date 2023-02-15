<template>
  <div class="store_details">
    <Header title="店铺" />
    <div class="content">
      <div class="img" />
      <div class="food_classify">
        <div class="name">
          {{ title }}
          <img :src="imgPath" class="store_img">
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab 
              v-for="(item, index) in storeData" 
              :key="index" 
              :title="item.name" 
              :name="item.name">
              <FoodList :index="index" :foodData="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="handleServe"/>
      <van-action-bar-icon icon="cart-o" text="购物车" @click="toCart" :badge="store.state.cartList.length" />
      <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart"/>
      <van-action-bar-button type="danger" text="立即购买" @click="handleToBuy"/>
    </van-action-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue';
export default {
  components: {
    Header,
    FoodList,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const data = reactive({
      title: "小六汤包",
      imgPath: "xiaoliu1.png",
      storeData: [
      {
        name: "点菜",
        data: {
          content: "点菜",
          items: [
          {
            text: "热销套餐",
            children: [{
              id: 0,
              pic: "./foodList/1.png",
              title: "牛肉汤包",
              num: ["月售 16", "好评度 98%"],
              goodsNum: 0,
              salesRank: 1,
              price: 14.0,
              add: true
            },
            {
              id: 1,
              pic: "./foodList/2.png",
              title: "猪肉汤包",
              num: ["月售 56", "好评度 99%"],
              goodsNum: 0,
              popularityRank: 1,
              price: 12,
              add: true
            }, 
            {
              id: 2,
              pic: "./foodList/3.png",
              title: "蟹黄汤包",
              num: ["月售 67"],
              goodsNum: 0,
              popularityRank: 2,
              price: 30.0,
              add: true
            },
            {
              id: 3,
              pic: "./foodList/4.png",
              title: "地软粉条包子",
              num: ["月售67"],
              goodsNum: 0,
              popularityRank: 1,
              price: 12.0,
              add: true
            }, 
            {
              id: 4,
              pic: "./foodList/5.png",
              title: "虾肉汤包",
              num: ["月售 98"],
              goodsNum: 0,
              popularityRank: 2,
              price: 18.0,
              add: true
            }
          ]
          }, 
          {
            text: "炒菜",
            children: [
              {
                id: 5,
                pic: "./foodList/6.png",
                title: "蒜蓉油麦菜",
                price: 18.0,
                label:["约500g", "蒜香", "清炒"],
                num: ["月售 98"],
                goodsNum: 0,
                add: true
              },
              {
                id: 6,
                pic: "./foodList/7.png",
                title: "芹菜炒虾仁",
                price: 28.0,
                label:["约500g", "清炒"],
                num: ["月售 26"],
                goodsNum: 0,
                add: true
              },
              {
                id: 7,
                pic: "./foodList/8.png",
                title: "红烧豆角茄子",
                label:["约300g", "酱香", "茄子", "豆角"],
                num: ["月售 34"],
                goodsNum: 0,
                price: 26.0,
                add: true
              },
              {
                id: 8,
                pic: "./foodList/9.png",
                title: "椒麻鸡",
                price: 56,
                label:["约400g", "偏麻", "鸡肉"],
                num: ["月售 36"],
                goodsNum: 0,
                popularityRank: 2,
                add: true
              },
              {
                id: 9,
                pic: "./foodList/10.png",
                title: "清炒土豆丝",
                label:["约450g", "酸辣", "土豆丝", "尖椒"],
                num: ["月售 116"],
                goodsNum: 0,
                price: 12,
                popularityRank: 3,
                add: true
              },
              {
                id: 10,
                pic: "./foodList/11.png",
                title: "尖椒炒肉片",
                label:["约400g", "偏辣", "猪肉"],
                num: ["月售 78"],
                goodsNum: 0,
                price: 28,
                popularityRank: 3,
                add: true
              }
            ]
          },
          {
            text: "折扣专区",
            children: [
              {
                id: 11,
                pic: "./foodList/12.png",
                title: "清炒花白",
                discount: 7,
                coupon: 5,
                num: "",
                goodsNum: 0,
                price: 8.8,
                add: true
              },
              {
                id: 12,
                pic: "./foodList/13.png",
                title: "疙瘩汤",
                discount: 8,
                coupon: 3,
                num: 0,
                goodsNum: 0,
                price: 9.0,
                add: true
              },
              {
                id: 13,
                pic: "./foodList/14.png",
                title: "韭菜豆腐包子",
                num: 0,
                goodsNum: 0,
                discount: 8,
                price: 9.0,
                add: true
              },
              {
                id: 14,
                pic: "./foodList/15.png",
                title: "冰峰",
                num: 0,
                goodsNum: 0,
                price: 1.8,
                discount: 8,
                add: true
              },
              {
                id: 15,
                pic: "./foodList/16.png",
                title: "炝拌灰灰菜",
                discount: 8.8,
                num: 0,
                goodsNum: 0,
                price: 12.0,
                add: true
              },
              {
                id: 16,
                pic: "./foodList/17.png",
                title: "凉拌莲藕",
                num: "",
                goodsNum: 0,
                discount: 8.8,
                price: 12,
                add: true
              },
              {
                id: 17,
                pic: "./foodList/18.png",
                title: "红糖滋粑",
                discount: 8,
                num: 0,
                goodsNum: 0,
                price: 8.0,
                add: true
              }
            ]
          }]
        }
      },
      {
        name: "评价",
        data: {
          content: "",
          items: [
            {

            }
          ]
        }
      }, 
      { 
        name: "商家",
        data: {
          content: "",
          items: [
            {

            }
          ]
        }
      }]
    });

    //加入购物车事件
    const handleAddCart = () => {
      let newList = [];
      data.storeData.forEach((item) => {
        item.data.items.forEach(i => {
          if(i.children) {
            i.children.forEach(child => {
              if(child.goodsNum > 0) {
                newList.push(child);
              }
            })
          }
        })
      });
      if(newList.length === 0) {
        Toast("请加入商品");
        return;
      }
      store.commit("ADDCART", newList);
    }

    //客服
    const handleServe = () => {
      Toast.fail("敬请期待...");
    }

    //点击购物车
    const toCart = () => {
      router.push('/cart');
    }

    //立即购买
    //一、商品加入购物车
    //二、跳转到购物车页面
    const handleToBuy = () => {
      handleAddCart();
      toCart();
    }
    return {
      ...toRefs(data),
      store,
      handleAddCart,
      handleServe,
      handleToBuy,
      toCart
    }
  }
}
</script>

<style lang="less" scoped>
.store_details {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 50px;
    .img {
      background: url('../../../public/xiaoliu.png') no-repeat center/cover;
      height: 150px;
      width: 100%;
    }

    .food_classify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        font-size: 22px;
        font-weight: 600;
        .store_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>