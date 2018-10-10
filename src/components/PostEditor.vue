<template>
    <form @submit.prevent="addPost">
        <div class="form-group">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-input"
                v-model="newPostText"
                ></textarea>
        </div>

        <div class="form-actions">
            <button class="btn-blue">Submit post</button>
        </div>
    </form>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';

    import { IPost, IUser } from '@/types';

    @Component({})

    export default class PostEditor extends Vue {
        @Prop({ required: true }) private threadId!: string;

        @Getter('authUser') private userId!: string;

        private newPostText = '';

        private addPost() {
            const postId = `GreatPost${Math.random()}`;


            const post: IPost = {
                '.key': postId,
                edited: {},
                text: this.newPostText,
                publishedAt: Math.floor(Date.now() / 1000),
                threadId: this.threadId,
                userId: this.userId,
            };
            this.newPostText = '';

            this.$emit('save-post', { post });
            this.$store.dispatch('createPost', post);
        }
    }
</script>

<style>

</style>
