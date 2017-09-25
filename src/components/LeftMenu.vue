<template>
  <div class="left-menu">
    <ul>
      <li><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
      <li><router-link :to="{name: 'kpir'}">KPiR</router-link></li>
      <li><router-link :to="{name: 'vat'}">VAT</router-link></li>
      <li><router-link :to="{name: 'contractors'}">Contractors</router-link></li>
      <li><router-link :to="{name: 'fixed-assets'}">Śr.trwałe</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left-menu'
}
</script>

<style scoped>
  .left-menu {
    width: 100%;
    background: tomato;
 }
</style>
