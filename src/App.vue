<template>
  <div id="app"><NavBar /><Lodging /></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Lodging from "./components/Lodging";

export default {
  name: "App",
  components: {
    NavBar,
    Lodging
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
