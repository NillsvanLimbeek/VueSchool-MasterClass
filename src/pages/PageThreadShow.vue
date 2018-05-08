<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script>
    import sourceData from '@/data.json';

    import PostList from '@/components/PostList'

    export default {
        data() {
            return {
                thread: sourceData.threads[this.id]
            }
        },
        computed: {
            posts () {
                const postdIds = Object.values(this.thread.posts);
                return Object.values(sourceData.posts)
                    .filter(post => postdIds.includes(post['.key']));
            }
        },
        components: {
            PostList
        },
        props: {
            id: {
                required: true
            }
        }
    }
</script>

<style>

</style>
