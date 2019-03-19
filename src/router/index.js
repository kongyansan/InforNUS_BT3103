import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import Lodging from "@/components/Lodging";
import courseSelectionpane from "@/components/courseSelectionpane";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },

    {
      path: "/lodging",
      name: "Lodging",
      component: Lodging
    },

    {
      path: "/courseSelection",
      name: "courseSelection",
      component: courseSelectionpane
    }
  ]
});
