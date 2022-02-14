<template>
  <div class="container mx-auto mt-5">
    <div class="grid grid-cols-3 gap-4">
      <post-item-component v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItemComponent from "@/components/PostItemComponent";

export default {
  name: "Dashboard",
  data() {
    return {
      posts: [],
    };
  },
  components: { PostItemComponent },
  created() {
    axios
      .get("http://blog-authenticated.herokuapp.com/api/v1/posts")
      .then(({ data }) => {
        this.posts = data.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
</script>
