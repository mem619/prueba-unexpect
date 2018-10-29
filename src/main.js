import Vue from "vue";
import VueRouter  from "vue-router";
import App from "./App.vue";
import store from "./store";
//import router from "./router";
import Vuex from "vuex";
import hello from "./components/HelloWorld.vue"

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: hello }]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
