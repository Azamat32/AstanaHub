<template>
  <section class="sale">
    <div class="container">
      <div class="sale__body">
        <div class="sale__left">
          <h3>
            <span>Акция!</span> Очень интересное ограниченное предложение.
          </h3>
        </div>
        <div class="sale__right">
          <div class="sale__right_time">
            <p>осталось</p>
            <h4>15:48:38</h4>
          </div>
          <div class="sale__right_button">
            <a href="#!">Перейти</a>
          </div>
        </div>
        <div class="sale__close">
          <a href="#!"
            ><svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3535 0.878996C12.1554 0.883673 11.9672 0.966526 11.83 1.10946L7.00001 5.93945L2.03909 0.978559C1.96918 0.906566 1.88554 0.849333 1.79311 0.810249C1.70068 0.771165 1.60136 0.751024 1.501 0.75102C1.35174 0.751057 1.20589 0.795624 1.0821 0.879021C0.958309 0.962417 0.862216 1.08085 0.806113 1.21917C0.750011 1.35748 0.736451 1.50939 0.767168 1.65546C0.797885 1.80152 0.871483 1.9351 0.978544 2.03911L5.93946 7L0.972895 11.9665C0.900917 12.0356 0.843451 12.1184 0.803863 12.21C0.764276 12.3016 0.743363 12.4002 0.742348 12.4999C0.741334 12.5997 0.760239 12.6987 0.797955 12.7911C0.835672 12.8835 0.891443 12.9674 0.962001 13.038C1.03256 13.1085 1.11649 13.1643 1.20887 13.202C1.30125 13.2397 1.40023 13.2586 1.50001 13.2576C1.59979 13.2566 1.69836 13.2357 1.78996 13.1961C1.88156 13.1565 1.96433 13.099 2.03344 13.0271L7.00001 8.06054L12.2446 13.045C12.3137 13.1169 12.3965 13.1744 12.4881 13.214C12.5797 13.2536 12.6783 13.2745 12.7781 13.2755C12.8778 13.2765 12.9768 13.2576 13.0692 13.2199C13.1616 13.1822 13.2455 13.1264 13.3161 13.0558C13.3866 12.9853 13.4424 12.9014 13.4801 12.809C13.5178 12.7166 13.5367 12.6176 13.5357 12.5178C13.5347 12.4181 13.5138 12.3195 13.4742 12.2279C13.4346 12.1363 13.3771 12.0535 13.3052 11.9844L8.06056 7L12.8906 2.17001C12.9996 2.06533 13.0745 1.93014 13.1054 1.78216C13.1363 1.63418 13.1218 1.48032 13.0637 1.34074C13.0056 1.20117 12.9068 1.0824 12.78 1C12.6533 0.917603 12.5046 0.875425 12.3535 0.878996Z"
                fill="#7D7C5E"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "sales-template",
};
</script>
<style scoped>
.sale {
  padding: 10px 0;
  background: #F6DFB3;
}

.sale__body {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.sale__left h3 {
  font-weight: 400;
  font-size: 18px;
}
.sale__left h3 span {
  font-weight: 700;
}

.sale__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.sale__right_time {
  margin-right: 20px;
  text-align: center;
}
.sale__right_time p {
  color: #7d7c5e;
  font-size: 14px;
  font-weight: 400;
}
.sale__right_time h4 {
  color: #031a0a;
  font-weight: 700;
}

.sale__right_button a {
  text-decoration: none;
  background: #fafafa;
  padding: 10px 14px;
  border-radius: 12px;
  color: #031a0a;
}
.sale__right_button a:hover {
  background: #e7e7e7;
}

.sale__close {
  position: absolute;
  right: -50px;
  top: 0px;
  padding: 12px 12px 8px 12px;
}
.sale__close:hover {
  background: #e7e7e7;
  border-radius: 12px;
}
@media (max-width: 1180px){
  .sale__right{
    padding-right: 40px;
  }
  .sale__close{
    right:0;
  }
}
@media (max-width: 480px){
    .sale__body{
        text-align: center;
        flex-wrap:wrap ;
        justify-content: center;
    }
    .sale__left h3{
        font-size: 14px;
        max-width: 220px;
    }
    .sale__close{
        right: -15px;
        top: -11px;
    }
}
</style>
