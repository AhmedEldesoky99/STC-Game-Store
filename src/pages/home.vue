<template>
  <div class="container">
    <div class="flex-col">
      <customHeader />
      <cardsContainer :data="recommendsGames" title="Most Recommendation" />
      <cardsContainer :data="recommendsGames" title="Most Popular" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import customHeader from "../components/Header";
import cardsContainer from "../components/Card/container.vue";

export default {
  name: "homePage",
  components: {
    customHeader,
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
