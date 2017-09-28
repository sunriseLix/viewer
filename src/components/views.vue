<template>
  <div class="views">
    <section
      class="views-series" 
      v-for="val in seriesMsg.size" 
      :style="{width: seriesMsg.width, height: seriesMsg.height}"
      :key="`series-${val}`"
      :class="{active: `series-${val}` === active.series}"
      @click="handleActiveSeries(`series-${val}`)">
      <section 
        class="views-image" 
        v-for="val in imageMsg.size"
        :style="{width: imageMsg.width, height: imageMsg.height}"
        :key="`image-${val}`"
        :class="{active: `image-${val}` === active.image}"
        @click="handleActiveImage(`image-${val}`)"></section>
    </section>
  </div>
</template>

<script>
import cross from './views/cross'
import { mapGetters } from 'vuex'
export default {
  name: 'reader',
  components: {
    cross
  },
  data () {
    return {
      active: {
        series: '11',
        image: '11'
      }
    }
  },
  computed: {
    seriesMsg () {
      let [row, cloumn] = this.activeSeries
      let msgObj = {
        size: row * cloumn,
        width: Math.round(100 / cloumn) + '%',
        height: Math.round(100 / row) + '%'
      }
      return msgObj
    },
    imageMsg () {
      let [row, cloumn] = this.activeImage
      let msgObj = {
        size: row * cloumn,
        width: Math.round(100 / cloumn) + '%',
        height: Math.round(100 / row) + '%'
      }
      return msgObj
    },
    ...mapGetters({
      activeSeries: 'getLayoutSeries',
      activeImage: 'getLayoutImage'
    })
  },
  methods: {
    handleActiveSeries (item) {
      console.log(item)
      this.active.series = item
    },
    handleActiveImage (item) {
      this.active.image = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.views {
  width: 100%;
  height: 100%;
  .views-series, .views-image{
    border: 1px solid #ccc;
    display: inline-block;
  }
  .views-series.active{
    border: 1px solid #408ee6;
  }
}
</style>
