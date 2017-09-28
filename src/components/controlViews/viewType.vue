<template>
  <div class="viewType">
    <h4>2Dviewer</h4>
    <ul>
      <li v-for="(val, key) of viewType" :key="key">{{val}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'viewType',
  data () {
    return {
      viewType: {
        '2d': '2Dviewer',
        'mpr': 'mpr'
      }
    }
  }
}
</script>
<style scoped lang="less">
.viewType{
  background: #222;
  width: 100%;
  height: 68px;
}
</style>
