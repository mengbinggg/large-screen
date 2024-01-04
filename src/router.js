/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2024-01-03 15:10:42
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-03 17:23:05
 * @FilePath: /large-screen/src/router.js
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import talentIdentification from '@/views/talentIdentification.vue'
import talentService from '@/views/talentService.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/talentIdentification', name: '人才服务', component: talentIdentification },
    { path: '/talentService', name: '人才认定', component: talentService },
  ]
})