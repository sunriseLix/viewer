<template>
  <div class="layout">
    <section class="layout-series">
      <h6>序列布局</h6>
      <ButtonGroup>
        <Button size="small"
          :class="{actve: activeSeries === item.val}"
          v-for="item in layoutSeries" 
          :key="item.val"
          @click="handleClickSeries(item)">
         <i :class="item.icon" class="iconfont"></i>
        </Button>
      </ButtonGroup>
    </section>
    <section class="layout-series">
      <h6>图像布局</h6>
      <ButtonGroup>
        <Button size="small"
        :class="{actve: activeImage === item.val}"
         v-for="item in layoutImage" 
         :key="item.val"
         @click="handleClickImage(item)">
         <i :class="item.icon" class="iconfont"></i>
        </Button>
      </ButtonGroup>
    </section>
  </div>
</template>

<script>
import {layoutSeries, layoutImage} from '@/assets/data/layout'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  data () {
    return {
      layoutSeries,
      layoutImage
    }
  },
  computed: {
    ...mapGetters({
      activeSeries: 'getLayoutSeries',
      activeImage: 'getLayoutImage'
    })
  },
  methods: {
    handleClickSeries (item) {
      this.$store.commit('SAVE_LAYOUT_SERIES', item.val)
    },
    handleClickImage (item) {
      this.$store.commit('SAVE_LAYOUT_IMAGE', item.val)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout{
  background:#3f3f3f;
  width:100%;
  height:162px;
  padding: 10px 20px 20px;
  .ivu-btn.actve{
    color: #2b85e4;
    background-color: #fff;
    border-color: #2b85e4;
  }
}
</style>