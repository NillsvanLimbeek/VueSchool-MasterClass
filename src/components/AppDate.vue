<template>
        <div :title="timestamp | humanFriendlyDate">

            {{ timestamp | diffForHumans }}

        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import moment from 'moment';

    @Component({
        filters: {
            humanFriendlyDate(date: number) {
                return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a');
            },

            diffForHumans(date: number) {
                return moment.unix(date).fromNow();
            },
        },
    })

    export default class AppDate extends Vue {
        @Prop({ required: true }) private timestamp!: number;
    }
</script>

<style>

</style>
