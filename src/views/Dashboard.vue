<template>
  <div class="dashboard">
    <h1>Dashboard page</h1>

    <div class="flex flex-center">
      <pre>{{ posts }}</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      posts: [],
    };
  },
  components: {},
  created() {
    axios
      .get("http://blog-authenticated.herokuapp.com/api/v1/posts")
      .then(({ data }) => {
        this.posts = data.data;
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
</script>
