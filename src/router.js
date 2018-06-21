import Vue from 'vue'
import Router from 'vue-router'

// components
import PageHome from '@/pages/PageHome.vue'
import PageThreadShow from '@/pages/PageThreadShow.vue'
import PageNotFound from '@/pages/PageNotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: PageHome,
        },
        {
            path: '/thread/:id',
            name: 'PageThreadShow',
            component: PageThreadShow,
            props: true
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ],
})
