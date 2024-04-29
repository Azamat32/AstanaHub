<template>
  <div :class="{ navbar: true, fixed: isFixed }">
    <div class="container">
      <div class="navbar__body">
        <div class="navbar__left">
          <div
            :class="{ burger_button: true, active: isActiveBtn }"
            @click="handleMenu"
          >
            <span></span>
          </div>
          <a href="#!" class="navbar_logo"
            ><img src="../../assets/logo mid.png" alt=""
          /></a>
          <a href="#!" class="navbar_mobile_logo"
            ><img src="../../assets/logo_mobile.svg" alt=""
          /></a>
        </div>
        <div class="navbar__center">
          <a href="#!"><img src="../../assets/Logo.png" alt="" /></a>
        </div>
        <div class="navbar__right">
          <button href="#!" class="navbar_search">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0C3.25482 0 0 3.25482 0 7.25C0 11.2452 3.25482 14.5 7.25 14.5C8.97818 14.5 10.5669 13.8895 11.8145 12.875L16.7197 17.7803C16.7888 17.8523 16.8716 17.9097 16.9632 17.9493C17.0548 17.9889 17.1534 18.0098 17.2532 18.0108C17.3529 18.0118 17.4519 17.9929 17.5443 17.9552C17.6367 17.9175 17.7206 17.8617 17.7912 17.7912C17.8617 17.7206 17.9175 17.6367 17.9552 17.5443C17.9929 17.4519 18.0118 17.3529 18.0108 17.2532C18.0098 17.1534 17.9889 17.0548 17.9493 16.9632C17.9097 16.8716 17.8523 16.7888 17.7803 16.7197L12.875 11.8145C13.8895 10.5669 14.5 8.97818 14.5 7.25C14.5 3.25482 11.2452 0 7.25 0ZM7.25 1.5C10.4345 1.5 13 4.06548 13 7.25C13 8.80131 12.3881 10.2029 11.3955 11.2354C11.3343 11.2803 11.2803 11.3343 11.2354 11.3955C10.2029 12.3881 8.80131 13 7.25 13C4.06548 13 1.5 10.4345 1.5 7.25C1.5 4.06548 4.06548 1.5 7.25 1.5Z"
                fill="#BDBDBD"
              />
            </svg>
          </button>
          <button href="#!" class="button navbar_contact">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25 0C1.46403 0 0 1.46403 0 3.25V12.75C0 14.536 1.46403 16 3.25 16H16.75C18.536 16 20 14.536 20 12.75V3.25C20 1.46403 18.536 0 16.75 0H3.25ZM3.25 1.5H16.75C17.725 1.5 18.5 2.27497 18.5 3.25V3.80273L10 8.39746L1.5 3.80273V3.25C1.5 2.27497 2.27497 1.5 3.25 1.5ZM1.5 5.50781L9.64355 9.91016C9.75305 9.9693 9.87555 10.0003 10 10.0003C10.1245 10.0003 10.2469 9.9693 10.3564 9.91016L18.5 5.50781V12.75C18.5 13.725 17.725 14.5 16.75 14.5H3.25C2.27497 14.5 1.5 13.725 1.5 12.75V5.50781Z"
                fill="#ABC0B1"
              />
            </svg>
            <span>Поддержка</span>
          </button>
          <div class="navbar_language_button">
            <button
              href="#!"
              class="button navbar_language"
              @click="handleLanguage"
            >
              RU
            </button>
            <div :class="{ navbar_language_dashboard: true, active: isActive }">
              <p>KZ</p>
              <p>EN</p>
            </div>
          </div>

          <div class="user_avatar">
            <router-link to="/profile">
              <img src="../../assets/avatar.png" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ menu_list: true, active: isActiveMenu }">
      <div class="menu_list_close" @click="handleCloseMenu"></div>
      <div class="menu_list_wrap">
        <button
          @click="selectPage('MainPage')"
          :class="{ active: activePage === 'MainPage' }"
        >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.97559 -0.000125358C8.81566 0.0053359 8.66168 0.0617968 8.53613 0.161007L1.42969 5.75964C0.527739 6.47046 0 7.55663 0 8.70495V18.2499C0 18.9317 0.568203 19.4999 1.25 19.4999H6.25C6.9318 19.4999 7.5 18.9317 7.5 18.2499V13.2499C7.5 13.1024 7.60248 12.9999 7.75 12.9999H10.25C10.3975 12.9999 10.5 13.1024 10.5 13.2499V18.2499C10.5 18.9317 11.0682 19.4999 11.75 19.4999H16.75C17.4318 19.4999 18 18.9317 18 18.2499V8.70495C18 7.55663 17.4723 6.47046 16.5703 5.75964L9.46387 0.161007C9.32518 0.0514451 9.15225 -0.00562099 8.97559 -0.000125358ZM9 1.70495L15.6426 6.93835C16.1846 7.36553 16.5 8.01528 16.5 8.70495V17.9999H12V13.2499C12 12.2924 11.2075 11.4999 10.25 11.4999H7.75C6.79252 11.4999 6 12.2924 6 13.2499V17.9999H1.5V8.70495C1.5 8.01528 1.81537 7.36553 2.35742 6.93835L9 1.70495Z"
            fill="#828282"
          />
        </svg>

          <span>Каталог курсов</span>
        </button>
        <button
          @click="selectPage('NewsPage')"
          :class="{ active: activePage === 'NewsPage' }"
        >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25 0C1.46403 0 0 1.46403 0 3.25V14.75C0 16.536 1.46403 18 3.25 18H14.75C16.536 18 18 16.536 18 14.75V3.25C18 1.46403 16.536 0 14.75 0H3.25ZM3.25 1.5H14.75C15.725 1.5 16.5 2.27497 16.5 3.25V4H1.5V3.25C1.5 2.27497 2.27497 1.5 3.25 1.5ZM1.5 5.5H16.5V14.75C16.5 15.725 15.725 16.5 14.75 16.5H3.25C2.27497 16.5 1.5 15.725 1.5 14.75V5.5ZM4.75 7.5C4.41848 7.5 4.10054 7.6317 3.86612 7.86612C3.6317 8.10054 3.5 8.41848 3.5 8.75C3.5 9.08152 3.6317 9.39946 3.86612 9.63388C4.10054 9.8683 4.41848 10 4.75 10C5.08152 10 5.39946 9.8683 5.63388 9.63388C5.8683 9.39946 6 9.08152 6 8.75C6 8.41848 5.8683 8.10054 5.63388 7.86612C5.39946 7.6317 5.08152 7.5 4.75 7.5ZM9 7.5C8.66848 7.5 8.35054 7.6317 8.11612 7.86612C7.8817 8.10054 7.75 8.41848 7.75 8.75C7.75 9.08152 7.8817 9.39946 8.11612 9.63388C8.35054 9.8683 8.66848 10 9 10C9.33152 10 9.64946 9.8683 9.88388 9.63388C10.1183 9.39946 10.25 9.08152 10.25 8.75C10.25 8.41848 10.1183 8.10054 9.88388 7.86612C9.64946 7.6317 9.33152 7.5 9 7.5ZM13.25 7.5C12.9185 7.5 12.6005 7.6317 12.3661 7.86612C12.1317 8.10054 12 8.41848 12 8.75C12 9.08152 12.1317 9.39946 12.3661 9.63388C12.6005 9.8683 12.9185 10 13.25 10C13.5815 10 13.8995 9.8683 14.1339 9.63388C14.3683 9.39946 14.5 9.08152 14.5 8.75C14.5 8.41848 14.3683 8.10054 14.1339 7.86612C13.8995 7.6317 13.5815 7.5 13.25 7.5ZM4.75 12C4.41848 12 4.10054 12.1317 3.86612 12.3661C3.6317 12.6005 3.5 12.9185 3.5 13.25C3.5 13.5815 3.6317 13.8995 3.86612 14.1339C4.10054 14.3683 4.41848 14.5 4.75 14.5C5.08152 14.5 5.39946 14.3683 5.63388 14.1339C5.8683 13.8995 6 13.5815 6 13.25C6 12.9185 5.8683 12.6005 5.63388 12.3661C5.39946 12.1317 5.08152 12 4.75 12ZM9 12C8.66848 12 8.35054 12.1317 8.11612 12.3661C7.8817 12.6005 7.75 12.9185 7.75 13.25C7.75 13.5815 7.8817 13.8995 8.11612 14.1339C8.35054 14.3683 8.66848 14.5 9 14.5C9.33152 14.5 9.64946 14.3683 9.88388 14.1339C10.1183 13.8995 10.25 13.5815 10.25 13.25C10.25 12.9185 10.1183 12.6005 9.88388 12.3661C9.64946 12.1317 9.33152 12 9 12Z"
            fill="#828282"
          />
        </svg>

          <span>Новости</span>
        </button>
        <button
          @click="selectPage('VebinarsPage')"
          :class="{ active: activePage === 'VebinarsPage' }"
        >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25 0.5C1.74011 0.5 0.5 1.74011 0.5 3.25V14.75C0.5 16.2599 1.74011 17.5 3.25 17.5H18.75C20.2599 17.5 21.5 16.2599 21.5 14.75V3.25C21.5 1.74011 20.2599 0.5 18.75 0.5H3.25ZM3.25 2H18.75C19.4491 2 20 2.55089 20 3.25V14.75C20 15.4491 19.4491 16 18.75 16H16V12.75C16 11.7925 15.2075 11 14.25 11H7.75C6.79252 11 6 11.7925 6 12.75V16H3.25C2.55089 16 2 15.4491 2 14.75V3.25C2 2.55089 2.55089 2 3.25 2ZM11 4C10.0625 4 9.26441 4.37857 8.75195 4.95508C8.2395 5.53159 8 6.27083 8 7C8 7.72917 8.2395 8.46841 8.75195 9.04492C9.26441 9.62143 10.0625 10 11 10C11.9375 10 12.7356 9.62143 13.248 9.04492C13.7605 8.46841 14 7.72917 14 7C14 6.27083 13.7605 5.53159 13.248 4.95508C12.7356 4.37857 11.9375 4 11 4ZM11 5.5C11.5625 5.5 11.8894 5.68393 12.127 5.95117C12.3645 6.21841 12.5 6.60417 12.5 7C12.5 7.39583 12.3645 7.78159 12.127 8.04883C11.8894 8.31607 11.5625 8.5 11 8.5C10.4375 8.5 10.1106 8.31607 9.87305 8.04883C9.6355 7.78159 9.5 7.39583 9.5 7C9.5 6.60417 9.6355 6.21841 9.87305 5.95117C10.1106 5.68393 10.4375 5.5 11 5.5ZM7.75 12.5H14.25C14.3975 12.5 14.5 12.6025 14.5 12.75V16H7.5V12.75C7.5 12.6025 7.60248 12.5 7.75 12.5Z"
            fill="#828282"
          />
        </svg>
          <span>Astana Hub Meetups</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
  data() {
    return {
      isActive: false,
      activeSlider: "Slider",
      isActiveBtn: false,
      isActiveMenu: false,
      isFixed: false,
      activePage:""
    };
  },
  methods: {
    selectPage(pageName) {
      this.activePage = pageName;
      this.$emit("changePage", pageName);
    },
    handleLanguage() {
      this.isActive = !this.isActive;
    },
    handleScroll() {
      var navbar = document.querySelector(".navbar");
      if (window.scrollY > navbar.offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },

    selectSlider(sliderName) {
      this.activeSlider = sliderName;
      this.$emit("changeSlider", sliderName); // Emitting the event with the selected slider name
      this.isActiveBtn = !this.isActiveBtn;
      this.isActiveMenu = !this.isActiveMenu;
      this.enableBodyScroll();
    },
    handleMenu() {
      this.isActiveBtn = !this.isActiveBtn;
      this.isActiveMenu = !this.isActiveMenu;
      this.disableBodyScroll();
    },
    handleCloseMenu() {
      this.isActiveBtn = !this.isActiveBtn;
      this.isActiveMenu = !this.isActiveMenu;
      this.enableBodyScroll();
    },
    disableBodyScroll() {
      document.body.style.overflow = "hidden";
    },
    enableBodyScroll() {
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.navbar {
  background: #fff;
  display: block;
  margin-bottom: 24px;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Add any additional styling for the fixed navbar */
}
.navbar_search {
  color: rgba(3, 26, 10, 1);
  text-decoration: none;
  border: 1px solid rgba(237, 245, 240, 1);
  border-radius: 90px;
  align-items: center;
  font-weight: 600;
  /* display: flex; */
  background: none;
  cursor: pointer;
  transition: 0.3s;
  display: none;
}
.navbar__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__right {
  display: flex;
  gap: 8px;
  position: relative;
}
.navbar_logo img {
  width: 62px;
  height: 62px;
}
.button {
  color: rgba(3, 26, 10, 1);
  text-decoration: none;
  border: 1px solid rgba(237, 245, 240, 1);
  border-radius: 90px;
  align-items: center;
  font-weight: 600;
  display: flex;
  background: none;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: rgba(240, 245, 241, 1);
}
.navbar_contact {
  display: flex;
  gap: 12px;
  padding: 14px 12px;
  text-decoration: none;
}

.navbar_language {
  padding: 17px 14px;
}
.user_avatar {
  width: 48px;
  height: 48px;
  border-radius: 40px;
  position: relative;
}
.user_avatar img {
  width: 100%;
}
.user_avatar::before {
  content: "3";
  position: absolute;
  background: rgba(80, 209, 119, 1);
  border-radius: 16px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  bottom: 0;
  right: 0;
  font-size: 12px;
}
.navbar_mobile_logo {
  display: none;
}
.navbar_language_button {
  position: relative;
}
.navbar_language_dashboard {
  background: #fff;
  display: grid;
  grid-auto-columns: 1fr;
  border: 1px solid rgba(237, 245, 240, 1);
  border-radius: 12px;
  position: absolute;
  bottom: -70px;
  display: none;
}
.navbar_language_dashboard.active {
  display: block;
}
.navbar_language_dashboard p {
  cursor: pointer;
  padding: 6px 14px 0px;
}
.burger_button,
.menu_list_close {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  background: rgba(240, 245, 241, 1);
  border-radius: 12px;
  padding: 12px;
  overflow: hidden;
}
.menu_list button span {
  color: #828282;
}
.menu_list_close {
  background: none;
  margin-left: auto;
}
.burger_button span {
  width: 60%;
  height: 1px;
  display: block;
  background: rgba(171, 192, 177, 1);
  top: 15px;
  position: absolute;
  left: 6px;
  transition: 0.4s;
}
.burger_button.active span {
  width: 0%;
}

.burger_button.active::after,
.menu_list_close::after {
  transform: rotate(45deg);
  top: 13px;
}
.burger_button.active::before,
.menu_list_close::before {
  transform: rotate(135deg);
  bottom: 15px;
}
.burger_button::after,
.burger_button::before,
.menu_list_close::after,
.menu_list_close::before {
  position: absolute;
  width: 60%;
  height: 1.5px;
  left: 6px;

  background: rgba(171, 192, 177, 1);
  content: " ";
  transition: 0.4s;
}
.burger_button::after {
  top: 7px;
}

.burger_button::before {
  bottom: 6px;
}
.menu_list button {
  display: flex;
  gap: 12px;
  background: none;
  cursor: pointer;
  background: none;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 12px 16px 12px 16px;
  transition: 0.3s;
  margin-bottom: 4px;
  text-align: left;
  width: 100%;
}
.menu_list button:hover {
  background: rgba(240, 245, 241, 1);
}
.menu_list button.active {
  background: rgba(242, 238, 255, 1);
  color: rgba(123, 97, 255, 1);
}
.menu_list {
  position: fixed;
  top: 0;
  width: 0%;
  background: #fff;
  left: -100%;
  z-index: 10;
  height: 0%;
  transition: 0.4s;
  padding: 90px 15px;
}
.menu_list.active {
  width: 100%;
  left: 0%;

  height: 100%;
}
.menu_list button.active svg path {
  fill: rgba(123, 97, 255, 1);
}
@media (max-width: 780px) {
  .container_big {
    padding: 0px 20px;
  }
  .burger_button,
  .menu_list_close {
    display: block;
  }
  .navbar__left {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .navbar__center {
    display: none;
  }
  .navbar_language_dashboard {
    display: none;
  }
  .navbar {
    padding: 10px 0px;
    margin-bottom: 16px;
  }
  .navbar_contact span {
    display: none;
  }
  .navbar_logo {
    display: none;
  }
  .navbar_search {
    display: flex;
    padding: 14px 12px;
  }
  .navbar_mobile_logo {
    display: block;
  }
}
</style>
