<template>
  <section
    class="section-detail"
    v-if="getPokemonVarieties !== null && getPokemonAbout !== null"
  >
    <v-row class="main-row">
      <v-col class="pb-0" cols="12">
        <top-info @onChange="onChangeTopInfo" />
      </v-col>
      <v-col class="pt-1 pt-md-0" cols="12">
        <bottom-info :variety-selected="varietySelected" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "PokemonDetail",
  components: {
    BottomInfo: () => import("./components/pokemonDetails/BottomInfo"),
    TopInfo: () => import("./components/pokemonDetails/TopInfo"),
  },
  data: () => ({
    pokemonName: "",
    varietySelected: 0,
  }),

  computed: {
    ...mapGetters("pokedexModule", ["getPokemonAbout", "getPokemonVarieties"]),
  },

  watch: {
    getPokemonVarieties: function (val) {
      if (val !== null) {
        this.fetchPokemonStats({
          url: this.getPokemonVarieties[this.varietySelected].url,
        });
      }
    },
    $route: function (newVal, oldVal) {
      if (oldVal.params.pokemonName !== newVal.params.pokemonName) {
        this.clearData();
        this.fetchPokemonAbout({ name: this.$route.params.pokemonName });
        this.fetchPokemonVarieties({ name: this.$route.params.pokemonName });
        window.scrollTo(0, 0);
      }
    },
  },

  methods: {
    ...mapActions("pokedexModule", [
      "fetchPokemonAbout",
      "fetchPokemonVarieties",
      "fetchPokemonStats",
    ]),
    ...mapMutations("pokedexModule", [
      "setPokemonAbout",
      "setPokemonVarieties",
      "setPokemonStats",
    ]),
    onChangeTopInfo(val) {
      this.varietySelected = val.varietyIndex;
      this.fetchPokemonStats({
        url: val.varietyUrl,
      });
    },
    clearData() {
      this.setPokemonAbout(null);
      this.setPokemonVarieties(null);
      this.setPokemonStats(null);
    },
  },

  created() {
    this.clearData();
    if (this.$route.params.pokemonName) {
      this.pokemonName = this.$route.params.pokemonName;
      this.fetchPokemonAbout({ name: this.pokemonName });
      this.fetchPokemonVarieties({ name: this.pokemonName });
    }
  },
};
</script>

<style scoped lang="scss">
.main-row {
  width: 80%;
}
.section-detail {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .main-row {
    width: 100%;
  }
}
</style>
