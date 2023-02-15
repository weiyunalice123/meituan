<template>
  <div class="food_item">
    <div class="content_left">
      <van-checkbox :name="itemData.id" v-if="showCheckbox" checked-color="#ffc400" />
      <img :src="itemData.pic">
      <div class="content_infor">
        <div class="title">{{ itemData.title }}</div>
        <div class="rank" v-if="itemData.salesRank">
          <span>本店销量排名第{{ itemData.salesRank }}名<van-icon name="arrow" /></span>
        </div>
        <div class="rank" v-if="itemData.popularityRank">
          <span>本店人气好评第{{ itemData.popularityRank }}名<van-icon name="arrow" /></span>
        </div>
        <div class="label" v-if="itemData.label">
          <span v-for="(i, index) in itemData.label" :key="index">{{ i }}</span>
        </div>
        <div class="number" v-if="itemData.num">
          <span v-for="(i, index) in itemData.num" :key="index">{{ i }}</span>
        </div>
        <div class="discount" v-if="itemData.discount">
          <svg class="icon" aria-hidden="true" fill="#ee0a24">
            <use xlink:href="#icon-zhekou"></use>
          </svg>
          <span>{{ itemData.discount }}折</span>
          <label v-if="itemData.coupon">(含{{ itemData.coupon }}元津贴)</label>
        </div>
        <div class="price">¥ <span>{{ itemData.price }}</span></div>
      </div>
    </div>
    <div class="content_right">
      <van-icon name="plus" size="12" @click="addClick(itemData.id)" v-if="showAdd && itemData.add"/>
      <van-stepper v-model="value" :name="itemData.id" @change="onChange" :min=1 v-else/>    
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["itemData", "showAdd", "addClick", "onChange", "showCheckbox"],
  setup(props) {
    const value = computed(() => {
      return props.itemData.goodsNum
    })
    return {
      value
    }
  }

}
</script>

<style lang="less" scoped>
.food_item {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
  .content_left {
    display: flex;
    .van-checkbox {
      margin-left: 15px;
      margin-right: 15px;
    }
    img {
      width: 100px;
      height: 85px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .content_infor {
      font-size: 12px;
      position: relative;
      .title {
        margin-bottom: 5px;
        font-size: 15px;
        font-weight: 600;
      }
      .rank {
        color: #ff8917;
        background-color: #f9e3c4;
        font-size: 11px;
        border-radius: 4px;
        padding: 0 3px;
        margin-bottom: 5px;
      }
      .label,
      .number {
        font-size: 11px;
        span {
          margin-right: 6px;
          color: #969799;
        }
      }
      .label {
        margin-bottom: 5px;
        span {
          border-radius: 4px;
          background-color: #eee;
          padding: 3px 5px;
          color: #656565;
          word-break: keep-all;
        }
      }
      .discount {
        color:#ee0a24;
        .icon {
          width: 12px;
          height: 12px;
          vertical-align: sub;
          fill: #ee0a24;
          margin-right: 3px;
        }
      }
      .price {
        margin-top: 15px;
        color: #ee0a24;
        span {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }

  }
  .content_right {
    position: absolute;
    right: 5px;
    bottom: 0;
    .van-icon-plus {
      background-color: #ffc400;
      border-radius: 5px;
      padding: 3px;
      font-weight: 600;
      vertical-align: sub;
    }
    .van-stepper {
      /deep/ .van-stepper__minus,
      /deep/ .van-stepper__input,
      /deep/ .van-stepper__plus {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>