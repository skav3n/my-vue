<template>
  <div id="app">
    <div class="app-menu">
      <left-menu/>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu'

export default {
  name: 'app',
  components: {
    LeftMenu
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: nowrap;
  min-height: 100vh;
}
.app-menu {
  flex: 0 0 200px;
  background: tomato;
}
.app-content {
  flex: 0 1 100%;
  background: green;
}
</style>
