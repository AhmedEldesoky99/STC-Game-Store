<template>
  <div class="cards-container">
    <div class="cards-container__header">
      <h2>Most Recommendation</h2>
      <p @click="seeMoreHandler" class="seeMore">SEE ALL</p>
    </div>
    <div class="cards-container__row">
      <gameCard v-for="item of localData" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import gameCard from "./card.vue";
export default {
  name: "cardsContainer",
  components: {
    gameCard,
  },
  props: ["data", "title"],

  setup(props) {
    let seeMore = ref(5);
    function seeMoreHandler() {
      seeMore.value = props.data?.length;
    }

    return {
      localData: props.data?.slice(0, seeMore.value),
      seeMoreHandler,
    };
  },
};
</script>

<style lang="scss">
.cards-container {
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  padding: 2rem;
  gap: 2rem;
  border-radius: 1rem;
  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 400;
    }
    .seeMore {
      color: #572589;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>
