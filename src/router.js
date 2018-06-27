import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/pages/PageHome.vue'
import ThreadShow from '@/pages/PageThreadShow.vue'
import NotFound from '@/pages/PageNotFound.vue'
import Forum from '@/pages/PageForum.vue'
import Category from '@/pages/PageCategory.vue'
import Profile from '@/pages/PageProfile.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/forum/:id',
            name: 'Forum',
            component: Forum,
            props: true
        },
        {
            path: '/category/:id',
            name: 'Category',
            component: Category,
            props: true
        },
        {
            path: '/thread/:id',
            name: 'ThreadShow',
            component: ThreadShow,
            props: true
        },
        {
            path: '/me',
            name: 'Profile',
            component: Profile,
            props: true
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: NotFound
        }
    ],
})
