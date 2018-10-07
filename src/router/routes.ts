import { RouteConfig } from 'vue-router';

import Home from '@/pages/PageHome.vue';
import Forum from '@/pages/PageForum.vue';
import ThreadShow from '@/pages/PageThreadShow.vue';
import NotFound from '@/pages/PageNotFound.vue';

export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true,
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
];
