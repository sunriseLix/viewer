<template>
  <div class="reader">
    <controlViews/>
    <views/>
  </div>
</template>

<script>
import controlViews from '@/components/controlViews'
import views from '@/components/views'
export default {
  name: 'reader',
  components: {
    controlViews,
    views
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reader{
  width: 100%;
  height: 100%;
  background: #000;
  margin: 0 1px;
  display: flex;
}
</style>
