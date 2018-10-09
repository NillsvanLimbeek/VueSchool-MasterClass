<template>
    <div class="forum-listing">
        <div class="forum-details">
            <router-link
                class="text-xlarge"
                :to="{ name: 'Forum', params: {id: forum['.key']} }">

                {{ forum.name }}
            </router-link>

            <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
            <p class="count">{{ forumCount }}</p>
            {{ forumCount === 1 ? 'thread' : 'threads'}}
        </div>

        <div class="last-thread">
            <!-- ToDO last activity -->
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';
    import { countObjectProperties } from '@/utils';

    import { IForum } from '@/types';

    @Component({})

    export default class ForumListItem extends Vue {
        @Prop({ required: true }) private forum!: IForum;

        private get forumCount() {
            return countObjectProperties(this.forum.threads);
        }
    }
</script>

<style>

</style>
