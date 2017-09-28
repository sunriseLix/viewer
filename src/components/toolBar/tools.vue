<template>
  <section class="tools-bar">
    <ButtonGroup>
       <Tooltip
        :content="item.text"
        v-for="item in buttons"
        :key="item.id">
        <Button :class="{active: operate.id === item.id}" @click="handleClickTool(item)">
          <i class="iconfont" :class="item.icon"></i>
        </Button><span :class="{borderR: item.borderR}"></span>
      </Tooltip>
    </ButtonGroup>
  </section>
</template>
<script>
import {buttons} from '@/assets/data/toolBtn'
export default {
  data () {
    return {
      buttons
    }
  },
  computed: {
    operate () {
      return this.$store.getters.getOperate
    }
  },
  methods: {
    handleClickTool (item) {
      this.$store.commit('SAVE_OPERATE', item)
    }
  }
}
</script>
<style scoped lang="less">
  .tools-bar{
    margin: 2px 0;
    background:#222222;
    .borderR{
      display: inline-block;
      width: 2px;
      height: 46px;
      background: #525252;
      vertical-align: bottom;
    }
    .ivu-btn{
      width: 48px;
      height: 46px;
      border-radius: 0;
      background-color: transparent;
      border-color: transparent;
      vertical-align: bottom;
    &.active,&:hover{
      background: #000;
    }
    }
  }
</style>
