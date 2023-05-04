<template>
  <div class="container">
    <div class="game">
      <div class="game__img-box">
        <img src="../assets/images/subway.png" class="game__img" />
      </div>
      <div class="flex-col game__details">
        <h2>Subway Surfers</h2>
        <h3>SYBO Games</h3>
        <p>SURF the urban wave! DODGE the oncoming trains!</p>
        <span>300k Downloads</span>
        <customBtn value="more info" :onClick="handleBtn"></customBtn>
      </div>
    </div>
    <div class="m--mid"></div>
    <cardsContainer :data="recommendsGames" title="Most Popular" />
  </div>
</template>

<script>
import { reactive } from "vue";
import cardsContainer from "../components/Card/container.vue";
export default {
  name: "detailsPage",
  components: {
    cardsContainer,
  },

  setup() {
    const recommendsGames = reactive(Array(6).fill(0));
    return {
      recommendsGames,
    };
  },
};
</script>

<style lang="scss">
.game {
  background-color: #fff;
  //   padding: 0.2rem;
  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
    }
  }
  &__details {
    box-sizing: border-box;
    padding: 3rem;
    gap: 1rem !important;
    width: 100%;
  }
}
</style>
