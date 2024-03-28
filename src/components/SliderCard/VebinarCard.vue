<template>
    <div class="vebinars_item" ref="vebinarItem">
        <div class="vebinars_item_text">
          <h1>{{ item.title }} </h1>
        </div>
        <div class="vebinars_item_button">
          <button class="vebinars_register_btn" @click="handleClick">Подробнее</button>
        </div>
      </div>
</template>

<script>
    export default {
  name: "VebinarCard-template",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  
  
  
  methods: {
    handleClick() {
      this.$emit("vebinerCard-clicked", this.item); 
    },
    
  },
};
</script>

<style>

.vebinars_item {
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: 0.4s;
  background: linear-gradient(103.57deg, #9747ff 9.31%, #7a6af4 100%);
  user-select: none;
}
.vebinars_item_text_category {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 13px;
}
.vebinars_item_text_category span {
}
.vebinars_item:hover .vebinars_item_hover_text {
  bottom: 0;
  z-index: 2;
  height: 100%;
}
.vebinars_banner_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: #000;
  opacity: 0.3;
}
.vebinars_item_banner {
  position: absolute;
  width: 100%;
  height: 100%;
}
.vebinars_item_banner img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.vebinars_item_text {
  color: rgba(255, 255, 255, 1);
  padding: 15px 12px;
  position: relative;
    padding-top: 60px;
    padding-bottom: 56px;
}
.vebinars_item_text span {
  font-size: 12px;
  border: 1px solid rgba(237, 245, 240, 1);
  border-radius: 6px;
  padding: 3px 4px;
  /* margin-bottom: 13px; */
  display: block;
  width: fit-content;
  z-index: 4;
  position: relative;
  display: block;
}
.vebinars_item_text h2 {
  font-weight: 600;
  font-size: 16px;
  z-index: 2;
  margin-bottom: 55px;
  position: relative;
}
.vebinars_item_text h1 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 25px;
  z-index: 4;
  word-wrap: break-word;
  position: relative;
}
.vebinars_item_button {
  padding: 15px 14px;
  justify-content: start;
  display: flex;
  align-items: center;
  gap: 13px;
  position: absolute;
  bottom: -5px;
  width: 100%;
  z-index: 4;
  background: linear-gradient(103.57deg, #9747FF 9.31%, #7A6AF4 100%);


}

.vebinars_register_btn {
  background: #f0ebf5;
  border: 1px solid #7b61ff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #11031A;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
}
.vebinars_register_btn:hover {
  border: 1px solid rgba(237, 245, 240, 1);
  background: rgb(105, 75, 255);
  color: #fff;
}
.vebinars_item_button .btn:hover {
  background: rgb(105, 75, 255);
}
.vebinars_item_button .btn {
  border: 1px solid rgba(237, 245, 240, 1);
  background: none;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 10px 2px;
  cursor: pointer;
  transition: 0.4s;
}
</style>