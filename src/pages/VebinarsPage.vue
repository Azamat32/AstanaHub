<template>
  <div class="vebinars_page">
    <div class="container">
      <div class="vebinars_page_wrap" :style="{ marginBottom: marginBottomStyle }">
      
      <VebinarCard
              v-for="(item, index) in vebinarItems"
              :key="index"
              :item="item"
              @vebinerCard-clicked="handleCardClick"
            />
  </div>
    </div>
  
    <ModalVebinar
      v-if="activeItem"
      :item="activeItem"
      :active="true"
      @close="closeActiveModal"
    ></ModalVebinar>
  </div>
  
</template>

<script>
import VebinarCard from '@/components/SliderCard/VebinarCard.vue';
import ModalVebinar from '@/components/Modal/ModalVebinar.vue';
export default {
  name: "VebinarsPage-template",
  components:{
    VebinarCard,
    ModalVebinar
  },data() {
    return {
      activeItem: null,
      showActiveModal: false,

        vebinarItems: [
        {
          title: "Webinar from Digital Nomad",
            
        }
      
    ]
    }},
    computed: {
    marginBottomStyle() {
      // Calculate the number of items
      const numItems = this.vebinarItems.length;
      
      // If the number of items is less than 3 or 6, return '20%' for margin bottom, otherwise return '0'
      return  numItems < 6 ? '20%' : '0';
    }
  },

    methods:{
        closeActiveModal() {
      this.showActiveModal = false;
      this.activeItem = null;
      this.enableBodyScroll();
    },
    isActiveItem(item) {
      return this.activeItem === item;
    },
    disableBodyScroll() {
      document.body.style.overflow = "hidden";
    },
    enableBodyScroll() {
      document.body.style.overflow = "auto";
    },
    handleCardClick(clickedItem) {
      this.activeItem = clickedItem;
      this.showActiveModal = true;
      this.disableBodyScroll();
    },
    }

};
</script>


<style scoped>
.vebinars_page{
  padding: 0 30px;
}
.vebinars_page_wrap{
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding-bottom: 150px;
    position: relative;
}
@media (max-width: 900px) {
    .vebinars_page_wrap{
  grid-template-columns:  1fr 1fr;

    }
}
@media (max-width: 480px) {
    .vebinars_page_wrap{
  grid-template-columns:  1fr;

    }
    .vebinars_page{
      width: 100%;
    }
}
</style>