<template>
  <v-main
    :class="[
      this.$route.name === 'pokemonDetail' && getPokemonAbout !== null
        ? getPokemonAbout.types[0]
        : '',
    ]"
  >
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
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    Overlay: () => import("../components/Overlay"),
    Loading: () => import("../components/Loading"),
    AppBar: () => import("./components/AppBar"),
    NavigationDrawer: () => import("./components/NavigationDrawer"),
  },
  computed: {
    ...mapGetters("pokedexModule", ["getPokemonAbout"]),
  },
  methods: {
    closeSearch() {
      // this.$refs.appbar.switchSearchMode();
    },
  },
};
</script>

<style scoped></style>
