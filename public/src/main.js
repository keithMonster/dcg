/**
 * Created by dcg on 16/9/19.
 */
import Vue from 'vue';
// import VueRouter  from 'vue-router';
// import VueResource from 'vue-resource';
import FastClick from 'fastclick';
// import routerMap from './router';
require('./assets/style.less');
// const appvue = resolve => require(['./views/app.vue'],resolve);
import app1 from './views/app.vue';
new Vue({
    el:'#app',
    components: {
        home:resolve => require(['./views/app.vue'],resolve),
        // posts: {/* ... */},
        // archive: {/* ... */}
    }
});
// Vue.use(VueRouter);
// Vue.use(VueResource);
// let App = Vue.extend({});
// let router = new VueRouter({
//     hashbang: false,
//     history: true,
//     saveScrollPosition: true,
//     transitionOnLoad: true
// });
// router.beforeEach((transition) => {
//     FastClick.attach(document.body);
    // transition.next();
// });
// routerMap(router);
// router.start(App, '#app');