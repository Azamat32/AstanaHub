<template>
  <div class="award_section">
    <div class="award_section_inner">
        <AwardCard
                v-for="(item, index) in awardCard"
                :key="index"
                :item="item"
              />
    </div>
  </div>
</template>

<script>
import AwardCard from './AwardCard.vue';
export default {
  name: "awardSection-template",
  components:{
    AwardCard
  },
  data() {
    return {
      awardCard: [
        { title: "Startup School", date: "1 поток • 09.03.21" },
        { title: "Beta Career", date: "1 поток • 09.03.21" },
        { title: "Freelance School", date: "1 поток • 09.03.21" },
        { title: "Первое задание", date: "14.01.22" },
        { title: "5 уроков", date: "09.03.21" },
      ],
    };
  },
};
</script>

<style scoped>
.award_section_inner{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:11px;
}
</style>
