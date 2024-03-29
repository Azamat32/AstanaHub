<template>
  <div class="profile_page">
    <NavbarProfile @changePage="changePage"></NavbarProfile>
    <UserInfoNavbar></UserInfoNavbar>
    <div class="container">
      <div class="profile_page_inner">
        
        <div class="profile_page_wrap">
          <div class="profile_page_left">
            <div class="profile_menu_list">
              <ProfileMenuList @selectComponent="changePage"></ProfileMenuList>
            </div>
          </div>
          <div class="profile_page_right">
            <component :is="activeComponent"></component>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavbarProfile from "../components/Navbar/NavbarProfile.vue";
import Footer from "../components/Footer/Footer.vue";
import ProfileMenuList from "@/components/MenuList/ProfileMenuList.vue";
import UserInfoNavbar from "@/components/Navbar/UserInfoNavbar.vue";
import AwardSection from "../components/AwardSection/AwardSection.vue"
import NotificationSection from "../components/NotificationSection/NotificationSection.vue"
import SertificatesSection from "../components/SertificatesSection/SertificatesSection.vue"
import SkillsSection from "../components/SkillsSection/SkillsSection.vue"
import CoursesSection from "../components/CoursesSection/CoursesSection.vue"

export default {
  name: "ProfilePage-template",
  components: {
    NavbarProfile,
    AwardSection,
    Footer,
    ProfileMenuList,
    UserInfoNavbar,
     NotificationSection,
    SertificatesSection,
    SkillsSection,
    CoursesSection
  },
  data() {
    return {
      activeComponent: 'CoursesSection'
    };
  },
  methods: {
    changePage(componentName) {
      this.activeComponent = componentName;
    }
  }
};
</script>

<style scoped>
.profile_page_wrap{
  display: flex;
  padding-top: 24px;
  padding-bottom: 44px;
}
.profile_page_left{
  width: 30%;
}
.profile_page_right{
  width: 70%;
}
</style>
