<template>
        <div class="col-large push-top">

            <h1>{{ thread.title }}</h1>

            <p>
                By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
                <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
            </p>

            <PostList :posts="posts"/>

            <PostEditor :threadId="id" />
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IThread, IPost } from '@/types/index';

    import PostList from '@/components/PostList.vue';
    import PostEditor from '@/components/PostEditor.vue';

    @Component({
        components: {
            PostList,
            PostEditor,
        },
    })

    export default class ThreadShow extends Vue {
        @Prop({ required: true }) private id!: string;

        private thread: IThread =  this.$store.state.threads[this.id];

        private get posts() {
            const posts: IPost[] =  this.$store.state.posts;
            const postIds = Object.values(this.thread.posts);

            return Object.values(posts)
                .filter((post) => postIds.includes(post['.key']));
        }
    }
</script>

<style>

</style>
