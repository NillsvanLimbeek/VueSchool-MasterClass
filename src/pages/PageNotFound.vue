<template>
    <div class="col-full">
        <h1>Not Found...</h1>
        <p>Oops, we could not find what you where looking for...
            <router-link :to="{ name: 'Home' }">
                Want to go home?
            </router-link>
        </p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    @Component({})

    export default class PageNotFound extends Vue {

    }
</script>

<style>

</style>
