<template lang="html">
  <div class="">
    <guest-form/>
    <guest-grid/>
  </div>

</template>

<script>
import GuestForm from '@/components/GuestForm.vue';
import GuestGrid from '@/components/GuestGrid.vue';
export default {
  name: 'app',
  components: {
    GuestForm,
    GuestGrid
  }
}
</script>

<style lang="css" scoped>
</style>
