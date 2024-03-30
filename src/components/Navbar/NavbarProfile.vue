<template>
    <div :class="{ navbar: true, fixed: isFixed }">
      <div class="container_big">
        <div class="navbar__body">
          <div class="navbar__left">
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
    </div>
  </template>
  
  <script>
  export default {
    name: "NavbarProfile-template",
    data() {
      return {
        isActive: false,
        activeSlider: "Slider",
        isActiveBtn: false,
        isActiveMenu: false,
        isFixed: false,
      };
    },
    methods: {
      
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
    padding: 5px 0px;
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
  