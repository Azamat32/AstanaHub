<template>
  <div class="main_content_slide">
    <div class="main_content_center">
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
          <div class="main_content_slider_wrap">
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
            <div class="slider_pagination_left" @click="changePageLeft">
              <img src="../../assets/arraw_left.svg" alt="" />
            </div>
            <div class="slider_pagination">
              <span
                v-for="pageNumber in totalPagesArray"
                :key="pageNumber"
                @click="changePage(pageNumber)"
                :class="{ active: currentPage === pageNumber }"
                >{{ pageNumber }}</span
              >
            </div>
            <div class="slider_pagination_right" @click="changePageRight">
              <img src="../../assets/arraw_right.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="main_content_right_news mobile_filter">
          <div class="content_right_news_title">
            <h3>Новости</h3>
          </div>
          <div class="content_right_news_wrap">
            <NewsCard
              v-for="(item, index) in newsItems"
              :key="'news-' + index"
              :item="item"
            ></NewsCard>
          </div>
        </div>
      </div>
      <div class="main_content_right big_display">
        <div class="main_content_right_form">
          <div class="form_input">
            <div class="form_input_text">
              <img src="../../assets/search.svg" alt="" />
              <input type="text" placeholder="Поиск Курсов" />
            </div>
            <!-- <button><img src="../../assets/filter.svg" alt="" /></button> -->
          </div>
          <p class="form_title">Тип обучения на платформе</p>
          <div class="form_input">
            <div class="form_input_select">
              <input type="text" placeholder="Любой" />
              <img src="../../assets/arrow.svg" alt="" />
            </div>
          </div>
          <div class="form_check">
            <div
              :class="{ form_check_input: true, active: activeInput }"
              @click="handleCheck"
            >
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
              <img
                class="minus"
                @click="decreaseNumber"
                src="../../assets/minus.svg"
                alt=""
              />
              <div class="range_number">{{ numberValue }}</div>
              <img
                class="plus"
                @click="increaseNumber"
                src="../../assets/plus.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="main_content_right_news">
          <div class="content_right_news_title">
            <h3>Новости</h3>
          </div>
          <div class="content_right_news_wrap">
            <NewsCard
              v-for="(item, index) in newsItems"
              :key="'news-' + index"
              :item="item"
            ></NewsCard>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-if="activeItem"
      :item="activeItem"
      :active="true"
      @close="closeActiveModal"
    ></Modal>
  </div>
</template>

<script>
import SliderCardVue from "../SliderCard/SliderCard.vue";
import Modal from "../Modal/Modal.vue";
import MobileCard from "../MobileCard/MobileCard.vue";
import NewsCard from "../NewsCard/NewsCard.vue";
export default {
  name: "Slider-template",
  components: {
    SliderCardVue,
    Modal,
    MobileCard,
    NewsCard,
  },
  data() {
    return {
      filteredItems: [],
      activeInput: false,
      itemsPerPage: 12,
      numberValue: 1,
      currentPage: 1,
      activeItem: null,
      showActiveModal: false,
      countOfSliderItems: 0,
      countArray: [],
      totalPagesArray: 0,
      tabs: [
        { label: "Предпринимательство", active: false },
        { label: "Фриланс", active: false },
        { label: "Карьера", active: false },
        { label: "Все", active: true },
      ],
      newsItems: [
        {
          description:
            "Зарабатывайте Social Coins и обменивайте их на мерч, курсы и услуги от Astana Hub",
        },
        {
          description:
            "Зарабатывайте Social Coins и обменивайте их на мерч, курсы и услуги от Astana Hub",
        },
        {
          description:
            "Зарабатывайте Social Coins и обменивайте их на мерч, курсы и услуги от Astana Hub",
        },
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
    this.updateFilteredItems();
    this.countOfSliderItems = this.sliderItems.length;

    const totalPages = Math.ceil(this.countOfSliderItems / this.itemsPerPage);
    this.totalPagesArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  },
  watch: {
    currentPage: "updateFilteredItems",
  },
  methods: {
    updateFilteredItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredItems = this.sliderItems;
      this.filteredItems = this.filteredItems.slice(startIndex, endIndex);
    },
    changePage(newPage) {
      this.currentPage = newPage;
    },
    changePageLeft() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    changePageRight() {
      if (this.currentPage < this.totalPagesArray.length) {
        this.currentPage += 1;
      }
    },
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
      document.body.style.overflow = "hidden";
    },
    enableBodyScroll() {
      document.body.style.overflow = "auto";
    },
    isActiveItem(item) {
      return this.activeItem === item;
    },
    handleCheck() {
      this.activeInput = !this.activeInput;
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

<style></style>
