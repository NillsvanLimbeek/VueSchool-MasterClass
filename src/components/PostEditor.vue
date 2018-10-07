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
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})

    export default class PostEditor extends Vue {
        @Prop({ required: true }) private threadId!: string;

        private newPostText = '';

        private addPost() {
            const postId = `GreatPost${Math.random()}`;

            const post = {
                text: this.newPostText,
                publishedAt: Math.floor(Date.now() / 1000),
                threadId: this.threadId,
                userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2',
                '.key': postId,
            };

            this.$emit('save-post', { post });

            this.newPostText = '';
        }
    }
</script>

<style>

</style>
