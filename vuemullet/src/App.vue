<template>
  <v-app>
    <v-main fluid>
      <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <quick-menu :menu-count=count :icon-class=icons :color=color :menu-url-list=list :backgroundColor=background :position="position"></quick-menu>
        <banner></banner>
        <my_footer></my_footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
//https://github.com/AshleyLv/vue-quick-menu
import quickMenu from "vue-quick-menu";
import banner from "./components/Banner";
import my_footer from "./components/Myfooter";

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
      background: '#1F191A',
      color: '#F9E2C0',
      position: "top-left",
      isOpenNewTab: false
    };
  },
  components: {
    quickMenu,
    banner,
    my_footer,
  },
}
</script>

<style>
/*APP STYLE*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  min-height: 100vh;
  background-image: url("./assets/background2.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

body {
  background-color: black;
}
/*------------------------------*/

/* LOGIN BUTTON */

/*Background*/
/*<a href="https://es.vecteezy.com/vectores-gratis/starburst">Starburst Vectores por Vecteezy</a>*/

.loginButton {
  box-shadow:inset 0px 1px 0px 0px #6b463a;
  background:linear-gradient(to bottom, #381207 5%, #4a1207 100%);
  background-color:#381207;
  border-radius:3px;
  border:1px solid #5e1709;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Impact;
  font-size:28px;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #6b3822;
}
.loginButton:hover {
  background:linear-gradient(to bottom, #4a1207 5%, #381207 100%);
  background-color:#4a1207;
}
.loginButton:active {
  position:relative;
  top:1px;
}
/*---------------------------*/

</style>
