import LigaWhatsapp from "./pages/liga/viewComponent.vue";
import LigaWhatsappConsulta from "./pages/liga/viewComponent_Consult.vue";
import Historial from "./pages/historial/viewComponent.vue";
import Login from "./pages/login/viewComponent.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    
    { path: '/home', component: LigaWhatsapp },
    { path: '/login', component: Login },
    { path: '/ligaConsulta', component: LigaWhatsappConsulta },
    { path: '/historial', component: Historial },
    { path: '/', redirect:'/home',component: LigaWhatsapp },
];

export default routes