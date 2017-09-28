<template>
  <nav id="nav" class="nav">
    <div class="nav-logo">
       <img :src="src" alt="logo" width="30">
    </div>
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
      nav,
      src: require('@/assets/logo.png')
    }
  }
}
</script>
<style scoped lang="less">
  .nav{
    background:#1c1c1c;
    width:60px;
    height:100%;
    text-align: center;
    .nav-logo{
      padding: 10px 0;
      height: 50px;
    }
    .nav-menu li{
      background: #1c1c1c;
      line-height: 50px;
      width:60px;
      &:hover, &.active {
        background:#000000;
      }
      a{
        color:#fff;
      }
    }
  }
</style>

