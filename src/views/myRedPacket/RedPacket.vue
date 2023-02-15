<template>
  <div class="red_packet main-box">
    <div class="content">
      <Header title="我的红包"></header>
      <div class="main">
        <ul class="red_packet_list">
          <li class="red_packet_item" v-for="item in dataList" key="item.id">
            <p class="red_packet_info">
              <label>{{ item.title }}</label>
              <span>¥<i>{{ item.num }}</i></span>
            </p>
            <p class="dead_line">
              <label>有效期至{{ item.deadLine }}</label>
              <span>{{ item.useScope }}</span>
            </p>
            <div class="use_scope">
              <van-collapse v-model="activeNames">
                <van-collapse-item :title="item.labelTitle" :name="item.labelTitle">
                  <ul>
                    <li v-for="(i, index) in item.label">
                      <label v-if="index !== (item.label.length-1)"> {{ i }}，</label>
                      <label v-else> {{ i }}。</label>
                    </li>
                  </ul>
                </van-collapse-item>
              </van-collapse>
              <van-button type="default">去使用</van-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
export default {
  components: {
    Header,
  },
  setup() {
    const data = reactive({
      activeNames: [],
      dataList: [
        {
          id: "mt01",
          title: "酒水新客专享红包",
          num: 8,
          deadLine: "2023.02.11",
          useScope: "满59可用",
          labelTitle: "限商品现价 + 打包费满20元使用（不含配送费）",
          label: ["到店自取订单不可用", "限酒水新用户使用", "限酒水类商家", "限本手机号用户使用"]
        },
        {
          id: "mt02",
          title: "便利店专享神券",
          num: 8,
          deadLine: "2023.02.10",
          useScope: "满20可用",
          labelTitle:"限商品现价 + 打包费满49元使用（不含配送费）", 
          label: ["限商品现价 + 打包费满30元使用（不含配送费）", "到店自取订单不可用", "限部分城市门店商家", "限便利店、小型超市类商家", "限本手机号用户使用"]
        },
        {
          id: "mt03",
          title: "宠物用品新客专享红包",
          num: 8,
          deadLine: "2023.02.18",
          useScope: "满30可用",
          labelTitle: "限商品现价 + 打包费满59元使用（不含配送费）",
          label: ["到店自取订单不可用", "限宠物用品新客使用", "限宠物类商家", "限本手机号用户使用"]
        },
        {
          id: "mt04",
          title: "买药尊享红包",
          num: 8,
          deadLine: "2023.02.11",
          useScope: "满49可用",
          labelTitle: "限商品现价 + 打包费满20元使用（不含配送费）", 
          label: ["到店自取订单不可用", "限医药健康类商家", "限本手机号用户使用"]
        },
        {
          id: "mt05",
          title: "鲜花新客专享红包",
          num: 8,
          deadLine: "2023.02.13",
          useScope: "满59可用",
          labelTitle: "限商品现价 + 打包费满29元使用（不含配送费）", 
          label: ["到店自取订单不可用", "限鲜花新用户使用", "限鲜花店、综合鲜花绿植店、绿植/园艺类商店", "限本手机号用户使用"]
        }
      ]
    })
    return {
      ...toRefs(data),
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-collapse {
  float: left;
  width: 70%;
}
/deep/ .van-collapse-item__title {
  padding: 0;
}
/deep/ .van-button {
  background-color: #ee0a24;
  font-size: 14px;
  color: #fff;
  height: 25px;
  border-radius: 8px; 
}
/deep/ .van-collapse-item__content {
  padding: 5px 5px 5px 0;
}
/deep/ .van-cell__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
  .red_packet {
    .content {
      .main {
        .red_packet_list {
          padding: 10px 15px;
          .red_packet_item {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 10px;
            padding: 10px;
            p {
              display: flex;
              justify-content: space-between;
              padding-bottom: 5px;
              padding: 0;
              margin: 0;
            }
            .red_packet_info {
              label {
                font-size: 18px;
                font-weight: 600;
                color: #494949;
              }
              span {
                color: #ee0a24;
                font-size: 16px;
                i {
                  font-size: 26px;
                  font-style: normal;
                  font-weight: 600;
                }
              }
            }
            .dead_line {
              font-size: 14px;
              padding-bottom: 20px;
              border-bottom: 1px #ccc dotted;
              span {
                color: #ee0a24;
              }
            }
            .use_scope {
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              ul {
                li {
                  label {
                    font-size: 12px;
                    color: #747474;
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