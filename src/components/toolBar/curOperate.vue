<template>
  <section class="operation">
    <h5>
      <span>当前操作: </span>
      <span>{{operate.text}}</span>
    </h5>
    <p></p>
  </section>
</template>
<script>
export default {
  name: 'curOperate',
  computed: {
    operate () {
      return this.$store.getters.getOperate
    }
  }
}
</script>
<style scoped lang="less">
  .operation{
    width:298px;
    height:50px;
  }
</style>
