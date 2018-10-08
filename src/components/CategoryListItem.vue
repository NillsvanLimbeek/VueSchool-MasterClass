<template>
    <div class="forum-list">

        <h2 class="list-title">
            <a href="#">{{ category.name }}</a>
        </h2>

        <ForumList :forums="categoryForums" />

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { ICategory, IForum } from '@/types';

    import sourceData from '@/data.json';

    import ForumList from './ForumList.vue';

    @Component({
        components: {
            ForumList,
        },
    })

    export default class CategoryListItem extends Vue {
        @Prop({ required: true }) private category!: ICategory[];

        private get categoryForums() {
            const forums: IForum = sourceData.forums;

            return Object.values(forums)
                .filter((forum: IForum) => forum.categoryId === this.category['.key']);
        }
    }
</script>

<style>

</style>
