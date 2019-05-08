<template lang="html">
 <div id="GuestGrid">
   <div class="guestgrid" v-for="guest in guestgrid">
     <h2>{{guest.name}}</h2>
     <p>{{guest.email}} on {{guest.status}}</p>
     <button @click="handleDelete(guest._id)">Delete
     </div>
   </div>
</template>

<script>
import { eventBus } from '../main';
import GuestService from '../services/GuestService'
export default {
  name: "GuestGrid",
  props: ["guests"],
  methods: {
    handleDelete(id) {
      GuestService.deleteguest(id)
      .then(response => {
        eventBus.$emit('refresh-data');
      });
    }
  }

}
</script>

<style lang="css" scoped>
</style>
