<template>
    <div class="third_section">
        <div class="third_section_left">
            <h1>Преимущества платформы</h1>
            <p>Гибкий график обучения, платформа предоставляет гибкие возможности обучения</p>
        </div>
        <div class="third_section_right">
            <div class="third_section_card">
                <div class="third_section_card_text">
                    
                    <svg width="136px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 5H7C5.89543 5 5 5.89543 5 7V16H19V11.5" stroke="#ffffff" stroke-width="0.792" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 4L13 6L15 8" stroke="#ffffff" stroke-width="0.792" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 4L21 6L19 8" stroke="#ffffff" stroke-width="0.792" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V16Z" stroke="#ffffff" stroke-width="0.792" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p>Направления обучения для быстрого входа в IT сферу </p>
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
    margin-bottom: 32px;
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
  