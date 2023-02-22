<template>
  <div class="validation main-box">
    <Header title="验证中心"/>
    <div class="content">
      <div class="notification">
        <label>为了您的账户安全</label>
        <label>请选择一种方式完成验证</label>
      </div>
      <van-button block @click="SMSValidation">短信验证</van-button>
      <van-button block>支付密码验证</van-button>
    </div>
  </div>
</template>

<script>
  import Header from "../../../components/Header.vue";
  import { reactive, toRefs } from "vue";
  import { useRouter } from "vue-router";
  export default {
    components: {
      Header,
    },
    setup() {
      const router = useRouter();
      const data = reactive({

      });
      const SMSValidation = () => {
        router.push('/smsvalidation');
      }
      return {
        SMSValidation
      }
    }
  }
</script>

<style lang="less" scoped>
  .validation {
    .content {
      padding: 20px 10px;
      .notification {
        display: flex;
        flex-flow: column;
        align-items: center;
        font-size: 18px;
        margin-bottom: 20px;
      }
      .van-button {
        margin-bottom: 10px;
        border: #ebedf0;
        background-color: #fff;
        color: #000;
      }
    }
  }
</style>