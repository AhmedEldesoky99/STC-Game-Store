<template>
  <div class="navbar">
    <div class="container navbar__row1">
      <router-link to="/">
        <div class="navbar__logo-box">
          <img class="navbar__logo-img" src="../../assets/images/logo.svg" />
        </div>
      </router-link>
      <div class="navbar__icons">
        <input
          v-show="showSearch"
          placeholder="Let's find your game"
          name="search"
          v-model="search"
          class="input__search"
        />
        <div class="search" @click="searchToggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="25px"
            color="#572589"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            width="25px"
            color="#572589"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="navbar__row2">
      <customBtn
        v-for="(item, index) of categories"
        :key="index"
        type="secondary"
        :value="item.name"
        :active="item.active"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          width="25px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </customBtn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import customBtn from "../Btns/btn.vue";
export default {
  name: "compNavbar",
  components: {
    customBtn,
  },
  props: ["categories"],
  setup(props) {
    let search = ref("");
    let showSearch = ref(false);

    function searchToggle() {
      console.log(showSearch);
      showSearch.value = !showSearch.value;
      search.value = "";
    }
    return {
      data: props.categories,
      search,
      showSearch,
      searchToggle,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  &__logo-box {
    max-height: 8rem;
  }
  &__icons {
    display: flex;
    gap: 1rem;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
  &__row1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__row2 {
    display: flex;
    gap: 0.5rem;
    flex-wrap: nowrap;
    overflow-x: auto !important;
  }
}
.input {
  &__search {
    border-radius: 1rem;
    border: 0.2rem solid #777;
    padding: 1rem;
  }
}
</style>
