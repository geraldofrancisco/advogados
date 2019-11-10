import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import User from '@/components/user/User'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }, {
        name: 'users',
        path: '/users',
        component: User
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})