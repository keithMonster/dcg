/**
 * Created by dcg on 16/9/19.
 */
export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component: require('./views/test.vue')
        },
        '/hhh': {
            name: 'hhh',
            component: require('./views/app.vue')
        },
        // '/pendingManage/:state': {	//待处理
        //     name: 'pendingManage',
        //     component: require('./views/pendingManage.vue')
        // },
        // '/pendingDetail/:id': {
        //     name: 'pendingDetail',
        //     component: function (resolve) {
        //         require(['./views/pendingDetail.vue'], resolve)
        //     }
        // },
        /* 404路由 */
        // '*': {
            // component: require('./views/pendingManage.vue')
        // }
    })
};