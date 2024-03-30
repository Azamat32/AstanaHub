<template>
  <div class="courses_section">
    <div class="courses_section_inner">
      <div class="courses_top">
        <CoursesCard></CoursesCard>
        <CoursesCard></CoursesCard>
        <CoursesCard></CoursesCard>
      </div>
      <div class="courses_bottom">
        <div class="courses_bottom_inner">
          <div class="courses_bottom_left">
            <h1>Приведи друга получи скидку</h1>
            <button>Прими участие в акции</button>
          </div>
          <div class="courses_bottom_center">
            <img src="../../assets/bear2.svg" alt="">
          </div>
          <div class="courses_bottom_right">
            <p>edu.astanahub.com/invitecode</p>
            <button>Скопировать ссылку <img src="../../assets/screpka.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CoursesCard from "./CoursesCard.vue";
export default {
  name: "CoursesSection-template",
  components: {
    CoursesCard,
  },
};
</script>

<style scoped>
.courses_top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 31px;
}
.courses_bottom_left{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 33%;
}
.courses_bottom_center{
    position: relative;
    width: 33%;
}
.courses_bottom_center img{
}
.courses_bottom_inner {
  background: linear-gradient(103.57deg, #9747ff 9.31%, #7a6af4 100%);
  display: flex;
  align-items: center;
  padding: 23px 33px 23px 33px;
  border-radius: 6px;
  justify-content: space-between;
}
.courses_bottom_inner h1{
font-size: 28px;
font-weight: 800;
text-align: center;
margin-bottom: 9px;
color: #fff;
}
.courses_bottom_inner button{
padding: 11px 24px;
border-radius: 6px 0px 0px 0px;
background: rgba(232, 245, 233, 1);
font-size: 16px;
font-weight: 600;
text-align: center;
color: rgba(17, 3, 26, 1);
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
border: none;
text-wrap: nowrap   ;
gap: 4px;
}
.courses_bottom_right p{
    margin-bottom: 9px;
    color: #fff;
    
}

@media (max-width:900px){
.courses_top{
  grid-template-columns: 1fr 1fr;

}
}
@media (max-width:780px){
.courses_top{
  grid-template-columns:  1fr;

}
.courses_bottom_inner{
  flex-direction: column;
}
.courses_bottom_left, .courses_bottom_center{
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}
}
</style>
