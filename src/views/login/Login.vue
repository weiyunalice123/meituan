<template>
  <div class="login main-box">
    <Header title="登录" />
    <div class="content">
      <img src="../../../public/logo.png" />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />

        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block native-type="submit" color="#ffc400">
            登录
          </van-button>
          <van-button round block class="register_btn" color="#ffc400" @click="registerClik">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
</div>
</template>

<script>

import Header from "../../components/Header.vue";
import { reactive, toRefs } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    Header,
  },
  setup() {
    const data = reactive({
      username: "",
      password: "",
    });
    const router = useRouter();
    const store = useStore();
    const onSubmit = (value) => {
      if (!localStorage.userInfo) {
        Toast("账号未注册，请先注册账号");
      } else {
        let data = JSON.parse(localStorage.userInfo);
        if (data.username === value.username) {
          if (data.password === value.password) {
            localStorage.setItem("isLogin", "1");
            router.push(store.state.currentRoute);
            return;
          } else {
            Toast("密码错误");
          }
        } else {
          Toast("用户不存在或者输入错误");
        }
      }
    }

    const registerClik = () => {
      router.push('/register');
    }
    return {
      ...toRefs(data),
      onSubmit,
      registerClik
    }
  }

}
</script>

<style lang="less" scoped>
/deep/ .van-form {
  width: 100%;

  .van-cell-group {
    border-radius: unset;
    margin: 0;
  }
}

.login {
  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 30px;

    img {
      height: 120px;
      width: 120px;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    .register_btn {
      margin-top: 10px;
    }
  }
}
</style>