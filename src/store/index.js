import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `${userData.token_type} ${userData.access_token}`;
    },
  },
  actions: {
    register(credentials) {
      return axios
        .post(
          "http://blog-authenticated.herokuapp.com/api/v1/signup",
          credentials
        )
        .then(({ data }) => {
          console.log("User data is ", data);
        });
    },

    login({ commit }, credentials) {
      return axios
        .post(
          "http://blog-authenticated.herokuapp.com/api/v1/login",
          credentials
        )
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
          console.log("User data is ", data);
        });
    },
  },
  modules: {},
});
