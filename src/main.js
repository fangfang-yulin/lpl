/*
 * @Date: 2020-02-21 16:23:47
 * @LastEditTime: 2020-02-21 19:53:16
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
import Vue from 'vue';
// 导入 Element-ui
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './routers'
// 引入基础样式
import './style/comment.css'
Vue.config.productionTip = false
    // 注册 Element-ui
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')