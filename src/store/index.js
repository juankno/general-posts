/* eslint-disable no-unused-vars */
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

    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post(
          "http://blog-authenticated.herokuapp.com/api/v1/signup",
          credentials
        )
        .then(({ data }) => data)
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
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    logout({ commit }) {
      return axios
        .post("http://blog-authenticated.herokuapp.com/api/v1/logout")
        .then(({ message }) => {
          commit("CLEAR_USER_DATA");
        })
        .catch((err) => {
          commit("CLEAR_USER_DATA");
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
