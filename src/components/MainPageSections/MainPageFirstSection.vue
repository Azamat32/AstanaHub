<template>
  <div class="first_section">
    <div class="swiper">
      <div class="swiper_wrap">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ swiper_slide: true, active: activeIndex === index }"
        >
          <div class="slide_banner">
            <img :src="slide.image" />
          </div>
          <div class="slide_content">
            <span>{{ slide.category }}</span>
            <h1>{{ slide.title }}</h1>
            <h3>{{ slide.cost }}</h3>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <span  v-for="(slide, index) in slides"
          :key="index"
          @click="changeSlide(index)"
          :class="{ padding_span: true, active: activeIndex === index }"></span>
      </div>
    </div>
    <div class="first_section_second">
      <div class="first_section_second_text">
        <h1>Приведи друга получи скидку</h1>
        <button>Прими участие в акции</button>
      </div>
      <div class="first_section_second_img">
        <img src="../../assets/Bear.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import startupImage from "../../assets/startup.png";
import academyImage from "../../assets/academy.png";
import low_code from "../../assets/low_code.png";

export default {
  name: "MainFirstSection-template",
  data() {
    return {
      slides: [
        {
          image: startupImage,
          title: "Beta Career",
          cost: "от 33 305 ₸",
          category: "Предпринимательство",
        },
        {
          image: academyImage,
          title: "Low Code",
          cost: "от 33 305 ₸",
          category: "Фриланс",
        },
        {
          image: academyImage,
          title: "StartUp School",
          cost: "от 33 305 ₸",
          category: "Предпринимательство",
        },
        {
          image: low_code,
          title: "Low Code",
          cost: "от 33 305 ₸",
          category: "Карьера",
        },
      ],
      translateValue: 0, // Initial value for translation
      activeIndex: 0, // Initialize activeIndex
    };
  },
 
  methods: {
    
    changeSlide(index) {
      // Update the activeIndex when a span is clicked
      this.activeIndex = index;
    },
  },
};
</script>

<style>
.first_section {
  display: flex;
  gap: 10px;
  margin-bottom: 42px;
}
.first_section_second {
  width: 40%;
  background: linear-gradient(90deg, #9747ff 0%, #7b43fc 49.5%, #563cf4 99.99%);
  border-radius: 12px;
  text-align: center;
  position: relative;
}
.first_section_second_img {
  height: 25vh;
  position: relative;
  width: 100%;
}
.first_section_second img {
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.first_section_second_text {
  padding: 32px 32px 32px 0px;
}
.first_section_second_text h1 {
  color: #fff;
  font-size: 28px;
  font-weight: 800;
}
.first_section_second_text button {
  background: #efe6f0;
  border: none;
  cursor: pointer;
  padding: 5px 24px;
  text-align: center;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  color: #11031a;
  margin-top: 9px;
  transition: 0.4s;
}
.first_section_second_text button:hover{
  background: #11031a;
  color: #efe6f0;

}
.swiper {
  overflow: hidden;
  width: 60%;
  border-radius: 12px;
  position: relative;
}
.swiper_wrap {
  display: flex;
  position: relative;
  height: 100%;
  transition: transform 0.5s ease; /* Add transition for smooth slide animation */
}
.swiper_slide {
  width: 100%;
  height: 100%;

  display: none; /* Initially hide all slides */
}
.swiper_slide.active {
  display: block; /* Display active slide */
}
.slide_banner {
  position: absolute;
  width: 100%;
  user-select: none;
  height: 100%;
}
.swiper_slide img {
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  height: 100%;
  position: relative;
}
.slide_content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 5;
  position: relative;
}
.slide_content span {
  font-size: 16px;
  border: 1px solid #edf5f0;
  border-radius: 6px;
  padding: 3px 4px;
  /* margin-bottom: 13px; */
  display: block;
  width: fit-content;
  z-index: 4;
  position: relative;
  display: block;
  color: #fff;
  margin-bottom: 16px;

  font-weight: 400;
}
.slide_content h1 {
  font-size: 32px;
}
.slide_content h3 {
  font-size: 20px;
}
.slide_content h1,
.slide_content h3 {
  color: #fff;
  font-weight: 600;
  margin-bottom: 16px;
}
.slide_content button {
  font-size: 16px;
  border: 1px solid #edf5f0;
  border-radius: 6px;
  padding: 3px 4px;
  cursor: pointer;
  background: none;
  font-weight: 400;
  /* margin-bottom: 13px; */
  display: block;
  width: fit-content;
  z-index: 4;
  position: relative;
  display: block;
  color: #fff;
  transition: 0.3s;
}
.slide_content button:hover{
    background: #edf5f0;
    color: #000;
}
.pagination{
    position: absolute;
    bottom: 10px;
    display: flex;
    gap: 10px;
    z-index: 5;
    justify-content: center;
    width: 100%;
}
.padding_span{
    display: block;
    width:36px;
    cursor: pointer;
    height:5px;
    border-radius: 50px;
    background: #F0EBF5;
   
}
.padding_span.active{
    background: #7B61FF;
}
</style>
