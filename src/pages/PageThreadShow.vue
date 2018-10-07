<template>
        <div class="col-large push-top">

            <h1>{{ thread.title }}</h1>

            <p>
                By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
                <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
            </p>

            <PostList :posts="posts"/>

            <PostEditor
                @save-post="savePost"
                :threadId="id"
            />
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import PostList from '@/components/PostList.vue';
    import PostEditor from '@/components/PostEditor.vue';

    import sourceData from '@/data.json';

    @Component({
        components: {
            PostList,
            PostEditor,
        },
    })

    export default class ThreadShow extends Vue {
        @Prop({ required: true }) private id!: string;

        private thread: object = sourceData.threads[this.id];

        private get posts() {
            const postIds = Object.values(this.thread.posts);

            return Object.values(sourceData.posts)
                .filter((post) => postIds.includes(post['.key']));
        }

        private savePost(newPost: object) {
            const post = newPost.post;
            const postId = newPost.post['.key'];

            this.$set(sourceData.posts, postId, post);
            this.$set(this.thread.posts, postId, postId);
            this.$set(sourceData.users[post.userId].posts, postId, postId);
        }
    }
</script>

<style>

</style>
