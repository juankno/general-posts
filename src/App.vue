<template>
  <header id="nav">
    <navbar-component />
  </header>
  <router-view />
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  name: "App",
  components: { NavbarComponent },
};
</script>
