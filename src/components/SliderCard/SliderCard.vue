<template>
  <div class="slider_item" ref="sliderItem">
    <div class="slider_item_banner">
        <div class="slider_banner_bg"></div>
      <img src="../../assets/test.jpg" alt="" />
    </div>
    <div class="slider_item_text">
      <div class="slider_item_text_category">
        <span>{{ item.category }}</span>


      </div>
      <h1>{{ item.title }}</h1>
      <h2>{{ item.price }}</h2>
    </div>
    <div class="slider_item_button">
      <button @click="handleClick" class="btn">Подробнее</button>
      <button class="slider_register_btn">Записаться</button>
      <!-- <button class=" btn circle">
        <svg 
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8236 0.662071C12.8055 0.662612 12.7875 0.664133 12.7696 0.666628H8.16669C8.10043 0.665691 8.03465 0.677932 7.97317 0.702639C7.91168 0.727346 7.85572 0.764026 7.80854 0.810548C7.76135 0.85707 7.72388 0.912507 7.69831 0.973635C7.67273 1.03476 7.65956 1.10037 7.65956 1.16663C7.65956 1.23289 7.67273 1.29849 7.69831 1.35962C7.72388 1.42075 7.76135 1.47619 7.80854 1.52271C7.85572 1.56923 7.91168 1.60591 7.97317 1.63062C8.03465 1.65532 8.10043 1.66757 8.16669 1.66663H11.6263L6.47984 6.81311C6.43185 6.85919 6.39354 6.91437 6.36715 6.97543C6.34076 7.0365 6.32682 7.10221 6.32614 7.16873C6.32546 7.23525 6.33807 7.30124 6.36321 7.36283C6.38836 7.42442 6.42554 7.48037 6.47258 7.52741C6.51961 7.57445 6.57557 7.61163 6.63715 7.63677C6.69874 7.66191 6.76473 7.67452 6.83125 7.67384C6.89777 7.67317 6.96348 7.65922 7.02455 7.63283C7.08561 7.60644 7.1408 7.56813 7.18687 7.52014L12.3334 2.37366V5.8333C12.3324 5.89955 12.3447 5.96533 12.3694 6.02682C12.3941 6.0883 12.4307 6.14426 12.4773 6.19145C12.5238 6.23863 12.5792 6.2761 12.6404 6.30167C12.7015 6.32725 12.7671 6.34042 12.8334 6.34042C12.8996 6.34042 12.9652 6.32725 13.0263 6.30167C13.0875 6.2761 13.1429 6.23863 13.1894 6.19145C13.236 6.14426 13.2726 6.0883 13.2973 6.02682C13.322 5.96533 13.3343 5.89955 13.3334 5.8333V1.22978C13.3432 1.15784 13.3373 1.08462 13.316 1.01521C13.2947 0.945792 13.2585 0.88185 13.21 0.827824C13.1615 0.773798 13.1018 0.730985 13.0351 0.702361C12.9683 0.673737 12.8962 0.659988 12.8236 0.662071ZM3.16669 1.66663C1.79185 1.66663 0.666687 2.79179 0.666687 4.16663V10.8333C0.666687 12.2081 1.79185 13.3333 3.16669 13.3333H9.83335C11.2082 13.3333 12.3334 12.2081 12.3334 10.8333V7.49996C12.3343 7.43371 12.322 7.36793 12.2973 7.30644C12.2726 7.24496 12.236 7.189 12.1894 7.14181C12.1429 7.09463 12.0875 7.05716 12.0263 7.03158C11.9652 7.00601 11.8996 6.99284 11.8334 6.99284C11.7671 6.99284 11.7015 7.00601 11.6404 7.03158C11.5792 7.05716 11.5238 7.09463 11.4773 7.14181C11.4308 7.189 11.3941 7.24496 11.3694 7.30644C11.3447 7.36793 11.3324 7.43371 11.3334 7.49996V10.8333C11.3334 11.6678 10.6679 12.3333 9.83335 12.3333H3.16669C2.33219 12.3333 1.66669 11.6678 1.66669 10.8333V4.16663C1.66669 3.33213 2.33219 2.66663 3.16669 2.66663H6.50002C6.56628 2.66757 6.63206 2.65532 6.69354 2.63062C6.75503 2.60591 6.81099 2.56923 6.85817 2.52271C6.90536 2.47619 6.94282 2.42075 6.9684 2.35962C6.99397 2.29849 7.00714 2.23289 7.00714 2.16663C7.00714 2.10037 6.99397 2.03476 6.9684 1.97364C6.94282 1.91251 6.90536 1.85707 6.85817 1.81055C6.81099 1.76403 6.75503 1.72735 6.69354 1.70264C6.63206 1.67793 6.56628 1.66569 6.50002 1.66663H3.16669Z"
            fill="white"
          />
        </svg>
      </button> -->
    </div>
    <div class="slider_item_hover_text">
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderCard-template",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // Adjust the position of the hover text initially
    this.adjustHoverTextPosition();
  },
  watch: {
      immediate: true,
      handler() {
        this.adjustHoverTextPosition();
      },
  },
  updated() {
    // Adjust the position of the hover text when the component updates
    this.adjustHoverTextPosition();
  },
  methods: {
    handleClick() {
      this.$emit("card-clicked", this.item); // Emitting an event with the item data
    },
    adjustHoverTextPosition() {
      const sliderItem = this.$refs.sliderItem;
      const sliderItemTextTitle = sliderItem.querySelector(".slider_item_text h1").offsetHeight;
      const sliderItemTextSubTitle = sliderItem.querySelector(".slider_item_text h2").offsetHeight;
      const sliderItemTextCategory = sliderItem.querySelector(".slider_item_text_category").offsetHeight;

      const sliderHoverText = sliderItem.querySelector(".slider_item_hover_text p");
      // const sliderCardHeight = sliderItem.offsetHeight;
      // const sliderItemText = sliderItem.querySelector(".slider_item_text");
        
      const textHeight = sliderItemTextTitle + sliderItemTextSubTitle + sliderItemTextCategory;
      // Set the top position of the hover text
      sliderHoverText.style.marginTop  = textHeight + "px";
    },
  },
};
</script>

<style scoped>
.slider_item {
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: 0.4s;
  background: linear-gradient(103.57deg, #9747ff 9.31%, #7a6af4 100%);
  user-select: none;

}
.slider_item_text_category{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 13px;

}
.slider_item_text_category span{
}
.slider_item:hover .slider_item_hover_text {
  bottom: 0;
  z-index: 2;
  height: 100%;

}
.slider_banner_bg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: #000;
  opacity: 0.3;
}
.slider_item_hover_text p {
  transition: 0.4s;

  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slider_item_hover_text {
  position: absolute;
  transition: 0.4s;
  background: linear-gradient(103.57deg, #9747ff 9.31%, #7a6af4 100%);
  color: #fff;
  padding:10px 14px 0px 14px;
  transition: bottom 0.8s ease, height 0.4s ease;
  bottom: -100%;
  z-index: 2;
  height: 0%;
}
.slider_item_banner {
  position: absolute;
  width: 100%;
  height: 100%;
}
.slider_item_banner img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.slider_item_text {
  color: rgba(255, 255, 255, 1);
  padding: 15px 12px;
  position: relative;
}
.slider_item_text span {
  font-size: 12px;
  border: 1px solid rgba(237, 245, 240, 1);
  border-radius: 6px;
  padding: 3px 4px;
  /* margin-bottom: 13px; */
  display: block;
  width: fit-content;
  z-index: 4;
  position: relative;
  display: block;
}
.slider_item_text h2 {
  font-weight: 600;
  font-size: 16px;
  z-index: 2;
  margin-bottom: 55px;
  position: relative;
}
.slider_item_text h1 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 25px;
  z-index: 4;
  word-wrap:break-word;
  position: relative;
}
.slider_item_button {
  padding: 15px 14px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 13px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 4;
}

.slider_register_btn {
  background: rgba(123, 97, 255, 1);
  border: 1px solid rgba(237, 245, 240, 1);
  text-align: center;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
}
.slider_register_btn:hover {
  border: 1px solid rgba(237, 245, 240, 1);
  background: rgb(105, 75, 255);
}
.slider_item_button .btn:hover {
  background: rgb(105, 75, 255);


}
.slider_item_button .btn {
  border: 1px solid rgba(237, 245, 240, 1);
  background: none;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 10px 2px;
  cursor: pointer;
  transition: 0.4s;
}

.slider_item_button .circle {
  border-radius: 40px;
  padding: 10px;
  width: 32px;
  display: flex;
  justify-content: center;
  height: 32px;
  align-items: center;
}
.slider_item_button .circle svg {
  width: 20px;
}
@media (max-width: 780px) {
  .slider_item:hover .slider_item_hover_text {
    bottom: -30%;
  }
}
@media (max-width: 1180px) {
  .slider_item:hover .slider_item_hover_text {
    bottom: 0%;
    height: 100%;
  }
}

@media (max-width: 480px) {
  .slider_item_button .btn{
    width: 50%;
  }
  .slider_register_btn{
    width: 45%;

  }
}
</style>
