<template>
    <div class="third_section">
        <div class="third_section_left">
            <h1>Преимущества платформы</h1>
            <p>Гибкий график обучения, платформа предоставляет гибкие возможности обучения</p>
        </div>
        <div class="third_section_right">
            <div class="third_section_card">
                <div class="third_section_card_text">
                    <svg width="100px" height="100px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>computer-code</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <g> <path d="M7,34H41a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V32A2,2,0,0,0,7,34ZM39,10V30H9V10"></path> <path d="M44,38H4a2,2,0,0,0,0,4H44a2,2,0,0,0,0-4Z"></path> <path d="M29.5,12.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L31.2,20l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l5.9-6a1.9,1.9,0,0,0,0-2.8Z"></path> <path d="M21.2,12.4a2.1,2.1,0,0,0-2.7.2l-5.9,6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L16.8,20l4.6-4.6A1.9,1.9,0,0,0,21.2,12.4Z"></path> </g> </g> </g> </g></svg>
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
  