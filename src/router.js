import Vue from 'vue'
import Router from 'vue-router'

// components
import HelloWorld from '@/components/HelloWorld.vue'
import ThreadShow from '@/components/ThreadShow.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/thread/:id',
            name: 'ThreadShow',
            component: ThreadShow,
            props: true
        },
    ],
})
