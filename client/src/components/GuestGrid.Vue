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

.guestgrid {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-right: 20px;
  width: 200px;
  height: 200px;
}

#GuestGrid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}


</style>
