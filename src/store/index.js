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
    // eslint-disable-next-line no-unused-vars
    register({ commit }, credentials) {
      return axios
        .post(
          "http://blog-authenticated.herokuapp.com/api/v1/signup",
          credentials
        )
        .then(({ data }) => {
          console.log("User data is ", data);
        })
        .catch((err) => {
          console.log(err.response.data);
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
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
