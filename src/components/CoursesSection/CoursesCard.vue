<template>
  <div class="courses_card">
    <div class="courses_card">
      <div class="courses_card_top">
        <div class="courses_top_left">
          <span> Предпринимательство </span>
          <h1>Freelance School</h1>
        </div>
        <div class="courses_top_right">
          <span>
            <img src="../../assets/link.svg" alt="" />
          </span>
          <span><img src="../../assets/star.svg" alt="" /></span>
        </div>
      </div>
      <div class="courses_card_bottom">
        <div class="courses_card_progress_line">
          <div class="progress_bar"></div>
        </div>
        <p>30% материала пройдено</p>
        <div class="bottom_btn">
          <button>Продолжить обучение</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CoursesCard-template",
};
</script>

<style scoped>
.courses_card {
  background: linear-gradient(103.57deg, #9747ff 9.31%, #7a6af4 100%);
  border-radius: 12px;
}
.courses_card_top {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  align-items: center;
  padding: 16px 16px 32px 16px;
}
.courses_top_left span {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  border: 1px solid rgba(237, 245, 240, 1);
  padding: 4px 8px 4px 8px;
  border-radius: 6px;
  margin-bottom: 16px;
}
.courses_top_left h1 {
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
}
.courses_top_right span {
  width: 32px;
  height: 32px;
  padding: 16px 16px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.courses_card_progress_line {
  width: 100%;
  height: 3px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(226, 223, 235, 1);
  margin-bottom: 18px;
}
.progress_bar {
  background: rgba(151, 71, 255, 1);
  width: 30%;
  height: 3px;
  position: relative;
  z-index: 10;
}
.courses_card_bottom {
  background: #fff;
  padding: 16px 12px 12px 12px;
  text-align: center;
}
.courses_card_bottom p {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
}
.courses_card_bottom button {
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 13px;
  border: none;
  background: rgba(151, 71, 255, 1);
  cursor: pointer;
  width: 100%;
  transition: 0.4s;
}
.courses_card_bottom button:hover{
  background: rgb(127, 30, 254);

}
</style>
