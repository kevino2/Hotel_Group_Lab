<template lang="html">
 <div id="GuestGrid">
<<<<<<< HEAD
   <div class="guestgrid" v-for="guest in guests">
     <h2>{{guest.name}}</h2>
     <p>{{guest.email}} on {{guest.status}}</p>
     <button @click="handleDelete(guest._id)">Delete/<button>
=======
   <div class="guestgrid" v-for="guest in bookings">
     <h2>{{guest.name}}</h2>
     <p>{{guest.email}} on {{guest.status}}</p>
     <button @click="handleDelete(guest._id)">Delete</button>
>>>>>>> 9b77dff294f078d1b4ad6f1fc53e74aa39406730
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
<<<<<<< HEAD
      GuestService.deleteguest(id)
      .then(response => {
        eventBus.$emit('guest-added');
=======
      GuestService.deleteGuest(id)
      .then(res => {
        eventBus.$emit('refresh-data');
>>>>>>> 9b77dff294f078d1b4ad6f1fc53e74aa39406730
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
