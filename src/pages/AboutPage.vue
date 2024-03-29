<template>
    <div id="app">
      <Sales></Sales>
      <navbar @changePage="changePage"></navbar>
      <div class="container">
        <div class="main_content_wrap">
          
          <MenuList   @changePage="changePage"></MenuList>
          <component :is="activePage"></component>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import MainPage from './MainPage.vue'
  import Navbar from "../components/Navbar/Navbar.vue";
  import Footer from "../components/Footer/Footer.vue";
  import Sales from "../components/Sales/Sales.vue";
  import MenuList from "../components/MenuList/MenuList.vue";
  import VebinarsPage from './VebinarsPage.vue';
  import NewsPage from './NewsPage.vue';
  export default {
    name: 'AboutPage-template',
    components: {
      MainPage,
      VebinarsPage,
      NewsPage,
      Navbar,
      Footer,
      Sales,
      MenuList,
    },
    data() {
      return {
        activePage: 'MainPage'
      };
    },
    methods: {
      changeSlider(slider) {
        this.activeSlider = slider;
      },
      changePage(page) {
        this.activePage = page;
      },
    },
  }
  </script>
  
  <style>

  </style>
  