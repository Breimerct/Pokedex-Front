<template>
  <v-app-bar app clipped-left color="appbar">
    <div
      class="d-flex align-center"
      v-if="
        !$vuetify.breakpoint.mobile || !this.$route.hash.includes('#search')
      "
    >
      <v-img
        alt="Pokedex logo"
        class="shrink mr-2"
        contain
        :src="require('../../assets/icon-pokedex.jpg')"
        transition="scale-transition"
        width="40"
      />
      <span class="text-h4"> Pokedex </span>
    </div>

    <v-spacer></v-spacer>

    <autocomplete-input
      v-if="getPokemonsName"
      :pokemons-name-data="getPokemonsName"
      @closeSearch="switchSearchMode"
    />

    <v-spacer></v-spacer>

    <div
      v-if="
        !$vuetify.breakpoint.mobile || !this.$route.hash.includes('#search')
      "
    >
      <v-btn
        @click="switchSearchMode"
        icon
        v-if="
          $vuetify.breakpoint.mobile && !this.$route.hash.includes('#search')
        "
      >
        <v-icon> search </v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group>
            <v-list-item v-for="(item, index) in itemsMenu" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EventBus from "../../helpers/eventBus";

export default {
  name: "AppBar",
  components: {
    AutocompleteInput: () => import("./AutocompleteInput"),
  },
  data: () => ({
    itemsMenu: [{ title: "About project" }, { title: "dev" }],
    search: null,
  }),
  computed: {
    ...mapGetters("pokedexModule", ["getPokemonsName"]),
  },
  methods: {
    ...mapActions("pokedexModule", ["fetchPokemonsName"]),

    switchSearchMode() {
      if (this.$route.hash === "") {
        this.$router.push({
          query: { page: this.$route.query.page },
          hash: "search",
        });
        EventBus.$emit("showOrHideOverlay", { show: true });
      } else if (this.$route.hash === "#search") {
        EventBus.$emit("showOrHideOverlay", { show: false });
        this.$router.back();
      }
    },
  },
  mounted() {
    if (this.getPokemonsName === null) {
      this.fetchPokemonsName();
    }
  },
};
</script>

<style scoped></style>
