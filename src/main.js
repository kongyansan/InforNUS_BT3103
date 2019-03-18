import Vue from "vue";
import App from "./App.vue";
import vuefire from "vuefire";

Vue.use(vuefire);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
