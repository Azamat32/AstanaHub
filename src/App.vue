<template>
  <div id="app">
    <Sales></Sales>
    <navbar @changeSlider="changeSlider"></navbar>
    <div class="container">
      <div class="main_content_wrap">
        
        <MenuList @changeSlider="changeSlider"></MenuList>
        <MainPage/>
        
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import Sales from "./components/Sales/Sales.vue";
import MenuList from "./components/MenuList/MenuList.vue";

export default {
  name: 'App',
  components: {
    MainPage,
    Navbar,
    Footer,
    Sales,
    MenuList,
  },
  data() {
    return {
      activeSlider: 'Slider',
    };
  },
  methods: {
    changeSlider(slider) {
      this.activeSlider = slider;
    },
    
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
