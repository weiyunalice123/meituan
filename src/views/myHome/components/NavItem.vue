<template>
  <div class="nav_item" @click="toStore(item.title)">
    <div class="img_infor">
      <img :src="item.img">
      <span v-if="item.isRecommended"><!--人气推荐-->
        <LikeIcon/>       
        <i>人气推荐</i>
      </span>
    </div>
    <div class="item_right">
      <div class="title">
        <span v-if="item.withCoupons">神券</span>
        <div class="van-ellipsis">{{ item.title }}</div>
        
      </div>
      <div class="sales">月售 {{ item.sales }}</div>
      <div class="price">起送 ¥{{ item.price }} 免配送费</div>
      <div class="label">
        <div v-for="(i, index) in item.label" :key="index">{{ i }}</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LikeIcon from '../../../components/common/Like.vue';
export default {
  props: ["item"],
  components: {
    LikeIcon,
  },
  setup() {
    const router = useRouter();
    const toStore = (title) => {
      router.push({
        path: "/store",
        query: {
          title
        }
      })
    }
    return {
      toStore
    }
  }
}
</script>

<style lang="less" scoped>
.nav_item:not(first-child) {
  margin-top: 10px;
}

.nav_item {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;

  .img_infor {
    margin-right: 20px;
    position: relative;
    img {
      width: 120px;
      height: 100px;
      border-radius: 10px;
    }

    span {
      position: absolute;
      right: 0;
      background: #f66323;
      color: #fff;
      border-radius: 5px;
      padding: 2px 4px;
      opacity: 0.8;
      .icon {
        width: 20px;
        height: 20px;
        fill: #fff;
        vertical-align: middle;
        margin-top: -2px;
      }
      i {
        font-style: normal;
        margin-left: 5px;
      }
    }
  }

  .item_right {
    display: flex;
    flex-flow: column;
    justify-content: space-between; //左右占满
    overflow: hidden;

    .title {
      font-size: 17px;
      font-weight: 600;
      span {
        font-size: 12px;
        font-weight: 400;
        background-color: #fa0669;
        color: #fff;
        border-radius: 4px;
        padding: 2px 4px;
        vertical-align: text-top;
      }
    }

    .label {
      display: flex;

      div {
        background-color: #fce9a4;
        margin-right: 10px;
        padding: 2px 4px;
        border-radius: 5px;
      }
    }
  }
}
</style>
