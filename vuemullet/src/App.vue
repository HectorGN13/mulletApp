<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon icon="home" />
    <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :position="position"></quick-menu>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//https://github.com/AshleyLv/vue-quick-menu
import quickMenu from "vue-quick-menu";

export default {
  name: 'App',
  data() {
    return {
      count: 4,
      icons: ["fas fa-cut","fas fa-map-marked-alt","fas fa-camera-retro","fa fa-envelope"],
      list: [
        { isLink: false },
        { isLink: false },
        { isLink: false },
        { isLink: false }
      ],
      position: "top-left",
      isOpenNewTab: false
    };
  },
  components: {
    HelloWorld,
    quickMenu
  },
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
