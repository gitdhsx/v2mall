<template>
  <div id="app">
    <test-bar></test-bar>

    <main-tab-bar></main-tab-bar>

    <router-view/>

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
