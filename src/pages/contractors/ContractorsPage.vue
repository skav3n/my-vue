<template>
  <div class="contractors">
    <form @submit.prevent="addContractor">
      <input type="text"placeholder="Nazwa" v-model="newContractor.name">
      <input type="submit" value="dodaj">
    </form>

    <br>

    <ul class="contractors-list">
      contractor list
      <li v-for="contractor in contractors">{{ contractor.name }}</li>
    </ul>
  </div>
</template>

<script>
import { db, contractorsRef } from '@/services/firebase.service';

export default {
  firebase: {
    contractors: contractorsRef
  },
  data() {
    return {
      newContractor: {
        address: {
          city: '',
          code: '',
          street: ''
        },
        name: '',
        nip: ''
      }
    }
  },
  methods: {
    addContractor () {
      contractorsRef.push(this.newContractor)
      this.newContractor.name = ''
    }
  }
}
</script>

<style scoped></style>
