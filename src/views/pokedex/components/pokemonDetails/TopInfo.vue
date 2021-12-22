<template>
  <section id="top-info" v-if="getPokemonVarieties && getPokemonAbout">
    <v-row align-content="center" justify="center">
      <v-col cols="1" class="pb-0 pl-2" align-self="center">
        <v-btn @click="toBack" class="white--text" icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="5" class="pb-0" align-self="center">
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
          v-for="(type, i) of getPokemonVarieties[varietySelected].types"
          :key="i"
        >
          {{ type }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row v-if="getPokemonVarieties.length > 1">
      <v-col cols="12" class="pt-0">
        <h5 class="text-center white--text font-weight-normal">
          {{ getPokemonVarieties[varietySelected].name }}
        </h5>
      </v-col>
      <div class="mx-auto mb-9">
        <v-btn-toggle
          mandatory
          color="accent"
          v-model="varietySelected"
          @change="sendVariety"
          dense
        >
          <v-btn
            icon
            large
            tile
            v-for="(variety, i) of getVarietiesToggle"
            :key="i"
          >
            <v-img transition="none" width="44" v-bind:src="variety.img">
            </v-img>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-row>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TopInfo",
  data: () => ({
    varietySelected: 0,
  }),
  computed: {
    ...mapGetters("pokedexModule", ["getPokemonAbout", "getPokemonVarieties"]),
    getVarietiesToggle() {
      if (this.getPokemonVarieties !== null) {
        return this.getPokemonAbout.pokemonName === "pikachu"
          ? this.getPokemonVarieties.slice(0, 7)
          : this.getPokemonVarieties;
      } else {
        return [];
      }
    },
  },
  methods: {
    ...mapMutations("pokedexModule", ["setPokemonAbout"]),
    toBack() {
      this.setPokemonAbout(null);
      this.$router.back();
    },
    sendVariety() {
      this.$emit("onChange", {
        varietyIndex: this.varietySelected,
        varietyUrl: this.getPokemonVarieties[this.varietySelected].url,
      });
    },
  },
};
</script>

<style scoped lang="scss">
#top-info {
  z-index: 3;
}
</style>
