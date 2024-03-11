<template>
     <footer class="footer">
      <div class="container">
        <div class="footer_wrap">
          <div class="footer_left">
            <h1>Контакты</h1>
            <div class="footer_left_main">
              <p>пр-т. Мангилик Ел. 55/8, Астана 020000</p>
              <p>8 (7172) 79 97 65</p>
              <p>Работаем с 9:00 до 18:30</p>
            </div>

            <p class="footer_left_bottom">
              astanahub.com © 2020-2024. Все права защищены
            </p>
          </div>
          <div class="footer_center">
            <h1>Партнеры</h1>
            <div class="footer_center_images">
              <img src="../../assets/microsoft.png" alt="" />
              <img src="../../assets/nvidia.png" alt="" />
              <img src="../../assets/google.png" alt="" />
            </div>
          </div>
          <div class="footer_hub_logo">
            <img src="../../assets/logo mid.png" alt="" />
          </div>

          <div class="footer_contacts">
            <div class="footer_contact_line">
              <span>Social</span>
              <img src="../../assets/Twitter.svg" alt="" />
              <img src="../../assets/Instagram.svg" alt="" />
              <img src="../../assets/YouTube.svg" alt="" />
            </div>
            <div class="footer_contant_answer">
              <h1>Остались вопросы?</h1>
              <button>Связаться с нами</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>


<script>
    export default{
        name : "Footer-template"
    }
</script>

<style scoped>
/*FOOTER*/

.footer{
    background: rgba(255, 255, 255, 1);

}

.footer_wrap{
    display: flex;
    padding-top: 43px;
    justify-content: space-between;
    padding-bottom:47px;
}
.footer_left_main{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 18px;
    padding-bottom: 18px;
}
.footer_left_main p{
    font-size: 14px;

}
.footer_center_images{
    display: flex;
    gap: 6px;
}
.footer_center_images img{
    width: 100%;
}
.footer_left_bottom{
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
}
.footer_hub_logo img{
    width: 139px;
    height:131px;
}
.footer_contact_line{
    display: flex;
    align-items: center;
    gap: 32px;
}
.footer_contact_line span{
    font-size: 18px;
    font-weight: 600;
}
.footer_contant_answer{
    padding-top: 22px;
}
.footer_contant_answer h1{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
}
.footer_contant_answer button{
    cursor: pointer;
    background: rgba(240, 245, 241, 1);
    transition: 0.3s;
    border: none;
    border-radius: 6px;
    padding:13px;
    text-align: center;
    width: 100%;
}
.footer_contant_answer button:hover{
    background: rgb(228, 230, 229);
}

@media (max-width: 480px){
   .footer_wrap{
    flex-direction: column;
    padding-bottom: 45%;
   }
   .footer_left{
    margin-bottom: 30px;
   }
   .footer_hub_logo{
    display: none;
   }
}
</style>