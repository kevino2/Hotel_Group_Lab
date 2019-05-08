
<template lang="html">
  <div id="app">
   <guest-form/>

   <guest-grid :bookings="guests" />

   <guest-grid :guests="guests" />
  </div>
</template>

<script>
import GuestForm from '@/components/GuestForm.vue';
import GuestGrid from '@/components/GuestGrid.vue';
import { eventBus } from './main';
import GuestService from './services/GuestService';

export default {
  name: 'app',
  data () {
    return {
      guests: []
    }
  },
  components: {
    GuestForm,
    GuestGrid
  },
  mounted() {
    this.fetchData();
    eventBus.$on('guest-added', this.fetchData);
  },
  methods: {
    fetchData(){
      GuestService.getGuests()
      .then(guests => this.guests = guests);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
