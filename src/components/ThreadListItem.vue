<template>
        <div class="thread">
            <div>
                <p>
                    <router-link :to="{ name: 'ThreadShow', params: { id: thread['.key']} }">
                        {{ thread.title }}
                    </router-link>
                </p>
                <p class="text-faded text-xsmall">
                    By <a href="#">{{ user.name }}</a>, {{ thread.publisedAt }}.
                </p>
            </div>

            <div class="activity">
                <p class="replies-count">
                    {{ repliesCount }} replies
                </p>

                <img class="avatar-medium" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">

                <!-- <div>
                    <p class="text-xsmall">
                        <a href="#">Bruce Wayne</a>
                    </p>
                    <p class="text-xsmall text-faded">2 hours ago</p>
                </div> -->
            </div>
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import sourceData from '@/data.json';

    @Component({})

    export default class ThreadListItem extends Vue {
        @Prop({ required: true }) private thread!: object;

        private get repliesCount() {
            return Object.keys(this.thread.posts).length - 1;
        }

        private get user() {
            return sourceData.users[this.thread.userId];
        }
    }
</script>
