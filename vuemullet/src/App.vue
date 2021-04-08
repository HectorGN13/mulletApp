<template>
  <v-app>
    <v-main fluid>
      <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <quick-menu :menu-count=count :icon-class=icons :color=color :menu-url-list=list :backgroundColor=background :position="position"></quick-menu>
        <v-container>
          <v-row>
            <v-col
                md="2"
                class="ml-auto mt-9"
            >
            <button_login class="hidden-md-and-down loginButton"></button_login>
            </v-col>
          </v-row>
          <v-row align="end">
            <v-col
                md="2"
                class="ml-auto mt-9"
            >
              <button_login class="loginButton"></button_login>
            </v-col>
          </v-row>
        </v-container>

        <my_footer></my_footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
//https://github.com/AshleyLv/vue-quick-menu
import quickMenu from "vue-quick-menu";
import my_footer from "./components/Myfooter";
import button_login from "./components/ButtonLogin";

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
      background: '#111010',
      color: '#F9E2C0',
      position: "top-left",
      isOpenNewTab: false
    };
  },
  components: {
    quickMenu,
    my_footer,
    button_login,
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
  background-image: url("./assets/background4.jpg");
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

@import url('http://fonts.cdnfonts.com/css/ifc-insane-rodeo');

.loginButton {font-family: 'IFC INSANE RODEO', sans-serif;}

/*---------------------------*/

</style>
