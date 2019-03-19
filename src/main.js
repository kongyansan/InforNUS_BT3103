import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuefire from "vuefire";

Vue.use(vuefire);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
