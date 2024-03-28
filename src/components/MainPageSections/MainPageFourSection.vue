<template>
  <div class="four_section">
    <div class="four_section_title">
      <h1>Кому подходит?</h1>
    </div>
    <div class="four_section_wrap">
      <div class="four_section_card">
        <div class="four_card_img">
          <img src="../../assets/academy.png" alt="" />
        </div>
        <div class="four_section_overflow"></div>
        <div class="four_card_text">
          <h6>Начинающим</h6>
          <p>Для тех кто хочет войти в IT</p>
        </div>
      </div>
      <div class="four_section_card">
        <div class="four_card_img">
          <img src="../../assets/four2.png" alt="" />
        </div>
        <div class="four_section_overflow"></div>
        <div class="four_card_text">
          <h6>Опытным</h6>
          <p>Для тех кто хочет войти в IT</p>
        </div>
      </div>
      <div class="four_section_card">
        <div class="four_card_img">
          <img src="../../assets/four3.png" alt="" />
        </div>
        <div class="four_section_overflow"></div>
        <div class="four_card_text">
          <h6>Меняющим свою сферу деятельности</h6>
          <p>Новые направления помогающие гибко и быстро влиться в IT</p>
        </div>
      </div>
      <div class="four_section_card">
        <div class="four_card_img">
          <img src="../../assets/four4.png" alt="" />
        </div>
        <div class="four_section_overflow"></div>
        <div class="four_card_text">
          <h6>Школьникам и студентам</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPageFour-template",
  data() {
    return {};
  },
};
</script>

<style scoped>
.four_section{
  margin-bottom: 42px;
}
.four_section_title {
  text-align: center;
  margin-bottom: 42px;
}
.four_section_title h1 {
  font-weight: 700;
  font-size: 32px;
}
.four_section_wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* height: 45vh; */
  gap: 32px;
}
.four_section_card {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  position: relative;
}
.four_card_img {
  width: 100%;
  height: 100%;
  /* position: absolute; */
  z-index: -1;
}
.four_card_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
}
.four_section_overflow {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 52.89%, #000000 91%);

  opacity: 0.3;
  left: 0;
  top: 0;
}
.four_card_text {
  position: absolute;
  z-index: 5;
  color: #fff;
  text-align: center;
  bottom: 10px;
  width: 100%;
  padding: 5px 20px;
}
.four_card_text h6 {
  font-size: 18px;
  font-weight: 600;
}
.four_card_text p {
  font-size: 14px;
  font-weight: 400;
}
@media  (max-width: 780px){
  .four_section_wrap{
    /* height: 70vh; */

    grid-template-columns: 1fr 1fr;
  }
  
}
@media  (max-width: 480px){
  .four_section_wrap{
    grid-template-columns:  1fr;
    /* height: 100vh; */
  }
}
</style>
