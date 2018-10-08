<template>
    <div class="post-list">
        <PostListItem
            v-for="post in posts"
            :key="post['.key']"
            :post="post"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IPost } from '@/types/post';

    import PostListItem from './PostListItem.vue';

    @Component({
        components: {
            PostListItem,
        },
    })

    export default class PostList extends Vue {
        @Prop({ required: true }) private posts!: IPost[];
    }
</script>

<style>

</style>
