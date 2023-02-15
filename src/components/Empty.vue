<template>
  <div class="empty">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ego-box"></use>
    </svg>
    {{labelText}}
  </div>
</template>

<script>
export default {
  props: ['labelText']
}
</script>

<style lang="less" scoped>
.empty {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 14px;
  .icon {
    margin-bottom: 20px;
  }
}

</style>