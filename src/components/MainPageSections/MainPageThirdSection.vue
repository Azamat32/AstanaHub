<template>
    <div class="third_section">
        <div class="third_section_left">
            <h1>Преимущества платформы</h1>
            <p>Гибкий график обучения, платформа предоставляет гибкие возможности обучения</p>
        </div>
        <div class="third_section_right">
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <img src="../../assets/user_code.svg" alt="">
                    <p>Направления обучения для быстрого входа в IT сферу </p>
                </div>
            </div>
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <img src="../../assets/third_section_cloud.svg" alt="">
                    <p>Обучайся когда и где угодно </p>
                </div>
            </div>
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <img src="../../assets/third_section_mentor.svg" alt="">
                    <p>Учись от экспертов с большим опытом </p>
                </div>
            </div>
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <img src="../../assets/third_section_brain.svg" alt="">
                    <p>Удобная платформа </p>
                </div>
            </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "MainPageThird-template",
    data() {
      return {
      
      };
    },
  };
  </script>
  
  <style scoped>
.third_section{
    display:flex;
    gap: 32px;
    margin-bottom: 42px;
}
.third_section_left{
    text-align:left;
}
.third_section_left h1{
    font-size: 32px;
    font-weight: 700;
    margin-bottom:16px;
}
.third_section_left p{
    font-size: 18px;
    font-weight: 600;
}
.third_section_right{
    display: grid;
    grid-template-columns: 1fr  1fr;
    gap: 16px;
}
.third_section_card{
    background: linear-gradient(90deg, #9747FF 0%, #7B43FC 49.5%, #563CF4 99.99%);
    padding: 11px;
    position: relative;
    border-radius:12px;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
}
.third_section_card:hover .third_section_card_text{
    transform: translate(10px , -10px);
}
.third_section_card_text{
    display:flex;
    gap: 16px;
    align-items:flex-start;
    padding: 40px 11px;
    transform: translate(0px , 0px);

    transition: 0.4s;
}
.third_section_card_text p{
    color: #fff;
    font-weight:600;
    font-size: 15px
}
@media  (max-width: 980px){
.third_section{
    flex-direction: column;
}

}
@media  (max-width: 480px){
.third_section_right{
    grid-template-columns:  1fr;

}
}
  </style>
  