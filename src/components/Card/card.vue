<template>
  <div class="card">
    <div class="card__img-box">
      <img src="../../assets/images/Bitmap.svg" class="card__img" />
    </div>
    <h3 class="card__title">{{ name }}:{{ description }}...</h3>
    <router-link :to="`/game/${id}`">
      <customBtn value="more info" :onClick="handleBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
          width="25px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </customBtn>
    </router-link>
  </div>
</template>

<script>
import customBtn from "../Btns/btn.vue";
export default {
  name: "gameCard",
  components: {
    customBtn,
  },
  props: ["item"],
  setup(props) {
    function handleBtn() {
      console.log("clicked");
    }
    return {
      handleBtn,
      name: props.item?.title.slice(0, 5),
      description: props.item?.body.slice(0, 20),
      id: props.item.id,
    };
  },
};
</script>

<style lang="scss">
.card {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  &__title {
    font-size: 1.4rem;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
      height: 50%;
    }
  }
}
</style>
