<template>
  <div class="profile_page_userInfo">
    <div class="container">
      <div class="profile_page_userInfo_wrap">
        <div class="profile_page_userInfo_left">
          <div class="profile_user_info">
            <div class="profile_user_avatar">
              <img src="../../assets/profile_avatar.png" alt="" />
            </div>
            <div class="profile_user_credentials">
              <h2>
                Алибек Алибеков
                <img src="../../assets/edit.svg" alt="" />
              </h2>
              <p>dolores.chambers@example.com</p>
            </div>
          </div>
          <div class="profile_user_level_info">
            <div class="profile_user_level">
              <img src="../../assets/award_bg.svg" alt="" />
              <span>3</span>
            </div>
            <div class="profile_user_progress">
              <div class="profile_user_progress_numbers">
                <p><span>450</span> / <span>1000</span></p>
              </div>
              <div class="profile_user_progress_line">
                <div class="progress_bar"></div>
              </div>
            </div>
          </div>
          <div class="delimiter"></div>
          <div class="profile_user_awards">
            <div class="profile_user_awards_images">
              <img src="../../assets/award1.svg" alt="" />
              <img src="../../assets/award2.svg" alt="" />
              <img src="../../assets/award3.svg" alt="" />
            </div>
            <div class="profile_user_awards_number">
              <p>+4</p>
            </div>
          </div>
        </div>
        <div class="profile_page_userInfo_right">
          <div class="profile_signOut">
            <button>
              <img src="../../assets/signOut.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileNavbar-template",
};
</script>

<style scoped>
.profile_page_userInfo_wrap{
    display: flex;
    align-items:center;
    justify-content: space-between;
}
.profile_page_userInfo_left {
  display: flex;
  gap: 16px;
  align-items: center;
}
.profile_page_userInfo {
  background: #fff;
  border-top: 1px solid rgba(237, 245, 240, 1);
  padding: 24px;
}
.profile_user_info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.profile_user_avatar {
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: 16px;
}
.profile_user_avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile_user_credentials {
  text-align: left;
  margin-right: 20px;
}
.profile_user_credentials h2 {
  font-size: 18px;
  font-weight: 600;
  color: rgba(3, 26, 10, 1);
  display: flex;
  align-items: center;
  gap: 8px;
}
.profile_user_credentials h2 img {
  cursor: pointer;
}
.profile_user_credentials p {
  font-size: 14px;
  font-weight: 400;
  color: rgba(157, 104, 175, 1);
}
.profile_user_level_info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.profile_user_level {
  position: relative;
  width: 48px;
  height: 48px;
}
.profile_user_level span {
  width: fit-content;
  position: absolute;
  height: fit-content;
  left: -5px;
  right: 0;
  top: -5px;
  bottom: 0;
  margin: auto;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  color: #fff;
}
.profile_user_progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.profile_user_progress_numbers p {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(157, 104, 175, 1);
}
.profile_user_progress_line {
  width: 72px;
  height: 2px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(237, 245, 240, 1);
}
.progress_bar {
  background: rgba(151, 71, 255, 1);
  width: 30%;
  height: 2px;
  position: relative;
  z-index: 10;
}
.delimiter {
  display: block;
  height: 48px;
  width: 1px;
  background: rgba(237, 245, 240, 1);
}
.profile_user_awards {
  display: flex;
  gap: 8px;
  align-items: center;
}
.profile_user_awards_images {
  display: flex;
  gap: 8px;
}
.profile_user_awards_number p {
  font-size: 12px;
  font-weight: 400;
  color: rgba(157, 104, 175, 1);
  cursor: pointer;
}
.profile_signOut button {
  background: rgba(242, 240, 245, 1);
    border: none;
  padding: 16px;
  cursor: pointer;
  border-radius: 16px;
}
</style>
