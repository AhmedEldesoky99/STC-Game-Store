<template>
  <div>
    <compNavbar :categories="categories" />
    <RouterView></RouterView>
  </div>
</template>

<script>
import { reactive } from "vue";

import compNavbar from "./components/Navbar/index.vue";
import { categoriesData } from "./components/data";

export default {
  name: "App",
  components: {
    compNavbar,
  },
  setup() {
    let categories = reactive(categoriesData);
    return {
      categories,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;500;700&family=Tajawal:wght@300;500;700&display=swap");
* {
  padding: 0;
  margin: 0;
}
a,
a:visited {
  text-decoration: none;
}
h1,
h2,
h3 {
  color: #232222;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
  background-color: #eee;
  overflow-x: hidden;
}
body {
  font-size: 1.6rem;
  font-family: "Noto Sans", sans-serif;
  font-family: "Tajawal", sans-serif;
  color: #444242;
}
.container {
  max-width: 113rem;
  margin: 0 auto;
  padding: 2rem 0;
}
.flex-col {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
.m--mid {
  margin: 4rem 0;
}
</style>
