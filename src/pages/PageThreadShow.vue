<template>
    <div class="col-large push-top">
            <h1>{{ thread.title }}</h1>

            <div class="post-list">
                <div class="post"
                     v-for="postId in thread.posts"
                     :key="postId.id">
                    
                    <div class="user-info">
                        <a href="#" class="user-name">{{ users[posts[postId].userId].name }}</a>

                        <a href="#">
                            <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="Avatar">
                        </a>

                        <p class="desktop-only text-small">107 posts</p>
                    </div>

                    <div class="post-content">
                        <div>
                            <p>{{ posts[postId].text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import sourceData from '@/data.json';

    export default {
        props: {
            id: {
                required: true,
                type: String,
            }
        },
        data() {
            return {
                thread: sourceData.threads[this.id],
                posts: sourceData.posts,
                users: sourceData.users,
            }
        }
    }
</script>

<style>

</style>
