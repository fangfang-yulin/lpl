<!--
 * @Date: 2020-02-21 16:23:47
 * @LastEditTime: 2020-02-21 19:57:20
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 -->
<template>
<div>
  <link-view></link-view>
    <Tabbar></Tabbar>
</div>

</template>

<script>
import Tabbar from '@/components/Tabbar/index.vue'
// import Footer from './components/Footer.vue'
// import Bars from './components/Bars.vue'
// import Toast from './components/Toast.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
