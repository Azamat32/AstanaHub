<template>
  <div class="main_left">
    <div :class="{ menu_list: true, padding_top: isFixed }">
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
        

        <span>Astana Hub Meetups</span>
      </button>
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "MenuList-template",
  data() {
    return {
      isFixed: false,

      numberValue: 1,
      activeInput: false,
      activeSlider: "Slider",
      activePage: "MainPage",
    };
  },

  methods: {
    increaseNumber() {
      if (this.numberValue < 24) {
        this.numberValue = this.numberValue + 1;
      }
    },
    decreaseNumber() {
      if (this.numberValue > 1) {
        this.numberValue = this.numberValue - 1;
      }
    },
    handleCheck() {
      this.activeInput = !this.activeInput;
    },

    selectPage(pageName) {
      this.activePage = pageName;
      this.$emit("changePage", pageName);
    },

    handleScroll() {
      if (window.scrollY > 60) {
        this.isFixed = true; // Add the class when scrolled down by 80px
      } else {
        this.isFixed = false; // Remove the class when not scrolled down by 80px
      }
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
.menu_list {
  position: fixed;
  width: 12%;
}
.menu_list button {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.menu_list button span {
  width: 80%;
  color: #828282;
}
.menu_list button.active span{
  color: inherit;
}
.padding_top {
  padding-top: 30px;
}

@media (max-width: 2600px) {
  .menu_list {
    width: 8%;
  }
}
@media (max-width: 2300px) {
  .menu_list {
    width: 8%;
  }
}
@media (max-width: 1900px) {
  .menu_list {
    width: 12%;
  }
}
@media (max-width: 1285px) {
  .menu_list {
    width: 20%;
  }
}
</style>
