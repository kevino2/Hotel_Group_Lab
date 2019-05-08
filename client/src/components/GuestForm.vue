<template lang="html">
  <div class="form-container">
  <form class="booking-form" method="post" v-on:submit="addGuest">
    <h1>Create a Booking:</h1>
    <label for="name"></label>
    <input type="text" id="name" v-model="name" placeholder="Enter Guest Name:" required/>

    <label for="email"></label>
    <input type="email" id="email" v-model="email" placeholder="Enter Guest E-mail:" required/>

    <label for="status">Checked-in status:</label>
    <input type="checkbox" id="status" v-model="status">

    <input type="submit" value="Save" id="add-button">

  </form>
    </div>
</template>

<script>
import GuestService from "../services/GuestService.js";
import {eventBus} from "@/main.js";
export default {
  data() {
    return {
      name: '',
      email: '',
      status: false
    }
  },
  methods: {
    addGuest(x){
      x.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      GuestService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style lang="css" scoped>

.booking-form {
  width: 30%;
  text-align: center;
  margin: auto;
}

.form-container {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}


input[type=text], input[type=email], input[type=checkbox]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=checkbox] {
  height: 50%;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

input[type=submit]{
  background-color: #D7D9D8;
  text-transform: uppercase;
  color: green;
  padding: 5px;
  border: 4px solid #D7D9D8;
  border-radius: 6px;
  width: 30%;
}

input[type=submit]:hover {
  color: white;
  background-color: limegreen;
  border-color: limegreen;
  transition: all 0.4s ease 0s;
}

</style>
