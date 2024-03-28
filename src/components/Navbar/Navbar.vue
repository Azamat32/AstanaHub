<template>
  <div :class="{'navbar': true, 'fixed': isFixed }">
    <div class="container_big">
      <div class="navbar__body">
        <div class="navbar__left">
          <div
            :class="{ burger_button: true, active: isActiveBtn }"
            @click="handleMenu"
          >
            <span></span>
          </div>
          <a href="#!" class="navbar_logo"
            ><img src="../../assets/logo mid.png" alt="" /></a>
          <a href="#!" class="navbar_mobile_logo"
            ><img src="../../assets/Logo.svg" alt=""
          /></a>
        </div>
        <div class="navbar__center">
          <a href="#!"><img src="../../assets/Logo.png" alt=""
          /></a>
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
            <img src="../../assets/avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div :class="{ menu_list: true, active: isActiveMenu }">
      <div class="menu_list_close" @click = "handleCloseMenu">
      </div>
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
            d="M8.97559 -3.28786e-06C8.81566 0.00545797 8.66168 0.0619189 8.53613 0.16113L1.42969 5.75976C0.527739 6.47058 0 7.55675 0 8.70507V18.25C0 18.9318 0.568203 19.5 1.25 19.5H6.25C6.9318 19.5 7.5 18.9318 7.5 18.25V13.25C7.5 13.1025 7.60248 13 7.75 13H10.25C10.3975 13 10.5 13.1025 10.5 13.25V18.25C10.5 18.9318 11.0682 19.5 11.75 19.5H16.75C17.4318 19.5 18 18.9318 18 18.25V8.70507C18 7.55675 17.4723 6.47058 16.5703 5.75976L9.46387 0.16113C9.32518 0.0515671 9.15225 -0.00549892 8.97559 -3.28786e-06ZM9 1.70507L15.6426 6.93847C16.1846 7.36566 16.5 8.0154 16.5 8.70507V18H12V13.25C12 12.2925 11.2075 11.5 10.25 11.5H7.75C6.79252 11.5 6 12.2925 6 13.25V18H1.5V8.70507C1.5 8.0154 1.81537 7.36566 2.35742 6.93847L9 1.70507Z"
            fill="#828282"
          />
        </svg>
        Каталог курсов
      </button>
      <button
      @click="selectPage('NewsPage')" 
      :class="{ active: activePage === 'NewsPage' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="18"
          height="20"
        >
          <path
            fill="#828282"
            d="M 1.71875 2.78125 C 1.253906 2.886719 0.925781 3.304688 0.9375 3.78125 L 0.9375 39.46875 C 0.9375 43.714844 3.144531 46.109375 5.3125 47.1875 C 7.480469 48.265625 9.625 48.21875 9.625 48.21875 L 40.375 48.21875 L 40.375 48.125 C 40.855469 48.179688 41.375 48.21875 41.375 48.21875 C 41.375 48.21875 43.296875 48.230469 45.21875 47.125 C 47.09375 46.046875 48.941406 43.765625 49.03125 39.8125 C 49.042969 39.792969 49.054688 39.769531 49.0625 39.75 C 49.0625 39.726563 49.0625 39.710938 49.0625 39.6875 C 49.066406 39.636719 49.066406 39.582031 49.0625 39.53125 L 49.0625 14.4375 C 49.0625 14.425781 49.0625 14.417969 49.0625 14.40625 C 49.0625 14.40625 49.078125 13.234375 48.46875 12.03125 C 47.859375 10.828125 46.441406 9.53125 44.21875 9.53125 L 44.21875 9.5 L 34.75 9.5 L 34.75 11.5 L 40.3125 11.5 C 40.191406 11.671875 40.089844 11.828125 40 12 C 39.390625 13.191406 39.375 14.375 39.375 14.375 L 39.375 38.625 C 39.371094 38.984375 39.558594 39.320313 39.871094 39.503906 C 40.183594 39.683594 40.566406 39.683594 40.878906 39.503906 C 41.191406 39.320313 41.378906 38.984375 41.375 38.625 L 41.375 14.375 C 41.375 14.347656 41.414063 13.625 41.78125 12.90625 C 42.15625 12.175781 42.683594 11.53125 44.21875 11.53125 C 45.75 11.53125 46.277344 12.191406 46.65625 12.9375 C 47.027344 13.671875 47.09375 14.410156 47.09375 14.4375 L 47.0625 14.4375 L 47.0625 39.53125 C 47.0625 43.089844 45.640625 44.589844 44.21875 45.40625 C 42.796875 46.222656 41.375 46.21875 41.375 46.21875 C 41.375 46.21875 39.683594 46.195313 38 45.34375 C 36.316406 44.492188 34.6875 42.996094 34.6875 39.46875 L 34.6875 3.78125 C 34.6875 3.230469 34.238281 2.78125 33.6875 2.78125 L 1.9375 2.78125 C 1.863281 2.773438 1.792969 2.773438 1.71875 2.78125 Z M 2.9375 4.78125 L 32.6875 4.78125 L 32.6875 39.46875 C 32.6875 42.757813 34.082031 44.910156 35.71875 46.21875 L 9.625 46.21875 C 9.613281 46.21875 9.605469 46.21875 9.59375 46.21875 C 9.59375 46.21875 9.164063 46.222656 8.53125 46.125 C 8.214844 46.074219 7.863281 45.992188 7.46875 45.875 C 7.074219 45.757813 6.636719 45.613281 6.21875 45.40625 C 6.007813 45.300781 5.796875 45.191406 5.59375 45.0625 C 4.164063 44.164063 2.9375 42.613281 2.9375 39.46875 Z M 6.9375 11 C 6.386719 11.078125 6 11.589844 6.078125 12.140625 C 6.15625 12.691406 6.667969 13.078125 7.21875 13 L 26.9375 13 C 27.296875 13.003906 27.632813 12.816406 27.816406 12.503906 C 27.996094 12.191406 27.996094 11.808594 27.816406 11.496094 C 27.632813 11.183594 27.296875 10.996094 26.9375 11 L 7.21875 11 C 7.1875 11 7.15625 11 7.125 11 C 7.09375 11 7.0625 11 7.03125 11 C 7 11 6.96875 11 6.9375 11 Z M 6.9375 15 C 6.386719 15.078125 6 15.589844 6.078125 16.140625 C 6.15625 16.691406 6.667969 17.078125 7.21875 17 L 26.9375 17 C 27.296875 17.003906 27.632813 16.816406 27.816406 16.503906 C 27.996094 16.191406 27.996094 15.808594 27.816406 15.496094 C 27.632813 15.183594 27.296875 14.996094 26.9375 15 L 7.21875 15 C 7.1875 15 7.15625 15 7.125 15 C 7.09375 15 7.0625 15 7.03125 15 C 7 15 6.96875 15 6.9375 15 Z M 7.40625 23 C 6.855469 23.078125 6.46875 23.589844 6.546875 24.140625 C 6.625 24.691406 7.136719 25.078125 7.6875 25 L 14.46875 25 C 14.828125 25.003906 15.164063 24.816406 15.347656 24.503906 C 15.527344 24.191406 15.527344 23.808594 15.347656 23.496094 C 15.164063 23.183594 14.828125 22.996094 14.46875 23 L 7.6875 23 C 7.65625 23 7.625 23 7.59375 23 C 7.5625 23 7.53125 23 7.5 23 C 7.46875 23 7.4375 23 7.40625 23 Z M 18.9375 23 C 18.386719 23.078125 18 23.589844 18.078125 24.140625 C 18.15625 24.691406 18.667969 25.078125 19.21875 25 L 26.9375 25 C 27.296875 25.003906 27.632813 24.816406 27.816406 24.503906 C 27.996094 24.191406 27.996094 23.808594 27.816406 23.496094 C 27.632813 23.183594 27.296875 22.996094 26.9375 23 L 19.21875 23 C 19.1875 23 19.15625 23 19.125 23 C 19.09375 23 19.0625 23 19.03125 23 C 19 23 18.96875 23 18.9375 23 Z M 7.40625 27 C 6.855469 27.078125 6.46875 27.589844 6.546875 28.140625 C 6.625 28.691406 7.136719 29.078125 7.6875 29 L 14.46875 29 C 14.828125 29.003906 15.164063 28.816406 15.347656 28.503906 C 15.527344 28.191406 15.527344 27.808594 15.347656 27.496094 C 15.164063 27.183594 14.828125 26.996094 14.46875 27 L 7.6875 27 C 7.65625 27 7.625 27 7.59375 27 C 7.5625 27 7.53125 27 7.5 27 C 7.46875 27 7.4375 27 7.40625 27 Z M 18.9375 27 C 18.386719 27.078125 18 27.589844 18.078125 28.140625 C 18.15625 28.691406 18.667969 29.078125 19.21875 29 L 26.9375 29 C 27.296875 29.003906 27.632813 28.816406 27.816406 28.503906 C 27.996094 28.191406 27.996094 27.808594 27.816406 27.496094 C 27.632813 27.183594 27.296875 26.996094 26.9375 27 L 19.21875 27 C 19.1875 27 19.15625 27 19.125 27 C 19.09375 27 19.0625 27 19.03125 27 C 19 27 18.96875 27 18.9375 27 Z M 18.9375 30.78125 C 18.386719 30.859375 18 31.371094 18.078125 31.921875 C 18.15625 32.472656 18.667969 32.859375 19.21875 32.78125 L 26.9375 32.78125 C 27.296875 32.785156 27.632813 32.597656 27.816406 32.285156 C 27.996094 31.972656 27.996094 31.589844 27.816406 31.277344 C 27.632813 30.964844 27.296875 30.777344 26.9375 30.78125 L 19.21875 30.78125 C 19.15625 30.773438 19.09375 30.773438 19.03125 30.78125 C 19 30.78125 18.96875 30.78125 18.9375 30.78125 Z M 7.40625 31 C 6.855469 31.078125 6.46875 31.589844 6.546875 32.140625 C 6.625 32.691406 7.136719 33.078125 7.6875 33 L 14.46875 33 C 14.828125 33.003906 15.164063 32.816406 15.347656 32.503906 C 15.527344 32.191406 15.527344 31.808594 15.347656 31.496094 C 15.164063 31.183594 14.828125 30.996094 14.46875 31 L 7.6875 31 C 7.65625 31 7.625 31 7.59375 31 C 7.5625 31 7.53125 31 7.5 31 C 7.46875 31 7.4375 31 7.40625 31 Z M 18.9375 34.78125 C 18.386719 34.859375 18 35.371094 18.078125 35.921875 C 18.15625 36.472656 18.667969 36.859375 19.21875 36.78125 L 26.9375 36.78125 C 27.296875 36.785156 27.632813 36.597656 27.816406 36.285156 C 27.996094 35.972656 27.996094 35.589844 27.816406 35.277344 C 27.632813 34.964844 27.296875 34.777344 26.9375 34.78125 L 19.21875 34.78125 C 19.15625 34.773438 19.09375 34.773438 19.03125 34.78125 C 19 34.78125 18.96875 34.78125 18.9375 34.78125 Z M 7.40625 35 C 6.855469 35.078125 6.46875 35.589844 6.546875 36.140625 C 6.625 36.691406 7.136719 37.078125 7.6875 37 L 14.46875 37 C 14.828125 37.003906 15.164063 36.816406 15.347656 36.503906 C 15.527344 36.191406 15.527344 35.808594 15.347656 35.496094 C 15.164063 35.183594 14.828125 34.996094 14.46875 35 L 7.6875 35 C 7.65625 35 7.625 35 7.59375 35 C 7.5625 35 7.53125 35 7.5 35 C 7.46875 35 7.4375 35 7.40625 35 Z M 18.9375 38.53125 C 18.386719 38.609375 18 39.121094 18.078125 39.671875 C 18.15625 40.222656 18.667969 40.609375 19.21875 40.53125 L 26.9375 40.53125 C 27.296875 40.535156 27.632813 40.347656 27.816406 40.035156 C 27.996094 39.722656 27.996094 39.339844 27.816406 39.027344 C 27.632813 38.714844 27.296875 38.527344 26.9375 38.53125 L 19.21875 38.53125 C 19.1875 38.53125 19.15625 38.53125 19.125 38.53125 C 19.09375 38.53125 19.0625 38.53125 19.03125 38.53125 C 19 38.53125 18.96875 38.53125 18.9375 38.53125 Z M 7.40625 39 C 6.855469 39.078125 6.46875 39.589844 6.546875 40.140625 C 6.625 40.691406 7.136719 41.078125 7.6875 41 L 14.46875 41 C 14.828125 41.003906 15.164063 40.816406 15.347656 40.503906 C 15.527344 40.191406 15.527344 39.808594 15.347656 39.496094 C 15.164063 39.183594 14.828125 38.996094 14.46875 39 L 7.6875 39 C 7.65625 39 7.625 39 7.59375 39 C 7.5625 39 7.53125 39 7.5 39 C 7.46875 39 7.4375 39 7.40625 39 Z"
          />
        </svg>

        Новости
      </button>
      <button  @click="selectPage('VebinarsPage')" :class="{ active: activePage === 'VebinarsPage' }">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25 0C2.01625 0 1 1.01625 1 2.25V9.02539C0.434939 9.14383 0 9.65375 0 10.25V15.75C0 16.3462 0.434939 16.8562 1 16.9746V17.75C1 18.9838 2.01625 20 3.25 20H14.75C15.9838 20 17 18.9838 17 17.75V16.9746C17.5651 16.8562 18 16.3462 18 15.75V10.25C18 9.65375 17.5651 9.14383 17 9.02539V7.25C17 7.0511 16.9209 6.86036 16.7803 6.71973L16.7725 6.71191L10.2803 0.219727C10.1396 0.0790744 9.9489 3.82642e-05 9.75 0H3.25ZM3.25 1.5H9V5.75C9 6.98375 10.0162 8 11.25 8H15.5V9H2.5V2.25C2.5 1.82675 2.82675 1.5 3.25 1.5ZM10.5 2.56055L14.4395 6.5H11.25C10.8268 6.5 10.5 6.17325 10.5 5.75V2.56055ZM1.5 10.5H16.5V15.5H1.5V10.5ZM5 11C4.724 11 4.5 11.224 4.5 11.5V14.5C4.5 14.776 4.724 15 5 15C5.276 15 5.5 14.776 5.5 14.5V14H6C6.827 14 7.5 13.327 7.5 12.5C7.5 11.673 6.827 11 6 11H5ZM8.5 11C8.224 11 8 11.224 8 11.5V14.5C8 14.776 8.224 15 8.5 15H9C10.103 15 11 14.103 11 13C11 11.897 10.103 11 9 11H8.5ZM12 11C11.724 11 11.5 11.224 11.5 11.5V14.5C11.5 14.776 11.724 15 12 15C12.276 15 12.5 14.776 12.5 14.5V13.5H13.25C13.526 13.5 13.75 13.276 13.75 13C13.75 12.724 13.526 12.5 13.25 12.5H12.5V12H13.5C13.776 12 14 11.776 14 11.5C14 11.224 13.776 11 13.5 11H12ZM5.5 12H6C6.2755 12 6.5 12.2245 6.5 12.5C6.5 12.7755 6.2755 13 6 13H5.5V12ZM9 12C9.5515 12 10 12.4485 10 13C10 13.5515 9.5515 14 9 14V12ZM2.5 17H15.5V17.75C15.5 18.1733 15.1732 18.5 14.75 18.5H3.25C2.82675 18.5 2.5 18.1733 2.5 17.75V17Z"
            fill="#828282"
          />
        </svg>

        Astana Hub Meetups
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
      var navbar = document.querySelector('.navbar');
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
      this.enableBodyScroll()

    },
    handleMenu() {
      this.isActiveBtn = !this.isActiveBtn;
      this.isActiveMenu = !this.isActiveMenu;
      this.disableBodyScroll()
    },
    handleCloseMenu() {
      this.isActiveBtn = !this.isActiveBtn;
      this.isActiveMenu = !this.isActiveMenu;
      this.enableBodyScroll()
    },
    disableBodyScroll() {
      document.body.style.overflow = "hidden";
    },
    enableBodyScroll() {
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
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
.burger_button , .menu_list_close {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  background: rgba(240, 245, 241, 1);
  border-radius: 12px;
  padding: 12px;
  overflow: hidden;
}
.menu_list_close{
  background: none;
  margin-left: auto;
}
.burger_button span  {
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

.burger_button.active::after, .menu_list_close::after {
  transform: rotate(45deg);
  top: 13px;
}
.burger_button.active::before ,.menu_list_close::before  {
  transform: rotate(135deg);
  bottom: 15px;
}
.burger_button::after,
.burger_button::before , .menu_list_close::after,.menu_list_close::before {
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
.container_big{
  padding: 0px 20px;
}
  .burger_button , .menu_list_close {
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
