import Vue from "vue";
import VueRouter  from "vue-router";
import App from "./App.vue";
import store from "./store";
//import router from "./router";
import Vuex from "vuex";
import hellow from "./components/HelloWorld.vue"
import hello from "./components/hello.vue"
import world from "./components/world.vue"

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: hellow },
    { path: '/hello', component: hello },
    { path: '/world', component: world }]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
