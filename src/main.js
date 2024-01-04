/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2024-01-03 14:58:30
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-03 15:19:14
 * @FilePath: /large-screen/src/main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入vue-router
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
