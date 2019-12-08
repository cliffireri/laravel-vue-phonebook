
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('my-header', require('./components/MyHeader.vue').default);
Vue.component('my-footer', require('./components/MyFooter.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('about', require('./components/About.vue').default);

const routes = [
    { path: '/home', component: require('./components/Home.vue').default },
    { path: '/about', component: require('./components/About.vue').default }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router,
    el: '#app',
});
