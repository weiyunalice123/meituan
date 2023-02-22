<template>
  <div class="store_details">
    <Header title="店铺" />
    <div class="content">
      <div class="img">
        <img :src="storeImg">
      </div>
      <div class="food_classify">
        <div class="name">
          {{ title }}
          <van-button class="collect_btn" @click="collectHandle(storeImg, title, storeData)">{{ getCollectText
          }}</van-button>
          <!--<img :src="imgPath" class="store_img">-->
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab v-for="(item, index) in storeData" :key="index" :title="item.name" :name="item.name">
              <FoodList :index="index" :foodData="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="handleServe" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="toCart" :badge="store.state.cartList.length" />
      <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
      <van-action-bar-button type="danger" text="立即购买" @click="handleToBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue';
import { getMyStoreData } from '../../api/api';
import * as _ from 'lodash';
export default {
  components: {
    Header,
    FoodList,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const data = reactive({
      collectedText: "",
      storeImg: "",
      title: "",
      imgPath: "",
      storeData: []
    });

    //初始化当前店铺收藏按钮显示的文字
    const getdefaultStatus = (title) => {
      let storeList = JSON.parse(localStorage.getItem("storeList"));
      if (_.isEmpty(storeList)) {
        data.collectedText = "收藏";
      } else {
        let storeTitleList = storeList.map(item => item.title);
        if (storeTitleList.includes(data.title)) {
          data.collectedText = "已收藏";
        } else {
          data.collectedText = "收藏";
        }
      }
    }

    // 获取商店列表数据
    const getMyStore = async () => {
      const res = await getMyStoreData();
      if (res.status === 200 && res.data.code === "0000") {
        let obj = res.data.data.find(item => item.title === route.query.title);
        if (obj) {
          data.storeImg = obj.storeImg;
          data.title = obj.title;
          data.imgPath = obj.imgPath;
          data.storeData = obj.storeData;
          getdefaultStatus(data.title);
        }
      }
    }

    onMounted(() => {
      getMyStore();
    })

    //收藏处理, 数据保存在localstorage中
    const collectHandle = (storeImg, title, listData) => {
      let collectStoreList = [];
      let localStoreList = JSON.parse(localStorage.getItem("storeList"));
      if (_.isEmpty(localStoreList)) {
        collectStoreList.push({storeImg, title});
        data.collectedText = "已收藏";
      } else {
        let localStoreTitle = localStoreList.map(item => item.title);
        if (localStoreTitle.includes(title)) {
          collectStoreList = localStoreList.filter(item => item.title !== title);
          data.collectedText = "收藏";
        } else {
          collectStoreList = [
            ...localStoreList,
            {
              storeImg,
              title
            }
          ];
          data.collectedText = "已收藏";
        }
      }
      localStorage.setItem("storeList", JSON.stringify(collectStoreList));
    }

    //计算收藏按钮显示的文字
    const getCollectText = computed(() => {
      return data.collectedText;;
    })

    //加入购物车事件
    const handleAddCart = () => {
      let newList = [];
      data.storeData.forEach((item) => {
        item.data.items.forEach(i => {
          if (i.children) {
            i.children.forEach(child => {
              if (child.goodsNum > 0) {
                newList.push(child);
              }
            })
          }
        })
      });
      if (newList.length === 0) {
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
      collectHandle,
      handleAddCart,
      handleServe,
      handleToBuy,
      toCart,
      getCollectText
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-tabs__wrap {
  //width: 25%; 
  .van-tab--active {
    font-weight: 600;
  }
}

.store_details {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 50px;

    .img {
      height: 130px;
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .food_classify {
      height: 500px;
      background-color: #fff;
      border-radius: 20px 20px 0 0;
      position: relative;
      margin-top: -30px;
      position: relative;

      .name {
        display: flex;
        padding: 20px 20px 5px;
        justify-content: space-between;
        font-size: 22px;
        font-weight: 600;

        /*.store_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }*/
      }

      .collect_btn {
        border: 1px solid #ccc;
        background-color: #fff;
        color: #323233;
        height: 25px;
        font-size: 12px;
        font-weight: 400;
        padding: 0 10px;
      }
    }
  }
}
</style>