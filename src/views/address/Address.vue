<template>
  <div class="address">
    <Header title="地址管理"/>
    <van-address-list
      :list="addressList"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      :switchable="switchable"
    />
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { reactive, toRefs, onMounted } from 'vue';
  import Header from '../../components/Header.vue';
  import { useRouter } from 'vue-router';
  export default {
    components: {
      Header,
    },
    setup() {
      const store = useStore();
      const router = useRouter();
      const data = reactive({
        addressList: [],
        switchable: false
      })

      //初始化数据
      const initData = () => {
        data.addressList = store.state.userAddress.map(item => ({
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: !!item.isDefault,
        }));
      }

      onMounted(() => {
        initData();
      })

      //增加地址
      const onAdd = () => {
        router.push({
          path: '/addressedit',
          query: {
            type: "add"
          }
        })
      }

      //编辑地址
      const onEdit = (item) => {
        router.push({
          path: '/addressedit',
          query: {
            id: item.id,
            type: "edit"
          }
        })
      }
      return {
        ...toRefs(data),
        store,
        onAdd,
        onEdit
      }
    }
  }
</script>

<style lang="less" scoped>
  /deep/ .van-tag--danger {
    background-color: #ffc400;
  }
  /deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
  }
</style>