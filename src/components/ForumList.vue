<template>
    <div>

        <ForumListItem
            v-for="forum in forums"
            :key="forum['.key']"
            :forum="forum"
        />

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IForum } from '@/types';

    import ForumListItem from './ForumListItem.vue';

    @Component({
        components: {
            ForumListItem,
        },
    })

    export default class ForumList extends Vue {
        @Prop({ required: true }) private forums!: IForum[];
    }
</script>

<style>

</style>
