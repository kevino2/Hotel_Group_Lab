<template lang="html">
  <form class="" method="post">

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required/>

    <label for="status">Checked-in status:</label>
    <input type="checkbox" id="status" v-model="status">

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
  }
}
</script>

<style lang="css" scoped>
</style>


name
email
status
