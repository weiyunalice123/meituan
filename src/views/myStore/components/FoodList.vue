<template>
  <div class="food_list" v-if="index === 0">
    <van-tree-select 
     v-model:main-active-index="active" 
     height="100vw" 
     :items="foodData.items"
     @click-nav="navClick"
     >
      <template #content>
        <div class="food_item" v-for="(i, index) in subItems" :key="index">
          <FoodItem :itemData="i" :showAdd="true" :addClick="addClick" :onChange="onChange"/>
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else-if="index === 1">
    评价++
  </div>
  <div v-else-if="index === 2">
    商家++
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
import FoodItem from "../../../components/FoodItem.vue";
export default {
  components: {
    FoodItem,
  },
  props: ["index", "foodData"],
  setup(props) {
    const data = reactive({
      active: 0,
      items: [],
      subItems: [],
    })

    //初始化数据
    let navTextArr = [];
    const initData = () => {
      props.foodData.items.map((item, index) => {
        navTextArr.push({text: item.text});
        if(data.active === index) {
          data.subItems = item.children;
        }
      })
      data.items = navTextArr;
    }
    initData();

    //左侧菜单切换
    const navClick = (i) => {
      data.active = i;
      initData();
    }

    //切换步进器
    const addClick = (id) => {
      data.subItems.forEach((item) => {
        if(id === item.id) {
          item.add = false;//显示计步器
          item.goodsNum += 1;//商品数量加1
        }
      })
    }

  //步进器数值增加事件
    const onChange = (value, detail) => {
      data.subItems.forEach((item) => {
        if(item.id === detail.name) {
          item.goodsNum = value;
        }
      })
    }
    return {
      ...toRefs(data),
      navClick,
      addClick,
      onChange
    };
  }
}
</script>

<style lang="less" scoped>
.food_list {
  /deep/ .van-sidebar-item--select:before {
    background-color: #ffc400;
  }
  /deep/ .van-tree-select__nav {
    flex: unset;
  }
  .food_item {
    padding: 5px 10px 0 0;
  }
}
</style>