import Vue from 'vue'
import Router from 'vue-router'
import homePage from './part/home.vue'
import detailPage from './part/detail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: homePage,
        },
        {
            path: '/detail',
            component: detailPage,
        },
    ]
})
