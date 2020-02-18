import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    FETCH_DATA(state, post) {
      state.posts = post;
    }
  },
  actions: {
    fetchData({ commit }) {
      const myRequest = new Request("https://swapi.co/api/people/");

      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          commit("FETCH_DATA", data.results);
          return data.results;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    block_data(state) {
      console.log(state.posts, " POSTS");
      return state.posts;
    }
  }
});

export default store;
