<template>
  <div class="coupon main-box">
    <Header title="商家代金券" />
    <div class="content">
      <van-tabs v-model:active="active">
        <van-tab v-for="item in newCouponList" :title="item.type">
          <div v-if="item.length === 0" class="coupon_empty">
            <span>您当前没有满减代金券哦</span>
          </div>
          <ul v-else>
            <li v-for="i in item.couponList">
              <div class="coupon_item">
                <span class="left_sunken"></span>
                <div class="left">
                  <div class="red_packet">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-youhuiquan-copy"></use>
                    </svg>
                  </div>
                  <div class="title">
                    <span class="coupon_title">{{ i.title }}</span>
                    <label class="label">{{ i.label }}</label>
                    <p class="coupon_dedline">有效期至{{ i.deadLine }}</p>
                  </div>
                  <div class="desciption">{{ i.desciption }}</div>
                </div>
                <div class="right">
                  <p><label>¥</label><span>{{ i.num }}</span></p>
                  <div class="use_scope">满{{ i.useScope }}可用</div>
                  <van-button color="#ED6D69">立即使用</van-button>
                </div>
                <span class="right_sunken"></span>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs, computed } from 'vue';
export default {
  components: {
    Header,
  },
  setup() {
    const data = reactive({
      active: 1,
      tabData: [
        {
          type: "满减券",
          couponList: []
        },
        {
          type: "商品券",
          couponList: [
            {
              title: "宝洁x玛氏情人节券",
              label: "满减券",
              num: 50,
              deadLine: "2023.02.13 23:59",
              useScope: "199",
              desciption: "可与爆品/折扣/商家会员折扣/指定商品满减/x件优惠/第N件优惠/买赠/超值换购活动同享，按活动优惠后金额计算券门槛，在线支付专享。"
            },
            {
              title: "大牌联合运费券",
              label: "满减券",
              num: 50,
              deadLine: "2023.02.14 23:59",
              useScope: "59",
              desciption: "可与爆品/折扣/商家会员折扣/指定商品满减/x件优惠/第N件优惠/买赠/超值换购活动同享，按活动优惠后金额计算券门槛，在线支付专享。"
            },
            {
              title: "大牌联合通用券",
              label: "满减券",
              num: 50,
              deadLine: "2023.02.15 23:59",
              useScope: "109",
              desciption: "可与爆品/折扣/商家会员折扣/指定商品满减/x件优惠/第N件优惠/买赠/超值换购活动同享，按活动优惠后金额计算券门槛，在线支付专享。"
            },
            {
              title: "大牌联合通用券",
              label: "满减券",
              num: 50,
              deadLine: "2023.02.16 23:59",
              useScope: "39",
              desciption: "可与爆品/折扣/商家会员折扣/指定商品满减/x件优惠/第N件优惠/买赠/超值换购活动同享，按活动优惠后金额计算券门槛，在线支付专享。"
            }
          ]
        }
      ],

    });

    const newCouponList = computed(() => {
      return data.tabData.map(item => {
        if (item.couponList.length === 0) {
          return {
            ...item,
            length: 0
          };
        } else {
          return {
            ...item,
            length: item.couponList.length,
            type: `${item.type}(${item.couponList.length})`
          }
        }
      });
    })
    return {
      ...toRefs(data),
      newCouponList
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-tag {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 10px;
}

.coupon {
  .content {
    .coupon_empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      color: #777777;
    }
    ul {
      padding: 10px;

      li {
        padding: 10px;
        background-color: #fff;
        margin-bottom: 15px;
        border-radius: 5px;
        position: relative;

        .left_sunken,
        .right_sunken {
          position: absolute;
          width: 7px;
          height: 14px;
          top: 50%;
          margin-top: -7px;
          background-color: #f5f5f5;
        }

        .left_sunken {
          left: 0;
          border-top-right-radius: 14px;
          border-bottom-right-radius: 14px;
        }

        .right_sunken {
          right: 0;
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
        }

        .coupon_item {
          display: flex;
          justify-content: space-between;

          .left {
            flex: 1;
            position: relative;

            .red_packet {
              width: 55px;
              height: 60px;
              background-color: #FCEEED;
              border-radius: 10px;
              display: inline-block;
              margin-right: 10px;

              .icon {
                width: 55px;
                height: 60px;
              }
            }

            .title {
              display: inline-block;
              vertical-align: top;
              .coupon_title {
                font-size: 16px;
                margin-right: 5px;
                color:#3E3E3E;
              }             
              .label {
                font-size: 12px;
                border:1px solid #F1EDEE;
                color: #CB5946;
                border-radius: 3px;
                padding: 0 5px;
              }

              .coupon_dedline {
                color: #777777;
              }
            }


            .desciption {
              color: #BBBBBB;
              width: 95%;
              margin-top: 20px;
            }
          }

          .right {
            p {
              text-align: right;
              color: #DE5E4F;
              margin: 10px 0 5px;

              label {
                font-size: 14px;
              }

              span {
                font-size: 40px;
                //font-weight: 600;
              }
            }

            .use_scope {
              text-align: right;
              margin-bottom: 15px;
              color: #777777;
            }

            .van-button {
              height: 20px;
              padding: 0 6px;
              font-size: 12px;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>