<template>
    <div class="col-3 push-top">
        <div class="profile-card">

            <p class="text-center">
                <img :src="user.avatar" alt="" class="avatar-xlarge img-update">
            </p>

            <div class="form-group">
                <input type="text" v-model="activeUser.username" placeholder="Username" class="form-input text-lead text-bold">
            </div>

            <div class="form-group">
                <input type="text" v-model="activeUser.name" placeholder="Full Name" class="form-input text-lead">
            </div>

            <div class="form-group">
                <label for="user_bio">Bio</label>
                <textarea class="form-input" v-model="activeUser.bio" id="user_bio" placeholder="Write a few words about yourself."></textarea>
            </div>

            <div class="stats">
                <span>{{ userPostsCount }} posts</span>
                <span>{{ userThreadsCount }} threads</span>
            </div>

            <hr>

            <div class="form-group">
                <label class="form-label" for="user_website">Website</label>
                <input v-model="activeUser.website" autocomplete="off" class="form-input" id="user_website">
            </div>

            <div class="form-group">
                <label class="form-label" for="user_email">Email</label>
                <input v-model="activeUser.email" autocomplete="off" class="form-input" id="user_email">
            </div>

            <div class="form-group">
                <label class="form-label" for="user_location">Location</label>
                <input v-model="activeUser.location" autocomplete="off" class="form-input" id="user_location">
            </div>

            <div class="btn-group space-between">
                <button @click.prevent="cancel" class="btn-ghost">Cancel</button>
                <button @click.prevent="save" type="submit" class="btn-blue">Save</button>
            </div>
        </div>

        <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IUser } from '@/types';

    @Component({})

    export default class UserProfileCardEditor extends Vue {
        @Prop({ required: true }) private user!: IUser;
        @Prop({ required: true }) private userPostsCount!: number;
        @Prop({ required: true }) private userThreadsCount!: number;

        private activeUser = {...this.user};

        private save() {
            this.$store.dispatch('updateUser', {...this.activeUser});
            this.$router.push({ name: 'Profile' });
        }

        private cancel() {
            this.$router.push({ name: 'Profile' });
        }
    }
</script>

<style>

</style>
