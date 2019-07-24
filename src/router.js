import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import createSomethingProcess from "./components/CreateSomethingProcess.js";
import DialogOverlay from "./components/DialogBackground.js";
import DialogContent from "./components/TestComp.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/something",
      name: "something",
      component: createSomethingProcess("something")
    },
    {
      path: "/dialog",
      name: "dialog",
      component: DialogOverlay(DialogContent)
    }
  ]
});
