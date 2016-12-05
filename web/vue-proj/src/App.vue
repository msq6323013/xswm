<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/test">test</router-link>
      </li>
      <li>
        <router-link to="/nothing">404</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
