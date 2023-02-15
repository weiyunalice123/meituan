<template>
  <div class="home main-box">
    <div class="content">
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>雅居乐湖居笔记</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="main">
        <div class="main_bg">
            <div class="search_wrapper">
              <input type="text" />
              <a href="javascript: void(0);">搜索</a>
            </div>
          <div class="classify">
            <div class="big_classify">
              <div v-for="(item, index) in bigClassify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small_classify">
              <div v-for="(item, index) in smallClassify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>

          </div>
        </div>
        <van-tabs class="vant-tabs">
          <van-tab
            v-for="(item, index) in tabList"
            :title="item.tab"
            :key="index">
              <NavList :list="item.data"/>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavList from './components/NavList.vue';
import { reactive, toRefs } from 'vue';

export default {
  components: {
    Footer,
    NavList
  },
  setup() {
    let data = reactive({
      bigClassify: [
        {name: "美食",icon: "icon-meishi"},
        {name: "甜点饮品",icon: "icon-tiandianmianbaodangaoshuiguotiandian"},
        {name: "超市便利",icon: "icon-baihuochaoshi"},
        {name: "蔬菜水果",icon: "icon-icon-test"},
        {name: "美团买药",icon: "icon-zhichiyiyuanyaodian"}
      ],
      smallClassify: [
        {name: "午餐",icon: "icon-wucan"},
        {name: "酒水",icon: "icon-pijiu"},
        {name: "新鲜水果",icon: "icon-icon-test"},
        {name: "汉堡披萨",icon: "icon-hanbao"},
        {name: "休闲饮品",icon: "icon-yinpin"},
        {name: "夜宵",icon: "icon-yexiao"},
        {name: "吐司",icon: "icon-tusimianbao"},
        {name: "跑腿",icon: "icon-paotuiAPP"},
        {name: "美人佳丽",icon: "icon-meirongmeiti"},
        {name: "全部分类",icon: "icon-nav-01"}
      ],
      tabList: [
      {
          tab: "神券节",
          data: [
            {
              title: "小六汤包",
              price:"23",
              sales: "2888",
              label: ["门店上新", "很下饭"],
              withCoupons: true,
              img: "./home/1.png"
            },
            {
              title: "哈米尼cake手工蛋糕",
              price:"40",
              sales: "1231",
              label: ["门店上新", "很下饭"],
              withCoupons: true,
              img: "./home/2.png"
            },
            {
              title: "姥姥家的疙瘩汤",
              price:"34",
              sales: "2341",
              label: ["门店上新", "很下饭"],
              withCoupons: true,
              img: "./home/3.png"
            },
            {
              title: "潼关肉夹馍",
              price:"18",
              sales: "12452",
              label: ["门店上新", "很下饭"],
              withCoupons: true,
              img: "./home/4.png"
            },
            {
              title: "叁宝烤肉",
              price:"78",
              sales: "4567",
              label: ["门店上新", "很下饭"],
              withCoupons: true,
              img: "./home/5.png"
            },
          ]
      },
      {
        tab: "天天神券",
        data: [
          {
            title: "粥先生",
            price:"23",
            sales: "2888",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/6.png"
          },
          {
            title: "大喜寿司屋",
            price:"40",
            sales: "123",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/7.png"
          },
          {
            title: "红火新疆炒米粉",
            price:"34",
            sales: "2341",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/8.png"
          },
          {
            title: "肯德基宅急送",
            price:"23",
            sales: "12358",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/9.png"
          },
          {
            title: "巨老香大碗排骨饭",
            price:"78",
            sales: "4567",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/10.png"
          },
        ]
      },
      {
        tab: "点评高分",
        data: [
          {
            title: "香味小厨",
            price:"57",
            sales: "2341",
            label: ["门店上新", "很下饭"],
            isRecommended: true,
            img: "./home/11.png"
          },
          {
            title: "朝花里青椒鱼",
            price:"40",
            sales: "12312",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            isRecommended: true,
            img: "./home/12.png"
          },
          {
            title: "众家煎饼屋",
            price:"45",
            sales: "12341",
            label: ["门店上新", "很下饭"],
            isRecommended: true,
            img: "./home/13.png"
          },
          {
            title: "麦当劳麦乐送",
            price:"34",
            sales: "12358",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            isRecommended: true,
            img: "./home/14.png"
          },
          {
            title: "李想大虾",
            price:"78",
            sales: "6567",
            label: ["门店上新", "很下饭"],
            isRecommended: true,
            img: "./home/15.png"
          },
        ]
      },
      {
        tab: "优惠商家",
        data: [
          {
            title: "哈利加西北烤肉",
            price:"60",
            sales: "1888",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/16.png"
          },
          {
            title: "东北小二东北菜",
            price:"40",
            sales: "123",
            label: ["门店上新", "很下饭"],
            withCoupons: true,
            img: "./home/17.png"
          },
          {
            title: "绿叶广式烧腊馆",
            price:"67",
            sales: "2341",
            label: ["门店上新", "很下饭"],
            img: "./home/18.png"
          },
          {
            title: "关鱼把把烧",
            price:"28",
            sales: "12358",
            label: ["门店上新", "很下饭"],
            img: "./home/19.png"
          },
          {
            title: "古觉面片",
            price:"78",
            sales: "4567",
            label: ["门店上新", "很下饭"],
            img: "./home/20.png"
          },
        ]
      }
      ]
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .content {
    overflow-x: hidden;
    .header {
      display: flex;
      justify-content: space-between; //左右占满
      align-items: center; //垂直居中
      padding: 20px 20px 40px 20px;
      background-image: linear-gradient(#ffc400, #fff); //设置渐变背景色

      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        font-size: 14px;
        span {
          margin: 0 5px;
        }
      }
    }

    .main {
      margin-top: -30px;
      .main_bg {
        background-image: linear-gradient(#fff, #f5f5f5); //设置渐变色
        padding: 10px 10px 0 10px;
        border-radius: 30px 30px 0 0; //上左，上右，下左，下右
        .search_wrapper {
          position: relative;
          input {
            width: 95%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 33px;
            box-sizing: border-box;
            -webkit-appearance: none;//去除阴影边框
          }

          a {
            position: absolute;
            background-color: #ffc400;
            right: 0;
            top: 0;
            width: 50px;
            height: 33px;
            line-height: 33px;
            border-radius: 16px;
            text-align: center;
            font-size: 14px;
            color: #000;
          }
        }
        .classify {
          padding: 10px 0;
          .big_classify {
            display: flex;
            margin-bottom: 10px;

            div {
              display: flex;
              flex: 1; //左右平分
              justify-content: center; //水平居中
              flex-flow: column; //垂直方向
              align-items: center; //垂直居中
              .icon {
                width: 45px;
                height: 45px;
                margin-bottom: 5px;
              }
            }
          }

          .small_classify {
            display: flex;
            flex-wrap: wrap; //换行
            margin-top: 10px;
            div {
              width: 20%; //一行五个
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
              .icon {
                height: 30px;
              }
            }
          }
        }
      }
      .vant-tabs {
        padding: 0 10px 10px;
      }
    }
  }
}
/deep/ .van-tabs__wrap {
  border-radius: 10px;
}
</style>