<template>
  <div class="container">
    <aside class="container-left">
      <pageNav/>
    </aside>
    <section class="container-content">
      <toolBar></toolBar>
      <router-view></router-view> 
    </section>
  </div>
</template>

<script>
import pageNav from '@/components/pageNav'
import toolBar from '@/components/toolBar'

export default {
  name: 'main',
  components: {
    pageNav,
    toolBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container{
    position: fixed;
    top: 0;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: red;
    .container-left{
      float: left;
      height: 100%;
    }
    .container-content{
      width: 100%;
      height: 100%;
      background: #000;
      margin-left: 60px;
    }
  }
</style>
