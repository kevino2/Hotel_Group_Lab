<template lang="html">
  <form class="" method="post" v-on:submit="addGuest">

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required/>

    <label for="status">Checked-in status:</label>
    <input type="checkbox" id="status" v-model="status">

    <input type="submit" value="Save" id="save">

  </form>
</template>

<script>
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
      };
      GuestService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
