<template>
  <div>
    <div class="container">
      <div class="main_content_wrap">
        <div class="main_content_wrap_right">
          <div data-v-c0b4bafc="" class="main_welcome" style="
                
                margin-bottom: 20px;
              ">
            <div
              data-v-c0b4bafc=""
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
              "
            >
              <div
                data-v-c0b4bafc=""
                class="button"
                style="
                  width: auto;
                  color: #000;
                  background: #fff;
                  border-radius: 10px;
                  padding: 10px 40px;
                  cursor: pointer !important;
                "
              >
                Войти
              </div>
            </div>
            <!---->
          </div>
          <div class="main_content_sections">
            <MainPageFirstSection></MainPageFirstSection>
            <MainPageSecondSection></MainPageSecondSection>
            <MainPageThirdSection></MainPageThirdSection>
            <MainPageFourSection></MainPageFourSection>
          </div>

          <Slider></Slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import MainPageFirstSection from "../components/MainPageSections/MainPageFirstSection.vue";
import MainPageSecondSection from "../components/MainPageSections/MainPageSecondSection.vue";
import MainPageThirdSection from "../components/MainPageSections/MainPageThirdSection.vue";
import MainPageFourSection from "../components/MainPageSections/MainPageFourSection.vue";

export default {
  name: "MainPage",

  components: {
    Slider,
    MainPageFirstSection,
    MainPageSecondSection,
    MainPageThirdSection,
    MainPageFourSection,
  },

  methods: {
    changeSlider(slider) {
      this.$emit("update:activeSlider", slider);
    },
  },
};
</script>

<style>
.main_content_wrap {
  display: flex;
  gap: 14px;
}

.main_content_wrap_right {
  width: 100%;
}
.main_welcome {
  background: linear-gradient(90deg, #9747ff 0%, #7b43fc 49.5%, #563cf4 99.99%);
  text-align: center;
  border-radius: 12px;
  padding: 32px;
}
.main_welcome button {
  background: #fff;
  color: #031a0a;
}
.main_welcome h1 {
  color: rgba(250, 250, 250, 1);
  font-weight: 700;
  font-size: 24px;
}

.main_wrap {
  display: flex;
  gap: 32px;
}
.main_left {
  width: 15%;
  /* transform: scale(1)  */
}
.main_tab_content {
  width: 73%;
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

.menu_list button.active svg path {
  fill: rgba(123, 97, 255, 1);
}

.main_content_center {
  padding-top: 12px;
  display: flex;
  gap: 50px;
  padding-bottom: 80px;
  position: relative;
  flex-wrap: wrap;
}

.main_content_center_tab {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.main_content_center_tab button {
  background: none;
  border: none;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #11031a;
  color: #11031a;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  transition: 0.4s;
}
.main_content_center_tab button:hover {
  background: rgba(123, 97, 255, 1);
}
.main_content_center_tab button.active {
  background: rgba(123, 97, 255, 1);
  border: none;
  color: #fff;
}
.main_content_slider {
  position: relative;
}
.main_content_slider_wrap_inner {
  padding-top: 32px;
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.main_content_right {
  width: 22%;
}
.form_input {
  display: flex;
  align-items: center;
  gap: 13px;
}
.form_input_text {
  position: relative;
}
.form_input_text {
  width: 100%;
}
.form_input_text input {
  width: 100%;
  border-radius: 6px;
}
.form_input_text img {
  position: absolute;
  left: 5px;
  top: 10px;
}
.form_input_text input {
  border-radius: 6px;
  text-indent: 25px;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
}
.form_input button {
  background: #50d177;
  border: none;
  width: 41px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
}
.form_input {
  margin-bottom: 12px;
}
.form_title {
  margin-bottom: 12px;
  display: block;
}
.form_input_select {
  position: relative;
  width: 100%;
  cursor: pointer;
}
.form_input_select input {
  border-radius: 6px;
  /* padding: 10px 12px; */
  /* width: 100%; */
  border-radius: 6px;
  border: none;
}
.form_input_select input::placeholder {
  color: rgba(132, 155, 139, 1);
}
.vs__clear {
  display: none;
}
.form_check {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}
.form_check img {
  display: none;
}
.form_check_input {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: 1px solid #abc0b1;
  border-radius: 8px;
  transition: 0.2s;
}
.form_check_input.active {
  background: #7a6af4;
}
.form_check_input.active img {
  display: block;
}
.range {
  color: #849b8b;
  font-size: 14px;
  margin-bottom: 12px;
}
.range_input {
  text-align: center;
  padding: 12px;
  background: #fff;
  border-radius: 6px;
  position: relative;
}
.range_number {
  color: rgba(132, 155, 139, 1);
}
.range_input img {
  padding: 5px;
}
.range_input .minus {
  left: 5px;
  top: 15px;
  cursor: pointer;
  position: absolute;
}
.range_input .plus {
  top: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
}
.content_right_news_title {
  margin-bottom: 16px;
}
.content_right_news_title h3 {
  font-size: 24px;
  font-weight: 700;
  color: rgba(3, 26, 10, 1);
}
.slider_pagination {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  gap: 6px;
}
.slider_pagination_wrap {
  user-select: none;

  display: flex;
  align-items: center;
  gap: 6px;
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -100px;
}
.slider_pagination_left,
.slider_pagination_right {
  background-color: #f0f5f1;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  color: #031a0a;
}
.slider_pagination_left:hover,
.slider_pagination_right:hover {
  background-color: rgba(123, 97, 255, 1);
}
.slider_pagination span {
  background-color: #f0f5f1;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  color: #031a0a;
  transition: 0.3s;
}
.slider_pagination span:hover {
  background-color: rgba(123, 97, 255, 1);
  color: #fff;
}
.slider_pagination span.active {
  background-color: rgba(123, 97, 255, 1);
  color: #fff;
}
.mobile_image_banner {
  display: none;
}
.mobile_image_banner img {
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
}
.mobile_filter {
  display: none;
}
@media (max-width: 900px) {
  .main_content_slider_wrap_inner {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1285px) {
  .main_content_center {
    flex-direction: column-reverse;
  }
  .main_content_right_news {
    margin-top: 100px;
  }
  .content_right_news_wrap {
    grid-template-columns: 1fr 1fr;
    display: grid;
    flex-wrap: wrap;
    gap: 16px;
  }
  .main_left {
    width: 20%;
    margin-right: 80px;
  }
  .menu_list {
    width: 20%;
  }
  .main_content_wrap_right {
    width: 100%;
  }
  .main_tab_content {
    width: 100%;
  }
  .mobile_filter {
    display: block;
    width: 100%;
  }
  .form_input_text {
    width: 100%;
  }
  .form_input_text input {
    width: 100%;
    border-radius: 6px;
  }

  .big_display {
    display: block;
    width: 100%;
  }
}
@media (max-width: 780px) {
  .main_content_wrap_right {
    width: 100%;
  }
  .main_left {
    display: none;
  }
}
@media (max-width: 480px) {
  .content_right_news_wrap {
    grid-template-columns: 1fr;
    display: grid;
    flex-wrap: wrap;
    gap: 16px;
  }

  .main_content_slider_wrap_inner {
    grid-template-columns: 1fr;
  }
  .mobile_image_banner {
    display: block;
  }
  .mobile_slider_item {
    display: block;
  }
}
</style>
