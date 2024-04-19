<template>
    <div class="third_section">
        <div class="third_section_left">
            <h1>Преимущества платформы</h1>
            <p>Гибкий график обучения, платформа предоставляет гибкие возможности обучения</p>
        </div>
        <div class="third_section_right">
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path fill="#ffff" d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 35 C 2 36.644531 3.355469 38 5 38 L 19 38 L 19 40 L 10 40 C 9.96875 40 9.9375 40 9.90625 40 C 9.636719 40.027344 9.386719 40.160156 9.21875 40.375 L 4.21875 46.375 C 3.976563 46.675781 3.929688 47.085938 4.097656 47.433594 C 4.265625 47.78125 4.617188 48 5 48 L 45 48 C 45.382813 48 45.734375 47.78125 45.902344 47.433594 C 46.070313 47.085938 46.023438 46.675781 45.78125 46.375 L 40.78125 40.375 C 40.589844 40.136719 40.304688 40 40 40 L 31 40 L 31 38 L 45 38 C 46.644531 38 48 36.644531 48 35 L 48 5 C 48 3.355469 46.644531 2 45 2 Z M 5 4 L 45 4 C 45.554688 4 46 4.445313 46 5 L 46 35 C 46 35.554688 45.554688 36 45 36 L 5 36 C 4.445313 36 4 35.554688 4 35 L 4 5 C 4 4.445313 4.445313 4 5 4 Z M 6 6 L 6 34 L 44 34 L 44 6 Z M 8 8 L 42 8 L 42 32 L 8 32 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 21 38 L 29 38 L 29 42 L 21 42 Z M 10.46875 42 L 19 42 L 19 44 L 31 44 L 31 42 L 39.53125 42 L 42.875 46 L 7.125 46 Z"></path>
</svg>                    <p>Направления обучения для быстрого входа в IT сферу </p>
                </div>
            </div>
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <img src="../../assets/brain.svg" alt="">
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
    align-items:center;
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
  