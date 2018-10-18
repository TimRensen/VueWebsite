import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

Vue.use(VueMq, {
    breakpoints: {
        mobile: 480,
        mobileLandscape: 768,
        tablet: 1024,
        tabletLandscape: 1260,
        desktop: Infinity
    }
});