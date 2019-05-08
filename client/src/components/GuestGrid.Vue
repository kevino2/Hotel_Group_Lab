<template lang="html">
 <div id="GuestGrid">
   <div class="guestgrid" v-for="guest in bookings">
     <h2>{{guest.name}}</h2>
     <p>{{guest.email}} on {{guest.status}}</p>
     <button @click="handleDelete(guest._id)">Delete</button>
     </div>
   </div>
</template>

<script>
import { eventBus } from '../main';
import GuestService from '../services/GuestService';
export default {
  name: "GuestGrid",
  props: ["bookings"],
  methods: {
    handleDelete(id) {
      GuestService.deleteGuest(id)
      .then(res => {
        eventBus.$emit('refresh-data');
      });
    }
  },
  mounted(){
    eventBus.$on('guest-added', (guest) => {
      this.bookings.push(guest)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
