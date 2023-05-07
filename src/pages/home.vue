<template>
  <div class="container">
    <div class="flex-col">
      <customHeader />
      <cardsContainer :data="games" title="Most Recommendation" />
      <cardsContainer :data="games" title="Most Popular" />
    </div>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
import customHeader from "../components/Header";
import cardsContainer from "../components/Card/container.vue";
export default {
  name: "homePage",
  components: {
    customHeader,
    cardsContainer,
  },

  setup() {
    let localGames = inject("games");

    return {
      ...toRefs(localGames),
    };
  },
};
</script>
