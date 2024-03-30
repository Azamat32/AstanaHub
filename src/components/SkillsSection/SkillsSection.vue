<template>
  <div class="skills_section">
    <div class="skills_section_inner">
      <div class="skill_item">
        <div class="skill_item_title">
          <h1>Freelance School</h1>
        </div>
        <div class="skill_item_wrap">
          <div v-for="(skill, index) in skills.slice(0, visibleSkills)" :key="index" :class="{ 'skill_item_card': true, 'unchecked': !skill.checked }">
            <img src="../../assets/checkDone.svg" alt="" />
            <h4>{{ skill.label }}</h4>
          </div>
        </div>
        <div class="skill_show_more" @click="toggleShowMore">
          <h4>{{ allSkillsShown ? 'Скрыть' : 'Показать Еще' }} <img src="../../assets/arrow_down.svg" alt="" /></h4>
        </div>
      </div>
      <div class="skill_item">
        <div class="skill_item_title">
          <h1>Freelance School</h1>
        </div>
        <div class="skill_item_wrap">
          <div v-for="(skill, index) in skills.slice(0, visibleSkills)" :key="index" :class="{ 'skill_item_card': true, 'unchecked': !skill.checked }">
            <img src="../../assets/checkDone.svg" alt="" />
            <h4>{{ skill.label }}</h4>
          </div>
        </div>
        <div class="skill_show_more" @click="toggleShowMore">
          <h4>{{ allSkillsShown ? 'Скрыть' : 'Показать Еще' }} <img src="../../assets/arrow_down.svg" alt="" /></h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillsSection-template",
  data() {
    return {
      skills: [
        { label: "Создание продающего профиля", checked: true },
        { label: "Понимание условий для прохождения верификации", checked: true },
        { label: "Привлечение внимания заказчика на платформе", checked: true },
        { label: "Понимание психологии заказчика", checked: true },
         { label: "Создание продающего профиля", checked: true },
      
        { label: "Навыки делового общения", checked: false }
      ],
      visibleSkills: 5,
      allSkillsShown: false
    };
  },
  methods: {
    toggleShowMore() {
      if (this.allSkillsShown) {
        this.visibleSkills = 5;
      } else {
        this.visibleSkills = this.skills.length;
      }
      this.allSkillsShown = !this.allSkillsShown;
    }
  }
};
</script>

<style scoped>
.skill_item_title h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 12px;
}
.skill_item{
  margin-bottom: 24px;
}
.skill_item_card {
  display: flex;
  gap: 12px;
  background: #fff;
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 4px;
  align-items: center;
  transition: opacity 0.3s ease; /* Added transition */
}
.skill_item_card h4 {
  font-size: 14px;
  font-weight: 400;
  color: rgba(17, 3, 26, 1);
}
.unchecked{
  position: relative;
}
.unchecked .check_circle {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(176, 115, 224, 1);
  border-radius: 50px;
}
.unchecked h4 {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(157, 104, 175, 1);
}
.unchecked::before{
  content:" ";
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(176, 115, 224, 1);
  border-radius: 50px;
}
.unchecked img{
  display: none;
}
.skill_show_more {
    margin-top: 10px;
    cursor: pointer;
}
.skill_show_more h4 {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(157, 104, 175, 1);
  text-align: left;

}
</style>
