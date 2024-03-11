<template>
  <div class="main_content_slide">
    <div class="main_content_center">
      <div class="main_left">
        <div class="menu_list">
          <button class="active">
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
          <button>
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

            Карьерные возможности
          </button>
        </div>
      </div>
      <div class="main_tab_content">
        <div class="main_content_center_tab">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: tab.active }"
            @click="handleTab(index, tab)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="main_content_slider">
          <SliderCardVue
            v-for="(item, index) in filteredItems"
            :key="index"
            :item="item"
            @card-clicked="handleCardClick"
          />
          <MobileCard
            v-for="(item, index) in filteredItems"
            :key="'mobile-' + index"
            :item="item"
          />
        </div>
        <div class="slider_pagination_wrap">
          <div class="slider_pagination_left">
            <img src="../../assets/arraw_left.svg" alt="" />
          </div>
          <div class="slider_pagination">
            <span>1</span>
          </div>
          <div class="slider_pagination_right">
            <img src="../../assets/arraw_right.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="main_content_right">
        <div class="form_input">
          <div class="form_input_text">
            <img src="../../assets/search.svg" alt="" />
            <input type="text" placeholder="Поиск Курсов" />
          </div>
          <button><img src="../../assets/filter.svg" alt="" /></button>
        </div>
        <p class="form_title">Тип обучения на платформе</p>
        <div class="form_input">
          <div class="form_input_select">
            <input type="text" placeholder="Любой" />
            <img src="../../assets/arrow.svg" alt="" />
          </div>
        </div>
        <div class="form_check">
          <div class="form_check_input">
            <img src="../../assets/check.svg" alt="" />
          </div>
          <p>С трудоустройством</p>
        </div>
        <p class="form_title">Уровень сложности</p>
        <div class="form_input">
          <div class="form_input_select">
            <input type="text" placeholder="Любой" />
            <img src="../../assets/arrow.svg" alt="" />
          </div>
        </div>
        <p class="form_title">Длительность</p>
        <p class="range">от 1 до 24 месяцев</p>
        <div class="form_input">
          <div class="form_input_select range_input">
            <img class="minus" src="../../assets/minus.svg" alt="" />
            <div class="range_number">1</div>
            <img class="plus" src="../../assets/plus.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="activeItem" :item="activeItem" :active="true" @close="closeActiveModal"></Modal>
  </div>
</template>

<script>
import SliderCardVue from "../SliderCard/SliderCard.vue";
import Modal from "../Modal/Modal.vue";
import MobileCard from "../MobileCard/MobileCard.vue";
export default {
  name: "Slider-template",
  components: {
    SliderCardVue,
    Modal,
    MobileCard,
  },
  data() {
    return {
      filteredItems: [],
      currentPage: 1,
      activeItem: null,
      showActiveModal: false,

      tabs: [
        { label: "Предпринимательство", active: false },
        { label: "Фриланс", active: false },
        { label: "Карьера", active: false },
        { label: "Все", active: true },
      ],
      sliderItems: [
        {
          category: "Предпринимательство",
          title: "Beta Career",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Фриланс",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Карьера",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Карьера",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Карьера",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Карьера",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Карьера",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Фриланс",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Фриланс",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Фриланс",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Фриланс",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
        {
          category: "Предпринимательство",
          title: "Low Code",
          price: "от 33 305 ₸",
          description:
            "Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.",
        },
      ],
    };
  },

  mounted() {
    this.filteredItems = this.sliderItems;
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: smooth scrolling animation
      });
    }
    const formCheckInput = document.querySelector(".form_check_input");

    formCheckInput.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    const rangeInput = document.querySelector(".range_input");
    const rangeNumber = rangeInput.querySelector(".range_number");
    const minusButton = rangeInput.querySelector(".minus");
    const plusButton = rangeInput.querySelector(".plus");

    minusButton.addEventListener("click", function () {
      decreaseNumber();
    });

    plusButton.addEventListener("click", function () {
      increaseNumber();
    });

    function decreaseNumber() {
      let currentNumber = parseInt(rangeNumber.textContent, 10);
      if (currentNumber > 1) {
        rangeNumber.textContent = currentNumber - 1;
      }
    }

    function increaseNumber() {
      let currentNumber = parseInt(rangeNumber.textContent, 10);
      if (currentNumber <24){
        rangeNumber.textContent = currentNumber + 1;

      }
    }

    const itemsPerPage = 12;
    const sliderItems = document.querySelectorAll(".slider_item");
    const paginationContainer = document.querySelector(".slider_pagination");

    const totalItems = sliderItems.length;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    pageNumbers.forEach((pageNumber) => {
      const span = document.createElement("span");
      span.textContent = pageNumber;
      paginationContainer.appendChild(span);
    });

    function showItems(pageNumber) {
      const start = (pageNumber - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      sliderItems.forEach((item, index) => {
        item.style.display = index >= start && index < end ? "block" : "none";
      });
    }

    showItems(1);

    function setActivePage(selectedPage) {
      const paginationNumbers = paginationContainer.querySelectorAll("span");
      paginationNumbers.forEach((span) => {
        span.classList.remove("active");
      });

      paginationNumbers[selectedPage - 1].classList.add("active");
      scrollToTop();
    }
    setActivePage(1);
    // Event listener for pagination clicks
    paginationContainer.addEventListener("click", (event) => {
      if (event.target.tagName === "SPAN") {
        const selectedPage = parseInt(event.target.innerText, 10);
        showItems(selectedPage);
        setActivePage(selectedPage);
      }
    });
  },

  methods: {
    handleCardClick(clickedItem) {
      this.activeItem = clickedItem;
      this.showActiveModal = true;
      this.disableBodyScroll();
    },
    closeActiveModal() {
      this.showActiveModal = false;
      this.activeItem = null;
      this.enableBodyScroll(); 
    },
   
    disableBodyScroll() {
      document.body.style.overflow = 'hidden';
    },
    enableBodyScroll() {
      document.body.style.overflow = 'auto';
    },
    isActiveItem(item) {
      return this.activeItem === item;
    },

    handleTab(index, tab) {
      this.tabs.forEach((t) => {
        t.active = t === tab;
      });
      if (tab.label != null || tab.label != undefined) {
        switch (tab.label) {
          case "Предпринимательство":
            this.filteredItems = this.sliderItems.filter(
              (item) => item.category === "Предпринимательство"
            );
            break;
          case "Фриланс":
            this.filteredItems = this.sliderItems.filter(
              (item) => item.category === "Фриланс"
            );
            break;
          case "Карьера":
            this.filteredItems = this.sliderItems.filter(
              (item) => item.category === "Карьера"
            );
            break;
          case "Все":
            this.filteredItems = this.sliderItems;

            break;
          default:
            this.filteredItems = this.sliderItems;
        }
      }
    },
  },
};
</script>

<style>
.main_content_center_tab{}
</style>
