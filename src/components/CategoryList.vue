<template>
    <div>
        <CategoryListItem
            v-for="category in categories"
            :key="category['.key']"
            :category="category"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { ICategory } from '@/types';

    import CategoryListItem from './CategoryListItem.vue';

    @Component({
        components: {
            CategoryListItem,
        },
    })

    export default class CategoryList extends Vue {
        @Prop({ required: true }) private categories! : ICategory[];
    }
</script>

<style>

</style>
