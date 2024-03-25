<template>
  <div id="app">
    <div class="app-menu">
      <app-menu></app-menu>
    </div>

    <md-content class="app-content md-scrollbar">
      <router-view class="content"></router-view>
    </md-content>

    <div>
      Footer
    </div>
  </div>
</template>

<script>
import Store from './store';
import MainModule from './store/main.store';
import AppMenu from './components/menu/menu.component.vue';

export default {
  name: 'app',
  created() {
    Store.registerModule(MainModule.name, MainModule);
  },
  components: {
    AppMenu,
  },
}
</script>

<style lang="scss">
@import './assets/theme/variables/colors';

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-wrap: nowrap;
  min-height: 100vh;
}
.app-menu {
  flex: 0 0 auto;
  background: $greenSpring;
}
.app-content {
  flex: 0 1 100%;
  overflow: hidden;
  background-color: #ffffff;
  padding: 25px;
}
</style>
