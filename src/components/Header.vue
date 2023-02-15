<template>
  <div class="header">
    <van-icon name="arrow-left" class="go_back_btn" @click="toBack"/>
    <h2>{{ title }}</h2>
    <div class="edit" @click="editClick" v-if="showEditBtn">{{store.state.isShowEdit? "编辑": "完成"}}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import emitter from "../common/js/eventBus";
import { Toast } from "vant";
import { useStore } from "vuex";
  export default {
    props: ['title', 'showEditBtn'],
    setup() {
      const router = useRouter();
      const store = useStore();
      const toBack = () => {
        router.back();
      }
      const editClick = () => {
        if(store.state.cartList.length) {
          emitter.emit("edit");//事件抛出
          store.commit("EDIT");
        } else {
          Toast.fail("购物车为空，请加入商品")
        }
      }
      return {
        toBack,
        editClick,
        store
      }
    }
  }
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.06667rem;
  line-height: 1.06667rem;
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  position: relative;
  .go_back_btn {
    position: absolute;
    left: 10px;
    font-size: 22px;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  .edit {
    position: absolute;
    right: 15px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>