<template>
  <div class="wallet main-box">
    <Header title="我的钱包" />
    <div class="content">
      <div class="remaining_sum_infor">
        <div class="remaining_sum">
          <div>
            <label>余额（元）</label>
            <h2>0.00</h2>
          </div>
          <van-button plain type="success" @click="checkRemaningClick">查看余额</van-button>
        </div>
      </div>
      <ul class="action_list">
        <li v-for="item in actionList" @click="actionClick">
          <p>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.iconName"></use>
            </svg>
            <label>{{ item.title }}</label>
            <van-icon name="arrow" color="#777777" />
          </p>
          <p>{{ item.quota }}</p>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      actionList: [
        {
          iconName: "#icon-jieqian1",
          title: "借钱",
          quota: 166000,
          text: "预计可借（元）",
          label: "为您推荐"
        },
        {
          iconName: "#icon-xinyongqia",
          title: "联名信用卡",
          quota: 10000,
          text: "最高额度（元）"
        },
        {
          iconName: "#icon-lishizhangdan",
          title: "我的账单",
          quota: 259.64,
          text: "本月消费"
        },
        {
          iconName: "#icon-qian-copy",
          title: "笔笔返",
          quota: "5笔",
          text: "笔笔返利"
        }
      ]
    });
    
    //查看余额
    const checkRemaningClick = () => {
      router.push('/remaining');
    }
    const actionClick = () => {
      Toast("请在App上操作");
    }
    return {
      ...toRefs(data),
      checkRemaningClick,
      actionClick,
    }
  }


}
</script>

<style lang="less" scoped>
/deep/ .van-button {
  height: 30px;
  border-radius: 5px;
  background-color: #FFD161;
  border: 1px solid #000;
  color: #000;
}
.wallet {
  background-color: #fff;

  .content {
    overflow-x: hidden;

    .remaining_sum_infor {
      padding: 20px;
      .remaining_sum {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        background-color: #FFD161;
        padding: 15px;
        border-radius: 10px;
        label {
          font-size: 14px;
        }
        h2 {
          font-size: 26px;
          font-weight: 400;
        }
      }
    }

    .action_list {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding-top: 0;
      li {
        border: 1px solid #f2f3f5;
        width: 35%;
        border-radius: 5px;
        margin-bottom: 8px;
        padding: 15px;

        p {
          display: flex;
          align-items: center;
          margin: 0;
          .icon {
            width: 20px;
            height: 20px;
          }

          label {
            flex: 1;
            margin-left: 5px;
          }
        }

        p:nth-child(2) {
          font-size: 26px;
          margin-bottom: 0;
          margin-top: 15px;
        }

        p:nth-child(3) {
          color: #777777;
        }
      }

      li:nth-child(odd) {
        margin-right: 8px;
      }
    }
  }
}
</style>