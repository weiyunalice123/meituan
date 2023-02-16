<template>
  <div :class="`empty_login empty_login_${page}`">
    <span>{{ text }}</span>
    <van-button type="default" @click="login" to="/login">登录</van-button>
  </div>
</template>

<script>
  export default {
    props: ['text', 'page', 'login']
  }
</script>

<style lang="less" scoped>
/deep/ .van-button {
  padding: 0 20px;
  font-size: 16px;
  color: #000;
  background-color: #F6D274;
  height: 35px;
}
  .empty_login {
    height: 50vh;
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
    span {
      margin-bottom: 20px;
      font-size: 14px;
      color: #777;
    }
  }
  .empty_login_order {
    background-image: url('../../public/emptyLogin/order.png');
    background-repeat: no-repeat;
    background-position: center center;
  }
  .empty_login_cart {
    background-image: url('../../public/emptyLogin/cart.png');
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>