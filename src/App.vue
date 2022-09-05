<template>
  <div class="app">
    <app-nav/>
    <router-view></router-view>
    <footer-app/>
  </div>
</template>

<script>



import AppNav from "@/components/AppNav";
import FooterApp from "@/components/FooterApp";

export default {
  name: 'App',
  components: {
    AppNav, FooterApp,
  },


}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

button{
  background: transparent;
}

.app{
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: black;
}
</style>
