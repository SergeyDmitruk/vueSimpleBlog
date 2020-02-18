<template>
  <div id="app">
    <TitlePage titleName="Blog"/>
    <BlogGrid v-bind:blogData="posts"/>
  </div>
</template>

<script>
import TitlePage from "./components/TitlePage";
import BlogGrid from "./components/BlogGrid";

export default {
  name: "App",
  data() {
    return {
      posts: this.fetchData()
    };
  },
  methods: {
    fetchData: function() {
      let self = this;

      const myRequest = new Request("https://swapi.co/api/people/");

      fetch(myRequest)
        .then(responce => {
          return responce.json();
        })
        .then(data => {
          self.posts = data.results;
          console.log(typeof data.results, data.results, "data App");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created: function() {
    this.fetchData();
    console.log(this.fetchData(), "fetchData App");
  },
  components: {
    TitlePage,
    BlogGrid
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



