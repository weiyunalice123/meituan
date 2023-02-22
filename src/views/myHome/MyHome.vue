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
              <div v-for="(item, index) in homeData.bigClassify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small_classify">
              <div v-for="(item, index) in homeData.smallClassify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>

          </div>
        </div>
        <van-tabs class="vant-tabs">
          <van-tab v-for="(item, index) in homeData.tabList" :title="item.tab" :key="index">
            <NavList :list="item.data" />
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
import { reactive, toRefs, onMounted } from 'vue';
import { getHomeData } from '../../api/api';
import { async } from 'q';
export default {
  components: {
    Footer,
    NavList
  },
  setup() {
    let data = reactive({
      homeData: {
      }
    });
    
    const getHome = async () => {
      const res = await getHomeData();//异步操作放在await后面，等待请求的结果
      if(res.status === 200 && res.data.code === "0000") {
        data.homeData = res.data.data
      }
    } 

    onMounted(() => {
      getHome();
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
            -webkit-appearance: none; //去除阴影边框
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