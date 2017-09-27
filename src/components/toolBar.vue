<template>
  <div class="toolBar">
    <curOperate/>
    <tools/>
  </div>
</template>
<script>
import curOperate from './toolBar/curOperate'
import tools from './toolBar/tools'
export default {
  name: 'toolBar',
  components: {
    curOperate,
    tools
  }
}
</script>
<style>
  .toolBar{
    display: flex;
    justify-content: flex-start;
    background:#525252;
  }
</style>
