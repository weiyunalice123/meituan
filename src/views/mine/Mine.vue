<template>
  <div class="mine main-box">
    <Header title="我的" />
    <div class="user_info">
      <div class="info">
        <van-image round fit="cover" width="80" height="80" src="logo.png">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="text_info" v-if="isLogin === '1'">
          <label>{{ userinfo.userName }}</label>
          <p>
            <span>{{ userinfo.tel }}</span>
            <i @click="changePhoneNum"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiugai"></use>
              </svg>修改
            </i>
          </p>
        </div>
        <a class="login_Register" v-else @click="loginAndRegister">登录/注册</a>
      </div>
    </div>
    <div class="content">
      <div class="manage_list">
        <ul>
          <li v-for="item in userinfo.actionList" :key="item.id">
            <div class="acition_item" @click="actionClick(item.id)">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.iconName"></use>
              </svg>
              <label class="action_text">{{ item.actionText }}</label>
              <label class="text" v-if="item.text">{{ item.text }}</label>
              <label class="num" v-if="item.num">{{ item.num }}</label>
              <label class="unit_text" v-if="item.unitText">{{ item.unitText }}</label>
              <van-icon name="arrow" color="#969799" />
            </div>
          </li>
        </ul>
      </div>
      <van-button type="default" block @click="logout" v-if="isLogin === '1'">退出</van-button>
    </div>
    <Footer />
</div>
</template>

<script>

import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  components: {
    Footer,
    Header,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let localStorageData = JSON.parse(localStorage.getItem("userInfo"));
    const data = reactive({
      isLogin: localStorage.getItem("isLogin"),
      userinfo: {
        username: localStorageData && localStorageData.username ? localStorageData.username : '',
        tel: localStorageData && localStorageData.tel ? localStorageData.tel : '',
        actionList: [
          {
            id: 1,
            actionText: "美团红包",
            num: 5,
            unitText: "张",
            iconName: "#icon-hongbao"
          },
          {
            id: 2,
            actionText: "商家代金券",
            iconName: "#icon-31hongbao"
          },
          {
            id: 3,
            actionText: "津贴",
            num: 20.2,
            text: "津贴余额",
            unitText: "元",
            iconName: "#icon-zijinbuzhu1-copy-copy"
          },
          {
            id: 4,
            actionText: "我的钱包",
            num: 3.80,
            text: "最近支付",
            unitText: "元",
            iconName: "#icon-qianbao1-copy"
          },
          {
            id: 5,
            actionText: "我的地址",
            iconName: "#icon-dizhi-copy-copy"
          },
          {
            id: 6,
            actionText: "我的收藏",
            iconName: "#icon-shoucang1-copy"
          },
          {
            id: 7,
            actionText: "我的评价",
            iconName: "#icon-pingjia"
          },
          {
            id: 8,
            actionText: "客服中心",
            iconName: "#icon-a-kefukefuzhongxin-copy"
          },
          {
            id: 9,
            actionText: "修改手机号",
            iconName: "#icon-shouji_huaban1"
          },
          {
            id: 10,
            actionText: "商家入驻",
            iconName: "#icon-shangjiaruzhu"
          },
        ]
      }
    });

    //列表点击事件
    const actionClick = (id) => {
      if (localStorage.isLogin !== "1") {
        router.push('/login');
      } else {
        switch (id) {
          case 1:
            router.push('/redpacket');
            break;
          case 2:
            router.push('/coupon');
            break;
          case 3:
            router.push('/allowance');
            break;
          case 4:
            router.push('/mywallet');
            break;
          case 5:
            router.push('/address');
            break;
          case 9:
          changePhoneNum();
          break;
        }
      }
    }

    //修改电话号码
    const changePhoneNum = () => {
      store.commit('UPDATE_CURRENT_ROUTE', '/mine');
      router.push("/validationcenter");
    }

    //退出登录
    const logout = () => {
      router.push('/login');
      localStorage.setItem("isLogin", "0");
      store.commit("UPDATE_CURRENT_ROUTE", '/mine');
    }

    //登录注册
    const loginAndRegister = () => {
      store.commit('UPDATE_CURRENT_ROUTE', 'mine')
      router.push('/login');
    }
    return {
      ...toRefs(data),
      actionClick,
      changePhoneNum,
      logout,
      loginAndRegister
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-icon-arrow {
  position: absolute;
  right: 10px;
}

/deep/ .van-image--round {
  margin-right: 20px;
}

.mine {
  .user_info {
    display: flex;
    height: 80px;
    padding: 20px;
    background-color: #FFD161;

    .info {
      display: flex;
      align-items: center;

      .login_Register {
        color: #000;
        font-size: 14px;
      }

      .text_info {
        label {
          font-size: 18px;
          font-weight: 600;
          color: #323232;
        }

        p {
          span {
            font-size: 15px;
            margin-right: 15px;
          }

          i {
            font-size: 12px;
            font-style: normal;
            background-color: #fff;
            opacity: 0.6;
            padding: 2px 8px;
            border-radius: 8px;
            height: 18px;
            line-height: 18px;

            .icon {
              height: 12px;
              width: 12px;
              margin-top: 1px;
              vertical-align: text-top;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  .content {

    //display: flex;
    .manage_list {
      flex: 1;
      overflow-y: auto;

      li {
        position: relative;
        border-bottom: 1px solid #ebedf0;
        background-color: #fff;

        .acition_item {
          padding: 15px 10px;
          display: flex;
          align-items: center;
          font-size: 14px;

          .icon {
            height: 20px;
            width: 20px;
            margin-right: 15px;
          }

          .action_text {
            margin-right: 15px;
          }

          .num {
            font-size: 20px;
            color: #ee0a24;
          }

          .text {
            font-size: 12px;
            color: #969799;
          }

          .unit_text {
            font-size: 12px;
            color: #969799;

          }
        }
      }

      li:last-child {
        border-bottom: unset;
        margin-bottom: 20px;
      }
    }

    .van-button {
      color: #323232;
      font-size: 16px;
      margin-bottom: 60px;
    }
  }
}</style>