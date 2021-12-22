<template>
  <section id="bottom-info">
    <v-card class="pokeCard" elevation="5" rounded="xl">
      <div class="pokeImg">
        <v-img
          transition="none"
          contain
          height="300px"
          :src="
            pokemonVarieties[varietySelected].img ||
            require('../../../../assets/icon-pokedex.jpg')
          "
        ></v-img>
      </div>
      <v-tabs show-arrows centered class="pt-2">
        <v-tab>About</v-tab>
        <v-tab>Stats</v-tab>
        <v-tab>Evolutions</v-tab>

        <v-tab-item>
          <about-pokemon
            :get-pokemon-about="pokemonAbout"
            :get-pokemon-varieties="pokemonVarieties"
            :variety-selected="varietySelected"
          />
        </v-tab-item>
        <v-tab-item class="pb-10" v-if="pokemonStats">
          <pokemon-stats :pokemon-stats="pokemonStats" />
        </v-tab-item>
        <v-tab-item class="pb-10">
          <evolutions-pokemon :pokemon-evolutions="pokemonEvolutions" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "BottomInfo",
  components: {
    EvolutionsPokemon: () => import("./EvolutionsPokemon"),
    PokemonStats: () => import("./PokemonStats"),
    AboutPokemon: () => import("./AboutPokemon"),
  },

  props: {
    varietySelected: {
      type: Number,
      require: true,
      default: 0,
    },
    pokemonAbout: {
      type: Object,
      require: true,
    },
    pokemonVarieties: {
      type: [],
      require: true,
    },
    pokemonStats: {
      type: [],
      require: true,
    },
    pokemonEvolutions: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
#bottom-info {
  z-index: 2;
}
.pokeCard {
  margin-top: 220px;
  padding-top: 60px;
}
.pokeImg {
  position: absolute;
  height: 0;
  z-index: 1;
  top: -220px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
