<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
    
  },
  

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
#app{
  position: relative;
}
body{
    background: #FAFAFA;
    min-height: 100vh;
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
