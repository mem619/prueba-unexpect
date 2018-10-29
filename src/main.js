import Vue from "vue";
import VueRouter  from "vue-router";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;
router.addRoutes([{ path: '/prueba-unexpect', redirect: '/', component: home }])
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
