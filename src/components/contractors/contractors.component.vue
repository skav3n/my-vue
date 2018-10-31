<template>
  <div class="component">
    <layer-page title="Kontrahenci">
      <md-button @click="printer">printer</md-button>
      <md-button @click="pusher">pusher</md-button>
      <md-button @click="remover">remover</md-button>
    </layer-page>

    <div v-for="(contractor, index) in contractors"
         :key="index"
    >
      <code>{{ contractor.key }} - </code>
      <span>{{ contractor.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainModule from '../../store/main.store';

export default {
  computed: {
    ...mapState(MainModule.name, ['contractors']),
  },
  mounted() {
    this.getContractors();
  },
  methods: {
    ...mapActions(MainModule.name, ['getContractors', 'saveContractor', 'removeContractor']),
    printer() {
      console.log('contractors', this.contractors);
    },
    pusher() {
      const mock = { name: `Andrzej ${this.contractors.length}` };
      this.saveContractor(mock);
    },
    remover() {
      if (this.contractors.length > 0) {
        this.removeContractor(this.contractors[0].key);
      }
    }
  },
}
</script>

<style scoped></style>
