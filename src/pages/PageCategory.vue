<template>
    <div class="col-full">
        <h1>{{ category.name }}</h1>
        <CategoryListItem  :category="category" />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import CategoryListItem from '@/components/CategoryListItem.vue'

    @Component({
        components: {
            CategoryListItem,
        },
    })

    export default class PageCategory extends Vue {
        @Prop({ required: true }) private id!: string;

        private get category() {
            return  this.$store.state.categories[this.id];
        }
    }
</script>

<style>

</style>
