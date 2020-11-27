<template>
  <router-view />
  <div id="nav">
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
</template>

<style lang="scss">
body {
  background-image: url("https://images.unsplash.com/photo-1562321157-5fd366036de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (min-width: 600px) {
  body {
    background: green;
  }
}
</style>
