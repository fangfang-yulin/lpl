/*
 * @Date: 2020-02-21 17:58:09
 * @LastEditTime: 2020-02-21 18:49:34
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
import Vue from 'vue'
// npm install vue-router -S
import VueRouter from 'vue-router';
import Index from '../Views/Index';
import Classfiy from '../Views/Classfiy';
import Frind from '../Views/Frind';
import Mine from '../Views/Mine';
import Viedo from '../Views/Viedo';

// 将vue-router注册到全局，这样每一个组件都可以使用router-link和router-view组件了
Vue.use(VueRouter);
// 定义路由规则
var routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/classfiy',
        component: Classfiy

    },
    {
        path: '/viedo',
        component: Viedo

    },
    {
        path: '/frind',
        component: Frind
    },
    {
        path: '/mine',
        component: Mine
            // resolve => require(['../Mine.vue'], resolve),
            // children: [{
            //         path: '../Views/Mine',
            //         component: Mine
            //     },
            //     {
            //         path: '/mine/register',
            //         component: Register
            //     }
            // ]
    },
    // {
    //     path: '/news/:id',
    //     component: News,
    //     alias: '/c/:id'
    // },
    // {
    //     name: 'xq',
    //     path: '/detail',
    //     component: Detail,
    //     beforeEnter: (to, from, next) => {
    //         //console.log(to, from);
    //         next();
    //     }
    // },
    // {
    //     path: '/comp1',
    //     redirect: '/detail',
    //     component: Comp1,
    //     children: [{
    //             path: '/comp1/x',
    //             components: {
    //                 abc: {
    //                     render(h) {
    //                         return h('div', '组件2')
    //                     }
    //                 },
    //                 xyz: {
    //                     render(h) {
    //                         return h('div', '组件3')
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             path: '/comp1/y',
    //             components: {
    //                 abc: {
    //                     render(h) {
    //                         return h('div', '组件4')
    //                     }
    //                 },
    //                 xyz: {
    //                     render(h) {
    //                         return h('div', '组件5')
    //                     }
    //                 }
    //             }
    //         }
    //     ]
    // },
]

// 创建路由实例
var router = new VueRouter({
    routes,
    mode: 'history'
});


/*
// 守卫
router.beforeEach((to, from, next) => {
    // to 表示到哪里去
    // from 表示从哪里来
    console.log(to, from);
    // next 表示执行跳转
    next();
})
*/

export default router