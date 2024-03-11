<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Nunito Sans";
}
body{
    background: #FAFAFA;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
}
.container_big {
  padding: 0px 46px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}
</style>
