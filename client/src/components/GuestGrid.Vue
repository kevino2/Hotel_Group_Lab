<template lang="html">
 <div id="GuestGrid">

   <div class="guestgrid" v-for="guest in guests">
     <h2>{{guest.name}}</h2>
     <p>{{guest.email}} on {{guest.status}}</p>
     <button @click="handleDelete(guest._id)">Delete/<button>

   <div class="guestgrid" v-for="guest in bookings">
     <h2>{{guest.name}}</h2>
     <br>
     <p>E-mail: {{guest.email}}</p>
     <br>
     <p>Checked-in: {{guest.status}}</p>
     <button id="delete" @click="handleDelete(guest._id)">Delete</button>

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

      GuestService.deleteguest(id)
      .then(response => {
        eventBus.$emit('guest-added');

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
  width: 300px;
  height: 200px;
}

#GuestGrid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#delete {
  background-color: #D7D9D8;
  text-transform: uppercase;
  color: red;
  padding: 5px;
  border: 4px solid #D7D9D8;
  border-radius: 6px;
  width: 50%;
  margin: auto;
}

#delete:hover {
  color: white;
  background-color: red;
  border-color: red;
  transition: all 0.4s ease 0s;
}


</style>
