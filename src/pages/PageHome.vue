<template>
    <div class="col-full">
        <h2>Welcome to the Forum!</h2>
        <CategoryList :categories="categories" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    import { IForum, IPost, IUser, ICategory } from '@/types/index';

    import sourceData from '@/data.json';
    console.log(sourceData);

    import CategoryList from '@/components/CategoryList.vue';

    @Component({
        components: {
            CategoryList,
        },
    })

    export default class PageHome extends Vue {
        private categories: ICategory[] = Object.values(sourceData.categories);
    }
</script>

<style lang="scss">
</style>
