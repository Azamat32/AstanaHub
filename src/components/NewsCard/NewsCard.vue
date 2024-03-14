<template>
  <div class="news_card">
    <div class="news_card_inner">
      <div class="news_card_text">
        <p>{{ item.description }}</p>
      </div>
      <div class="news_card_img">
        <img src="../../assets/test.jpg" alt="news_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsCard-template",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.news_card {
  background: rgba(239, 239, 239, 1);
  border-radius: 16px;
  padding: 15px 9px;
  margin-bottom: 16px;
}
.news_card_text {
    margin-bottom: 22px;
}
.news_card_text p {
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 12px;
}
.news_card_img {
  height: 10vh;
  width: 100%;
}
.news_card_img img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
@media (max-width: 1285px) {


.news_card_img {
  height: 30vh;
  width: 100%;
}

}
</style>
