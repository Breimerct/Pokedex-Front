<template>
  <v-main>
    <loading />
    <overlay @close="closeSearch" />
    <app-bar ref="appbar" />
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
    Overlay: () => import("../components/Overlay"),
    Loading: () => import("../components/Loading"),
    AppBar: () => import("./components/AppBar"),
    NavigationDrawer: () => import("./components/NavigationDrawer"),
  },
  methods: {
    closeSearch() {
      // this.$refs.appbar.switchSearchMode();
    },
  },
};
</script>

<style scoped></style>
