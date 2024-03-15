<template>
  <div :class="{ modal: true, active: isActive }">
    <div class="modal_inner">
      <div class="modal_video">
        <video ref="videoPlayer" width="100%" controls>
          <source :src="item.videoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button>
          <img src="../../assets/Play.svg" alt="Pause" />
        </button>
      </div>
      <div class="modal_text">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <button>Перейти на урок</button>
      </div>
      <div class="close" @click="closeActiveModal">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3535 0.878996C12.1554 0.883673 11.9672 0.966526 11.83 1.10946L7.00001 5.93945L2.03909 0.978559C1.96918 0.906566 1.88554 0.849333 1.79311 0.810249C1.70068 0.771165 1.60136 0.751024 1.501 0.75102C1.35174 0.751057 1.20589 0.795624 1.0821 0.879021C0.958309 0.962417 0.862216 1.08085 0.806113 1.21917C0.750011 1.35748 0.736451 1.50939 0.767168 1.65546C0.797885 1.80152 0.871483 1.9351 0.978544 2.03911L5.93946 7L0.972895 11.9665C0.900917 12.0356 0.843451 12.1184 0.803863 12.21C0.764276 12.3016 0.743363 12.4002 0.742348 12.4999C0.741334 12.5997 0.760239 12.6987 0.797955 12.7911C0.835672 12.8835 0.891443 12.9674 0.962001 13.038C1.03256 13.1085 1.11649 13.1643 1.20887 13.202C1.30125 13.2397 1.40023 13.2586 1.50001 13.2576C1.59979 13.2566 1.69836 13.2357 1.78996 13.1961C1.88156 13.1565 1.96433 13.099 2.03344 13.0271L7.00001 8.06054L12.2446 13.045C12.3137 13.1169 12.3965 13.1744 12.4881 13.214C12.5797 13.2536 12.6783 13.2745 12.7781 13.2755C12.8778 13.2765 12.9768 13.2576 13.0692 13.2199C13.1616 13.1822 13.2455 13.1264 13.3161 13.0558C13.3866 12.9853 13.4424 12.9014 13.4801 12.809C13.5178 12.7166 13.5367 12.6176 13.5357 12.5178C13.5347 12.4181 13.5138 12.3195 13.4742 12.2279C13.4346 12.1363 13.3771 12.0535 13.3052 11.9844L8.06056 7L12.8906 2.17001C12.9996 2.06533 13.0745 1.93014 13.1054 1.78216C13.1363 1.63418 13.1218 1.48032 13.0637 1.34074C13.0056 1.20117 12.9068 1.0824 12.78 1C12.6533 0.917603 12.5046 0.875425 12.3535 0.878996Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVideo-template",
  props: {
    item: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
   
    activateModalWithDelay() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit("transition-started");
          this.$emit("activate-modal");
        });
      }, 100);
    },
    closeActiveModal() {
      this.$emit("close"); // Emitting a close event to the parent component
    },

  },
  computed: {
    isActive() {
      if(this.active){
        this.activateModalWithDelay();

      }
      return this.active;
    },
  },
};
</script>

<style scoped>
.close{
    width: 40px;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -60px;
    top: 0;
    cursor: pointer;
    background: #7b61ff;
    padding: 15px;
}
.modal {
  background-color:rgba(0, 0, 0, 0.5);
  transition: 0.4s;
  position: fixed;
  height: 0%;
  z-index: 5;
  bottom: -100%;
  transition: bottom 0.4s ease, height 0.4s ease;
  animation: modalShow 0.4s ease forwards;

}
.modal.active {
  overflow: hidden;
  width: 100%;
  left: 0;
  bottom: 0%;
  height: 100%;
  transition: 0.4s;
}
.modal_video {
  position: relative;
}
.modal_video video {
  border-radius: 16px;
}
.modal_video button {
  width: 96px;
  height: 96px;
  background: #000000b2;

  border-radius: 999px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  left: 50%;
}

.modal_inner {
  margin: 150px auto;
  max-width: 700px;
  transition: 0.4s;
  background: #fff;
  padding: 16px 24px;
  border-radius: 16px;
  position: relative;
}
.modal_inner h2 {
  color: #031a0a;
  font-size: 24px;
  font-family: 700;
  margin-bottom: 12px;
}
.modal_inner p {
  color: #849b8b;
  font-size: 14px;
  font-family: 400;
  margin-bottom: 12px;
}
.modal_text button {
  background: #7b61ff;
  text-align: center;
  padding: 20px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-family: 600;
  border: none;
  transition: 0.2s;
}
.modal_text button:hover {
  background: #7053ff;
}
@media (max-width: 780px) {
  .close[data-v-47db75aa] {
    width: 40px;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: -48px;
    cursor: pointer;
    background: #7b61ff;
    padding: 15px;
   
}
.modal{
      padding: 14px;
    }
}
@keyframes modalShow {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>
