<template>
  <div class="main_content_slide">
    <div class="main_content_center">
      <div class="main_tab_content">
        <div class="main_content_slider">
          <div class="main_content_slider_wrap">
            <NewsCard
              v-for="(item, index) in filteredItems"
              :key="index"
              :item="item"
              @card-clicked="handleCardClick"
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
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../NewsCard/NewsCard.vue";
export default {
  name: "NewsSlider-template",
  components: {
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
    };
  },

  mounted() {
    this.updateFilteredItems();
    this.countOfSliderItems = this.newsItems.length;

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
      this.filteredItems = this.newsItems;
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
  },
};
</script>

<style scoped>
.main_tab_content {
  width: 100%;
}
.main_content_slider_wrap {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (max-width: 1280px) {
  .main_content_slider_wrap {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 780px) {
  .main_content_slider_wrap {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .main_content_slider_wrap {
    grid-template-columns: 1fr;
  }
}
</style>
