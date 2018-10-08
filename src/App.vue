<template>
    <div id="app">
        <TheNavbar />

        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import TheNavbar from '@/components/TheNavbar.vue';

    @Component({
        components: {
            TheNavbar,
        },
    })

    export default class App extends Vue {
        
    }
</script>

<style lang="scss">

    @import './css/style';

</style>