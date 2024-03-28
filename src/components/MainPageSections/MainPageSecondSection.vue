<template>
  <div class="second_section">
    <div class="second_sectin_title">
      <h1>О платформе</h1>
      <p>
        LMS платформа - Образовательная платформа Астана Хаб предоставляет
        доступ к разнообразным образовательным программам и курсам в области
        информационных технологий (IT) и технологического предпринимательства.
      </p>
    </div>
    <div class="second_section_video">
        <iframe :src="videoSrc" width="100%" height="487" :title="videoTitle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPageSecond-template",
  data() {
    return {
      videoSrc: "https://www.youtube.com/embed/DR9J-RIzPvk",
      videoTitle: "Обзор на Astana Hub. Как попасть в Кремниевую долину"
    };
  },
};
</script>

<style scoped>
.second_section{
    margin-bottom:42px;
}
.second_sectin_title{
    display:flex;
    justify-content:space-between;
    margin-bottom:42px;
    gap: 106px;
    align-items:center;
}
.second_sectin_title h1{
    width: 25%;
    font-size: 32px;
    font-weight:700;

}
.second_sectin_title p {
    width: 80%;
    font-size: 18px;
    font-weight:600;
}

@media  (max-width: 780px){

}
@media  (max-width: 480px){
  .second_sectin_title{
    flex-direction: column;
    display: flex;
    gap: 42px;
  }
  .second_sectin_title h1{
    width: 100%;
  }
  .second_sectin_title p{
    width: 100%;
  }
}
</style>
