import "@/style/style.css";

// Import Vue
import Vue from 'vue';
// import router from 'vue-router';
import {store} from "@/store/store"
// Import Vue App, routes, store
import App from './App';

window.eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: store, 
    render: h => h(App),
   
});
