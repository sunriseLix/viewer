<template>
  <div class="controlViews">
    <viewType/>
    <layout/>
  </div>
</template>

<script>
import viewType from './controlViews/viewType'
import layout from './controlViews/layout'
export default {
  name: 'control',
  components: {
    viewType,
    layout
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.controlViews{
  width: 296px;
  height: 100%;
  background:red;
}
</style>
