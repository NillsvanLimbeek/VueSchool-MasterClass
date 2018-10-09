<template>
    <div class="col-full push-top">
        <h2>Welcome to the Forum!</h2>
        <CategoryList :categories="categories" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    import { IForum, IPost, IUser, ICategory } from '@/types/index';

    import CategoryList from '@/components/CategoryList.vue';

    @Component({
        components: {
            CategoryList,
        },
    })

    export default class PageHome extends Vue {
        private get categories() {
            return Object.values(this.$store.state.categories);
        }
    }
</script>

<style lang="scss">
</style>
