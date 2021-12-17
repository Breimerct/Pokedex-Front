<template>
  <v-main>
    <Loading />
    <app-bar />
    <navigation-drawer />
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "MainLayout",
  components: {
    Loading: () => import("../components/Loading"),
    AppBar: () => import("./components/AppBar"),
    NavigationDrawer: () => import("./components/NavigationDrawer"),
  },
};
</script>

<style scoped></style>
