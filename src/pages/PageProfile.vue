<template>
    <div class="flex-grid">
        <UserProfileCard
            v-if="!edit"
            :user="user"
            :userPostsCount="userPostsCount"
            :userThreadsCount="userThreadsCount"
        />

        <UserProfileCardEditor
            v-else
            :user="user"
            :userPostsCount="userPostsCount"
            :userThreadsCount="userThreadsCount"
        />

        <div class="col-7 push-top">
            <div class="profile-header">
                <span class="text-lead">
                    {{ user.username }}'s recent activity
                </span>
                <a href="#">See only started threads?</a>
            </div>

            <hr>

            <PostList :posts="userPosts" />
        </div>
</div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';
    import { countObjectProperties } from '@/utils';

    import PostList from '@/components/PostList.vue';
    import UserProfileCard from '@/components/UserProfileCard.vue';
    import UserProfileCardEditor from '@/components/UserProfileCardEditor.vue';

    import { IUser, IPost } from '@/types';

    @Component({
        components: {
            PostList,
            UserProfileCard,
            UserProfileCardEditor,
        },
    })

    export default class PageProfile extends Vue {
        @Getter('authUser') private user!: IUser;

        @Prop({ default: false }) private edit!: boolean;

        private get userThreadsCount() {
            return countObjectProperties(this.user.threads);
        }

        private get userPostsCount() {
            return countObjectProperties(this.user.posts);
        }

        private get userPosts() {
            if (this.user.posts) {
                const posts: IPost[] = this.$store.state.posts;

                return Object.values(posts)
                    .filter((post) => post.userId === this.user['.key']);
            }

            return [];
        }
    }
</script>

<style>

</style>
