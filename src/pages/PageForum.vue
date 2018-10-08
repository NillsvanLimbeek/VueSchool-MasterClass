<template>
<div class="forum-wrapper">
    <div class="col-full push-top">
        <div class="forum-header">
            <div class="forum-details">
                <h1>{{forum.name}}</h1>
                <p class="text-lead">{{forum.description}}</p>
            </div>
            <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
        </div>
    </div>

    <div class="col-full push-top">
        <ThreadList :threads="threads" />
    </div>
</div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IThread } from '@/types/thread';

    import ThreadList from '@/components/ThreadList.vue';

    @Component({
        components: {
            ThreadList,
        },
    })

    export default class PageForum extends Vue {
        @Prop({ required: true }) private id!: string;

        private get forum() {
            return  this.$store.state.forums[this.id];
        }

        private get threads() {
            const threads: IThread =  this.$store.state.threads;

            return Object.values(threads)
                .filter((thread: IThread) => thread.forumId === this.id);
        }
    }
</script>

<style>

    .forum-wrapper {
        width: 100%;
    }

</style>
