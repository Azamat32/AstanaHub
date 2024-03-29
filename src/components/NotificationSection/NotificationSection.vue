<template>
  <div class="notification_section">
    <div class="notification_section_inner">
      <div class="notificaiton_section_card">
        <h1>Задание проверено, урок: “Обучение на платформе Webflow”</h1>
        <p>2 часа назад</p>
      </div>
      <div class="notification_section_delimiter">
        <div class="line"></div>
        <p>просмотренные уведомления</p>
        <div class="line"></div>
      </div>
      <div class="notificaiton_section_card">
        <h1>Задание проверено, урок: “Обучение на платформе Webflow”</h1>
        <p>2 часа назад</p>
      </div>
      <div class="notificaiton_section_card">
        <h1>Задание проверено, урок: “Обучение на платформе Webflow”</h1>
        <p>2 часа назад</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "notificationSection-template",
};
</script>

<style scoped>
.notificaiton_section_card {
  border: 1px solid rgba(237, 245, 240, 1);
  background: rgba(255, 255, 255, 1);
  width: Fill (688px) px;
  padding: 16px 24px 16px 24px;
  border-radius: 16px;
  margin-bottom: 12px;
}
.notificaiton_section_card {
  text-align: left;
}
.notificaiton_section_card h1 {
  font-size: 16px;
  font-weight: 400;
  color: rgba(17, 3, 26, 1);
}
.notificaiton_section_card p {
  font-size: 14px;
  font-weight: 400;
  color: rgba(157, 104, 175, 1);
}
.notification_section_delimiter {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;

}
.notification_section_delimiter p {
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  color: rgba(157, 104, 175, 1);
}
.line {
  background: rgba(237, 245, 240, 1);
  height: 1px;
  width: 33%;
}
</style>
