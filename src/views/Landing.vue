<template>
  <div class="landing-container">
    <router-view />
    <div id="foot"></div>
    <h1>ClutchTime</h1>
    <h2>Manager</h2>
  </div>
</template>

<script>
</script>

<style>
.landing-container {
  margin: 0px 8px;
  padding: 30px;
  background-image: url("https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  border-radius: 5%;
  min-height: 650px;
  height: 80%;
}
#foot {
}
</style>