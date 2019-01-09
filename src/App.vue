<template>
  <div id="app">
    <header>
      <nav>
        <ul>
            <li class="nav-item"><a href="#">View all posts</a></li>
            <li class="nav-item"><a href="#">Add a post</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  color: #444;
  -webkit-font-smoothing: antialiased;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  height: 100%;
  min-height: 100%;
  text-rendering: optimizeLegibility;
}
header {
  background-color: rgb(140, 193, 193);
  border-bottom: 1px solid rgba(0,0,0,.15);
  display: flex;
  flex-direction: column;
  text-align: center;
}
ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}
.nav-item {
  box-sizing: border-box;
  flex: 1;
  padding: 0 10px;
  text-align: center;
}
</style>
