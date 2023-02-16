<template>
  <div class="register main-box">
    <Header title="注册" />
    <div class="content">
      <img src="../../../public/logo.png" />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="confirmedpwd" type="password" name="confirmedpwd" label="确认密码" placeholder="确认密码"
            :rules="[{ required: true, message: '请再次填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block native-type="submit" color="#ffc400">
            注册
          </van-button>
          <van-button round block class="register_btn" color="#ffc400">
            已有账号去登录
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
import router from "../../router";
export default {
  components: {
    Header,
  },
  setup() {
    const data = reactive({
      username: "",
      password: "",
      confirmedpwd: "",
    })

    const register = (value) => {
      if (value.password !== value.confirmedpwd) {
        Toast("请确保两次输入的密码一致");
        return;
      } else {
        let userInfo = {
          username: value.username,
          password: value.password,
          confirmedpwd: value.confirmedpwd,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        Toast("注册成功，请登录");
        router.push('/login');
      }
    }
    const onSubmit = (value) => {
      if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.userInfo);
        if (value.username === userInfo.username) {
          Toast("该账号已存在，请登录");
          return;
        } else {
          register(value);
        }
      } else {
        register(value);
      }
    }
    return {
      ...toRefs(data),
      onSubmit,
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

.register {
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