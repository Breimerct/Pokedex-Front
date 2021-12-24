<template>
  <section class="section-detail">
    <v-row
      v-if="getPokemonVarieties !== null && getPokemonAbout !== null"
      class="main-row"
    >
      <v-col class="pb-0" cols="12">
        <top-info @onChange="onChangeTopInfo" />
      </v-col>
      <v-col class="pt-1 pt-md-0" cols="12">
        <bottom-info
          v-if="
            getPokemonVarieties !== null ||
            getPokemonAbout !== null ||
            getPokemonStats !== null ||
            getPokemonEvolutions !== null
          "
          :variety-selected="varietySelected"
          :pokemon-varieties="getPokemonVarieties"
          :pokemon-about="getPokemonAbout"
          :pokemon-stats="getPokemonStats"
          :pokemon-evolutions="getPokemonEvolutions"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import EventBus from "../../helpers/eventBus";

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
    ...mapGetters("pokedexModule", [
      "getPokemonAbout",
      "getPokemonVarieties",
      "getPokemonEvolutions",
      "getPokemonStats",
    ]),
  },

  watch: {
    getPokemonVarieties: function (val) {
      if (val !== null) {
        this.fetchPokemonStats({
          url: this.getPokemonVarieties[this.varietySelected].url,
        });
      }
    },
    getPokemonAbout: function (val) {
      if (val !== null) {
        this.fetchPokemonEvolutions({ name: this.$route.params.pokemonName });
      }
    },
    getPokemonEvolutions: function (val) {
      if (val !== null) {
        EventBus.$emit("showOrHideLoading", { show: false });
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
      "fetchPokemonEvolutions",
    ]),
    ...mapMutations("pokedexModule", [
      "setPokemonAbout",
      "setPokemonVarieties",
      "setPokemonStats",
      "setPokemonEvolutions",
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
      this.setPokemonEvolutions(null);
    },
  },

  async mounted() {
    this.clearData();
    if (this.$route.params.pokemonName) {
      this.pokemonName = this.$route.params.pokemonName;
      await this.fetchPokemonVarieties({ name: this.pokemonName });
      await this.fetchPokemonAbout({ name: this.pokemonName });
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
