<template>
    <div class="post-list">
        <div class="post">
            
            <div class="user-info">
                <a href="#" class="user-name">{{ user.name }}</a>

                <a href="#">
                    <img class="avatar-large" :src="user.avatar" alt="Avatar">
                </a>

                <p class="desktop-only text-small">{{ userPostCount }} posts</p>
            </div>

            <div class="post-content">
                <div>
                    <p>{{ post.text }}</p>
                </div>
            </div>

            <div class="post-date text-faded">
                {{ post.publisedAt }}
            </div>
        </div>
    </div>
</template>

<script>
    import sourceData from '@/data.json';

    export default {
        computed: {
            user () {
                return sourceData.users[this.post.userId];
            },
            userPostCount () {
                return Object.keys(this.user.posts).length;
            }
        },
        props: {
            post: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style>

</style>
