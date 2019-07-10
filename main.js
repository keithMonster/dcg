/**
 * Created by dcg on 16/8/5.
 */
import Vue from 'vue';
import app from './src';
import kk from './src/views/spacelog.vue';
import touchpage from './src/views/touchpage.vue';
// import kk from './src/views/looklook.vue';
import './src/assets/style/index.less';
new Vue({
    el: '#app',
    created() {
    },
    data() {
        return {}
    },
    components: {
        app,
        kk,
        touchpage
    },
    render: h => h(location.hash.replace('#', '') || app)
});
