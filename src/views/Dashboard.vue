<template>
  <div class="dashboard">
    <h1>Dashboard page</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  components: {},
  created() {
    axios
      .get("http://blog-authenticated.herokuapp.com/api/v1/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
