<template>
    <div class="col-full">
        <h2>Welcome to the Forum!</h2>
        <ThreadList :threads="threads" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    import sourceData from '@/data.json';

    import ThreadList from './ThreadList.vue';

    @Component({
        components: {
            ThreadList,
        },
    })

    export default class HelloWorld extends Vue {
        private threads = Object.values(sourceData.threads);
        private posts = sourceData.posts;
        private users = sourceData.users;
    }
</script>

<style lang="scss">
</style>
