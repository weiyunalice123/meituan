<template>
  <div class="nav_list">
    <div v-for="(i, index) in list" :key="index">
      <NavItem :item="i"/>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
  export default {
    props: ["list"],
    components: {
      NavItem
    }
  }
</script>

<style lang="less" scoped>

</style>