<template>
  <div class="main-box">
    <Header title="更换手机号码" />
    <div class="content">
      <div class="content_box">
        <h1>请输入验证码</h1>
        <p>若短信发送失败，请重新点击获取短信验证码</p>
        <a @click="countDown(60)" :class="class" >{{ btnText }}</a>
        <van-field maxlength="6" @update:model-value="inputValueChange" v-model="validateCode" placeholder="请输入短信验证码" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Dialog } from 'vant';
export default {
  components: {
    Header,
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const data = reactive({
      validateCode: "",
      btnText: "s后重新获取",
      isDisabled: true,
      class: ""
    });

    const countDown = (value) => {
      let time = value;
      let timer = setInterval(() => {
        data.btnText = `${time}s后重新获取`;
        data.isDisabled = true;
        time--;
        data.class = '';
        if (time === 0) {
          data.isDisabled = false;
          data.btnText = "再次获取验证码";
          data.class = "get_validate_code";
          clearInterval(timer);
        }
      }, 1000)
    }

    onMounted(() => {
      countDown(60);
    })

    const inputValueChange = (value) => {
      if(value.length === 6) {
        Dialog({
          title: '提示',
          message: '电话号码已修改成功，请重新登录',
        }).then(() => {
          store.commit("UPDATE_CURRENT_ROUTE", "/mine");
          localStorage.isLogin = false;
          let userInfo = JSON.parse(localStorage.getItem('userInfo'));
          userInfo.tel = userInfo.newTel;
          delete userInfo.newTel;
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          router.push('/login');
        });
      }
    }

    return {
      ...toRefs(data),
      countDown,
      inputValueChange
    }
  }
}
</script>

<style lang="less" scoped>
.main-box {
  .content {
    padding: 40px;
    background-color: #fff;

    .content_box {
      h1 {
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 30px;
      }

      p {
        font-size: 14px;
        margin-bottom: 10px;
      }

      span {
        color: #777;
        font-size: 12px;

      }

      .van-cell {
        padding: 0;
        margin-top: 30px;
        border-bottom: 1px solid #ccc;
      }

      .get_validate_code {
        color: #ffc400;
      }
    }
  }
}</style>