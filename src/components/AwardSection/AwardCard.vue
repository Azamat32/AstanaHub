<template>
  <div class="award_card">
    <div class="award_card_image">
      <img src="../../assets/award5.png" alt="" />
    </div>
    <div class="award_text">
      <h1>{{ item.title }}</h1>
      <p>{{ item.date }}</p>
    </div>
  </div>
</template>

<script>
// import award from "../../assets/award5.svg"
export default {
  name: "awardCard-template",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.award_card_image {
  width: 100px;
  height: 100px;
  margin-bottom:4px;
}
.award_card_image img {
  width: 100%;
  height: 100;
  object-fit: cover;
}

.award_card {
  padding: 12px;
  border-radius: 16px;
  border: 1px solid rgba(237, 245, 240, 1);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.award_text {
  text-align: center;
}
.award_text h1 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom:4px;

}
.award_text p {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(157, 104, 175, 1);
}
</style>
