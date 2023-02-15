<template>
  <div class="address_edit">
    <Header :title="title" />
    <van-address-edit 
      :area-list="areaList" 
      show-set-default
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave" 
      @delete="onDelete"
      :show-delete="isShowDeleteBtn === false ? false : true"
    />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      title: "",
      isShowDeleteBtn: false,
      addressInfo: {},
      areaList: {
        province_list: {
          110000: "陕西省",
          120000: "浙江省",
        },
        city_list: {
          110100: "西安市",
          110200: "咸阳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "长安区",
          110102: "雁塔区",
          120102: "上城区",
          130102: "下城区",
        },
      },
    });

    //数据初始化
    const initData = () => {
      if(route.query.type === 'edit') {
        data.addressInfo = store.state.userAddress.find(item => item.id === route.query.id);
        data.title = "编辑地址";
        data.isShowDeleteBtn = true;
      } else {
        data.title= "新建地址";
        data.isShowDeleteBtn = false;
      }
    } 

    onMounted(() => {
      initData();
    })

    //保存地址
    const onSave = (info) => {
      //保存编辑地址
      if(route.query.type === "edit") {
        store.commit('UPDATE_ADDRESS_LIST', info);
      } else {//保存新增地址
        store.commit('ADD_ADDRESS_LIST', info)
      }
      Toast("地址保存成功");
      setTimeout(()=> {
        router.back();
      }, 500);
    }

    //删除地址
    const onDelete = (info) => {
      store.commit('DELETE_ADDRESS', info);
      Toast("地址删除成功");
      setTimeout(()=> {
        router.back();
      }, 500);
    }
    return {
      ...toRefs(data),
      onSave,
      onDelete,
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
  }

  /deep/ .van-switch--on {
    background-color: #ffc400;
  }
</style>