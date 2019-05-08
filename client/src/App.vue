
<template lang="html">
  <div id="app">
   <guest-form/>
   <div class="wrapper">
     <h2>Bookings:</h2>
     <div class="scroller">
       <guest-grid :bookings="guests" />
     </div>
   </div>
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
    GuestGrid,
    GuestService
  },
  mounted() {
    this.fetchData();
    eventBus.$on('refresh-data', this.fetchData);
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

h2 {
  color: white;
  padding-top: 20px;
}

.wrapper {
  margin: auto;
  margin-top: 50px;
  text-align: center;
  position: relative;
  width: 50%;
  height: 100%;
  margin-bottom: 20px !important;
  background: lightblue;
  box-shadow: 1px 1px 10px #FF6A00;
  padding-left: 30px;
}

.scroller{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 500px;
}
</style>
