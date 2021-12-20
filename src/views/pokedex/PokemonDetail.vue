<template>
  <section v-if="getPokemonAbout">
    <v-row>
      <v-col cols="1" class="pb-0 pl-2">
        <v-btn @click="toBack" class="white--text" icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="5" class="pb-0">
        <h1 class="text-capitalize white--text">
          {{ getPokemonAbout.pokemonName }}
        </h1>
      </v-col>
      <v-col cols="6" class="pb-0">
        <h4 class="white--text font-weight-bold text-caption text-right">
          {{ getPokemonAbout.genera }}
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0" cols="7">
        <v-chip
          dark
          style="height: 25px"
          class="text-center text-capitalize mr-1 mt-1"
          color="rgba(255, 255, 255, 0.3)"
          v-for="(type, i) of getPokemonAbout.types"
          :key="i"
        >
          {{ type }}
        </v-chip>
      </v-col>
      <!--
      <v-col cols="5" class="py-0">
        <h6 class="white--text font-weight-light text-right py-1">
          {{ getPokemonAbout.genera }}
        </h6>
      </v-col>
      -->
    </v-row>
    <div style="min-height: 300px">
      <v-img
        transition="none"
        contain
        height="300px"
        v-bind:src="getPokemonAbout.img"
      ></v-img>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PokemonDetail",

  data: () => ({
    pokemonName: "",
  }),

  computed: {
    ...mapGetters("pokedexModule", ["getPokemonAbout"]),
  },

  methods: {
    ...mapActions("pokedexModule", ["fetchPokemonAbout"]),
    toBack() {
      this.$router.back();
    },
  },

  mounted() {
    if (this.$route.params.pokemonName) {
      this.pokemonName = this.$route.params.pokemonName;
      this.fetchPokemonAbout({ name: this.pokemonName });
    }
  },
};
</script>

<style scoped></style>
