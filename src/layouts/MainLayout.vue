<template>
  <v-main>
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
    AppBar: () => import("./components/AppBar"),
    NavigationDrawer: () => import("./components/NavigationDrawer"),
  },
};
</script>

<style scoped></style>
