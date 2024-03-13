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

        <div class="footer_hub_logo">
          <img class="footer_logo" src="../../assets/logo mid.png" alt="" />
          <div class="footer_center">
            <h1>Партнеры</h1>
            <div class="footer_center_images">
              <img src="../../assets/microsoft.svg" alt="" />
              <img src="../../assets/nvidia.svg" alt="" />
              <img src="../../assets/google.svg" alt="" />
            </div>
          </div>
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
export default {
  name: "Footer-template",
};
</script>

<style scoped>
/*FOOTER*/

.footer {
  background: rgba(255, 255, 255, 1);
}

.footer_wrap {
  display: flex;
  padding-top: 43px;
  justify-content: space-between;
  padding-bottom: 47px;
  align-items: center;
}
.footer_center {
  margin-bottom: 18px;
  text-align: center;
}
.footer_center h1 , .footer_left h1{
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-weight: 700;
}
.footer_left_main {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 18px;
  padding-bottom: 18px;
}
.footer_left_main p {
  font-size: 14px;
}
.footer_center_images {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
}
.footer_center_images img {
  width: 32%;
}

.footer_left_bottom {
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  font-weight: 400;
}
.footer_hub_logo{
  text-align: center;
}
.footer_logo {
  width: 139px;
  height: 131px;
}
.footer_contacts{
  text-align: center;
}
.footer_contact_line {
  display: flex;
  align-items: center;
  gap: 13px;
}
.footer_contact_line span {
  font-size: 18px;
  font-weight: 600;
}
.footer_contant_answer {
  padding-top: 16px;
}
.footer_contant_answer h1 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}
.footer_contant_answer button {
  cursor: pointer;
  background: rgba(240, 245, 241, 1);
  transition: 0.3s;
  border: none;
  border-radius: 6px;
  padding: 13px;
  text-align: center;
  width: 100%;
}
.footer_contant_answer button:hover {
  background: rgb(228, 230, 229);
}

@media (max-width: 780px) {
  .footer_wrap {
    flex-direction: column;
    padding-bottom: 45%;
    text-align: center;
  }
  .footer_left {
    margin-bottom: 30px;
  }
  .footer_hub_logo , .footer_center {
    
  }
  .footer_center_images{
    justify-content: center;
    
  }
  .footer_center_images img{
    width: 80%;
  }
 
}
</style>
