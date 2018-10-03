import { RouteConfig } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import ThreadShow from '@/components/ThreadShow.vue';

export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld,
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
    },
];
