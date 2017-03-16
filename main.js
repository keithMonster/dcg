/**
 * Created by dcg on 16/8/5.
 */
import Vue from 'vue';
import app from './src'
new Vue({
    el: '#app',
    created(){
    },
    data(){
        return {}
    },
    components: {app},
    render: h => h('app')
});
