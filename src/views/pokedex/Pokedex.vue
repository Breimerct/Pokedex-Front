<template>
  <div class="pokedex">
    <h1>Pokédex</h1>
    <v-overlay :value="this.getPokedex === null" z-index="99">
      <v-progress-circular indeterminate size="100"></v-progress-circular>
    </v-overlay>
    <v-row class="mt-5">
      <v-col
        cols="6"
        sm="4"
        md="3"
        lg="3"
        xl="2"
        v-for="(pokemon, i) of getPokedex"
        :key="i"
      >
        <poke-card v-bind="pokemon" />
      </v-col>
    </v-row>
    <div class="text-center mt-6" v-if="this.getTotalPokemons !== null">
      <v-pagination
        v-model="currentPage"
        :length="maxPagination"
        :total-visible="7"
        @input="nexPage"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pokedex",

  components: {
    PokeCard: () => import("./components/pokeCard"),
  },

  data: () => ({
    currentPage: 1,
  }),

  computed: {
    ...mapGetters("pokedexModule", ["getPokedex", "getTotalPokemons"]),
    maxPagination() {
      return Math.ceil(this.getTotalPokemons / 12);
    },
  },

  methods: {
    ...mapActions("pokedexModule", ["fetchPokedex"]),
    nexPage() {
      this.$router.push({
        query: {
          page: this.currentPage,
        },
      });
      this.fetchPokedex({ page: this.currentPage });
    },
  },

  mounted() {
    if (this.$route.query.page) {
      this.currentPage = parseInt(
        typeof this.$route.query.page === "string" ? this.$route.query.page : 1
      );
    }
    if (this.getPokedex === null) {
      this.fetchPokedex({ page: this.currentPage });
    }
  },
};
</script>
