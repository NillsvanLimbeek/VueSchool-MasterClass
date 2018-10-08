<template>
        <div class="thread-list">

            <h2 class="list-title">Threads</h2>

            <ThreadListItem
                v-for="thread in threads"
                :key="thread['.key']"
                :thread="thread"
            />

        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IThread } from '@/types/thread';

    import ThreadListItem from './ThreadListItem.vue';

    @Component({
        components: {
            ThreadListItem,
        },
    })

    export default class ThreadList extends Vue {
        @Prop({ required: true }) private threads!: IThread[];
    }
</script>
