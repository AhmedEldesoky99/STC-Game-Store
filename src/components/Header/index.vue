<template>
  <div class="header">
    <div class="header__img-box">
      <img src="../../assets/images/subway.png" class="header__img" />
    </div>
    <div class="flex-col header__details">
      <h2>Subway Surfers</h2>
      <h3>SYBO Games</h3>
      <p>SURF the urban wave! DODGE the oncoming trains!</p>
      <span>300k Downloads</span>
      <a href="https://ahmed-eldesoky.vercel.app/" target="_blank">
        <customBtn value="more info" :onClick="handleBtn"></customBtn>
      </a>
    </div>
  </div>
</template>
<script>
import customBtn from "../Btns/btn.vue";

export default {
  name: "customHeader",
  components: { customBtn },

  setup() {
    function handleBtn() {
      console.log("clicked");
    }

    return {
      handleBtn,
    };
  },
};
</script>

<style lang="scss">
.header {
  background-color: #fff;
  //   padding: 0.2rem;
  border-radius: 1rem;
  overflow: hidden;

  //need res
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
      border-radius: 1rem;
      width: 70%;
      height: 100%;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }
  }
  &__details {
    padding: 2rem;
    gap: 1rem !important;
  }
}
</style>
