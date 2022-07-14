<template>
  <NavBar />
  <router-view> </router-view>
</template>

<script>
import NavBar from './components/NavBar.vue' // 导入组件
import "bootstrap/dist/css/bootstrap.min.css" // 导入boostrap依赖
import "bootstrap/dist/js/bootstrap"

export default {
  // 如果想用这个组件 需要将其放到关键字components里
  components: {
    NavBar
  }

}
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
