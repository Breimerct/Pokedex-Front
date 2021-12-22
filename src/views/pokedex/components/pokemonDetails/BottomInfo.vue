<template>
  <section id="bottom-info" v-if="getPokemonVarieties !== null">
    <v-card class="pokeCard top-border-rounded">
      <div class="pokeImg">
        <v-img
          transition="none"
          contain
          height="300px"
          :src="
            getPokemonVarieties[varietySelected].img ||
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
            :get-pokemon-about="getPokemonAbout"
            :get-pokemon-varieties="getPokemonVarieties"
            :variety-selected="varietySelected"
          />
        </v-tab-item>
        <v-tab-item class="pb-10" v-if="getPokemonStats">
          <pokemon-stats :pokemon-stats="getPokemonStats" />
        </v-tab-item>
        <v-tab-item class="pb-10">
          <v-card flat>
            <v-card-text>
              <h1>Evolutions</h1>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BottomInfo",
  components: {
    PokemonStats: () => import("./PokemonStats"),
    AboutPokemon: () => import("./AboutPokemon"),
  },
  props: {
    varietySelected: {
      type: Number,
      require: true,
      default: 0,
    },
  },

  computed: {
    ...mapGetters("pokedexModule", [
      "getPokemonAbout",
      "getPokemonVarieties",
      "getPokemonStats",
    ]),
  },
};
</script>

<style scoped lang="scss">
.top-border-rounded {
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
}
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
