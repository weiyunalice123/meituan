<template>
  <div class="remaning main-box">
    <Header title="我的余额" />
    <div class="content">
      <div class="remaing_bg">
        <div class="remaining">
          <div class="num_wrapper">
            <label>我的余额（元）</label>
            <h1>{{ remaning.toFixed(2) }}</h1>
          </div>
          <div class="action_button">
            <van-button type="default" @click="rechargeClick">充值</van-button>
            <van-button type="default" class="cash_out" @click="cashOutClick">提现</van-button>
          </div>
        </div>
      </div>
      <div class="remaining_wrapper">
        <div class="remaining_wrapper_style">
          <div class="remaining_list_title">
            <p>
              <label>余额明细</label>
              <span>查看全部</span>
              <van-icon name="arrow" />
            </p>
          </div>
          <div class="reaming_list">
            <ul>
              <li v-for="item in remaningList">
                <div class="left">
                  <label>{{ item.title }}</label>
                  <span>{{ item.date }}</span>
                </div>
                <div class="right">
                  <h1>{{ item.num.toFixed(2)}}</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Header from "../../../components/Header.vue";
import { Toast } from 'vant';
export default {
  components: {
    Header
  },
  setup() {
    const data = reactive({
      remaning: 0,
      remaningList: [
        {
          title: "余额支付",
          num: -1.00,
          date: "2020-07-19 13:32:38"
        },
        {
          title: "支付服务升级，余额结转",
          num: -1.00,
          date: "2020-09-12 02:03:14"
        }
      ]
    });
    const rechargeClick = () => {
      Toast("请在App上充值");
    }

    const cashOutClick = () => {
      Toast("请在App上提现");
    }
    return {
      ...toRefs(data),
      rechargeClick,
      cashOutClick,
    }
  }
}
</script>

<style lang="less" scoped>
.remaning {
  .content {
    .remaing_bg {
      padding: 50px 15px 0;
      background-color: #F9DE53;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      position: relative;
      height: 37vh;

      .remaining {
        padding: 30px 15px 20px;
        display: flex;
        background-color: #fff;
        border-radius: 5px;
        flex-flow: column;
        justify-content: center;
        position: absolute;
        left: 15px;
        right: 15px;

        .num_wrapper {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          h1 {
            font-size: 42px;
            font-weight: 400;
            margin-top: 10px;
          }
        }

        .action_button {
          display: flex;
          justify-content: space-between;

          .van-button {
            padding: 0 60px;
            border-radius: 30px;
          }

          .cash_out {
            background-color: #F7D347;
          }
        }
      }
    }

    .remaining_wrapper {
      padding: 15px;
      margin-top: 10px;
      .remaining_wrapper_style {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px 15px;

        .remaining_list_title {
          p {
            display: flex;
            justify-content: space-between;
            align-items: center;

            label {
              flex: 1;
              font-size: 20px;
            }

            span,
            i {
              color: #777777;
            }
          }
        }

        .reaming_list {
          ul {
            li {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 10px;
              .left {
                label {
                  display: block;
                  font-size: 14px;
                  margin-bottom: 5px;
                }
                span {
                  color: #777777;
                }
              }

              .right {
                h1 {
                  font-size: 20px;
                  margin: 10px 0;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }

    }
  }
}
</style>