<template>
  <nav id="nav" class="nav">
    <ul class="nav-menu">
      <router-link
      v-for="item in nav"
      :key="item.id"
      tag="li" :to="{name: item.name}"><a>{{item.text}}</a></router-link>
    </ul>
  </nav>
</template>
<script>
import nav from '@/assets/data/nav'
export default {
  name: 'pageNav',
  data () {
    return {
      nav
    }
  }
}
</script>
<style scoped lang="less">
  .nav{
    background:#1c1c1c;
    width:60px;
    height:100%;
  }
</style>

