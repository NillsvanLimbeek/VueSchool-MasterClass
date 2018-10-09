<template>
    <div class="post">

        <div class="user-info">
            <a href="#" class="user-name">{{ user.name }}</a>

            <a href="#">
                <img class="avatar-large" :src="user.avatar" alt="">
            </a>

            <p class="desktop-only text-small">{{ userPostCount }} posts</p>
        </div>

        <div class="post-content">
            <div>
                {{ post.text }}
            </div>
        </div>

        <div class="post-date text-faded">

            <AppDate :timestamp="post.publishedAt"/>

        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';
    import { countObjectProperties } from '@/utils';

    import { IPost } from '@/types/post';

    @Component({})

    export default class PostListItem extends Vue {
        @Prop({ required: true }) private post!: IPost;

        private get user() {
            return  this.$store.state.users[this.post.userId];
        }

        private get userPostCount() {
            return countObjectProperties(this.user.posts);
        }
    }
</script>

<style>

</style>
