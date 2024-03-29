import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ProfilePage from "./pages/ProfilePage.vue"; // Import your ProfilePage component
import AboutPage from "./pages/AboutPage.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: AboutPage },
  { path: "/profile", component: ProfilePage }, // Define the route for the ProfilePage
];
const router = new VueRouter({
  mode: "history", // Use HTML5 history mode for cleaner URLs
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
