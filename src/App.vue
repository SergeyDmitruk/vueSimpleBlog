<template>
  <div id="app" ref="test">
    <TitlePage titleName="Blog"/>
    <BlogGrid v-bind:blogData="posts"/>
  </div>
</template>

<script>
import TitlePage from "./components/TitlePage";
import BlogGrid from "./components/BlogGrid";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TitlePage,
    BlogGrid
  },
  computed: {
    posts() {
      return this.$store.getters.block_data;
    }
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  mounted() {
    console.log(this.fetchData());
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




// 1 - тайтл - done
// 2 - блог айтеми , а потім замінити на АПІ дані, витягувати блог айтеми - done
// - VueX - done
// - loader
// - переписати BlogGridFetch щоб отримував х АРР - done
// - перенести фетч в АРР - done
// - 
// - додати можливість додавання нових айтемів



