<template>
  <div class="smsvalidation main-box">
    <Header title="短信验证" />
    <div class="content">
      <van-cell-group inset>
        <van-field disabled :value="tel" center label="手机号码" :placeholder="tel">
          <template #button>
            <van-button size="small" :disabled="isDisabled" type="primary" @click="sendCodeClick">{{ btnText }}</van-button>
          </template>
        </van-field>
        <van-field v-model="sms" maxlength="6" @update:model-value="validateValueChange" class="send_code" center clearable label="短信验证码">
        </van-field>
      </van-cell-group>
      <van-button type="primary" :disabled="disabledValidateStatus" @click="validateClick" class="validate" block>验证</van-button>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/Header.vue';
import { useStore } from 'vuex';
import { Toast } from 'vant';
import { reactive, toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      isDisabled: false,
      btnText: "发送验证码",
      sms: "",
      disabledValidateStatus: true
    });

    //获取电话号码
    const tel = computed(() => {
      let userInfoStr = localStorage.getItem("userInfo");
      if(userInfoStr) {
        return JSON.parse(userInfoStr).tel;
      }
    })

    const countDown = (value) => {
      let time = value;
      let timer = setInterval(() => {
        data.btnText = `${time}S后获取`;
        data.isDisabled = true;
        time--;
        if (time === 0) {
          data.isDisabled = false;
          data.btnText = "再次发送验证码";
          clearInterval(timer);
        }
      }, 1000)
    }

    //发送验证码事件
    const sendCodeClick = () => {
      Toast("验证码已发送");
      countDown(60);
    }

    //验证码输入框value change事件
    const validateValueChange = (value) => {           
      if(value.length > 1 && value.length <= 6) {
        data.disabledValidateStatus = false;
      }
    }

    //验证button事件
    const validateClick = () => {
      Toast("验证通过");
      router.push('/edittel');
    }

    return {
      ...toRefs(data),
      tel,
      sendCodeClick,
      validateValueChange,
      validateClick
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-field--disabled .van-field__label {
  color: #646566;
}

/deep/ .van-field__control:disabled {
  -webkit-text-fill-color: #646566;
}

/deep/ .van-button--small {
  background-color: #F8F8F8;
  border: unset;
  color: #646566;
  padding: 0 20px;
  border: 1px solid #ccc;
}

/deep/ .van-cell-group--inset {
  margin: 0 0 10px 0;
  border-radius: unset;
}

/deep/ .van-cell:after {
  border-bottom: unset;
}

/deep/ .van-cell {
  border-bottom: 1px solid #ebedf0;
}

.validate {
  margin: 0 3%;
  width: 94%;
  background-color: #FAE68F;
  border: unset;
  color: #777;
  font-size: 16px;
}
</style>