<template>
  <div class="sertificates_section">
    <div class="sertificates_section_inner">
      <div class="sertificates_card">
        <div class="sertificates_card_wrap">
          <div class="sertificates_card_left">
            <img src="../../assets/sertificates.svg" />
            <div class="sertificates_card_text">
              <h1>Startup School</h1>
              <p>10 февраля</p>
            </div>
          </div>
          <div class="sertificates_card_right">
            <img src="../../assets/download.svg" />
          </div>
        </div>
      </div>
      <div class="sertificates_card">
        <div class="sertificates_card_wrap">
          <div class="sertificates_card_left">
            <img src="../../assets/sertificates.svg" />
            <div class="sertificates_card_text">
              <h1>NoCode School</h1>
              <p>10 февраля</p>
            </div>
          </div>
          <div class="sertificates_card_right">
            <img src="../../assets/download.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sertificatesSection-template",
};
</script>

<style scoped>
.sertificates_card {
  background: rgba(255, 255, 255, 1);
  padding: 16px;
  border-radius: 16px;

  border: 1px solid rgba(237, 245, 240, 1);
  margin-bottom: 12px;
}
.sertificates_card_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sertificates_card_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  text-align: left;
}
.sertificates_card_left h1 {
  font-size: 16px;
  font-weight: 400;
}
.sertificates_card_left p {
  color: rgba(157, 104, 175, 1);
  font-size: 14px;
  font-weight: 400;
}
</style>
