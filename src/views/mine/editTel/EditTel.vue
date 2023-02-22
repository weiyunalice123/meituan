<template>
  <div class="edit_tel main-box">
    <Header title="更换手机号" />
    <div class="content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="newTel" @update:model-value="updateInputValue" name="newTel" label="请输入新的手机号" placeholder="更换后的手机号"
            :rules="[{ required: true, message: '请填写更换后的手机号' }]" />
        </van-cell-group>
        <div style="padding: 20px 34px;background-color: #fff;">
          <van-button block type="default" maxLendth="11" :disabled="isDisabled" native-type="submit">
            获取验证码
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import { Dialog } from 'vant';
import { useRouter } from 'vue-router';
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      newTel: "",
      isDisabled: true,
    });

    const updateInputValue = (value) => {
      if(value.length < 11) {
        data.isDisabled = true;
      } else {
        data.isDisabled = false;
      }
    }
    const onSubmit = (newTel) => {
      let localStorageData = JSON.parse(localStorage.getItem("userInfo"));
      if(newTel === localStorageData.tel) {
        Dialog({
          title: '提示',
          message: '您当前已绑定该手机号',
        }).then(() => {
          
        });
      } else {
        localStorageData.newTel = data.newTel;
        localStorage.setItem('userInfo', JSON.stringify(localStorageData));
        router.push('/inputvalidatecode');
      }
    }
    return {
      ...toRefs(data),
      onSubmit,
      updateInputValue,
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-cell-group--inset {
  margin: 0;
  border-radius: unset;
  border: unset;
  .van-cell {
    display: flex;
    flex-flow: column;
    padding: 35px;
    .van-field__label {
      width: unset;
      font-size: 22px;
      margin-bottom: 40px;
    }
    .van-field__body {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>