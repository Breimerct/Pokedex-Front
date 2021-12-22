<template>
  <v-card flat>
    <v-card-text>
      <p>{{ getPokemonAbout.description }}</p>
      <v-divider />
      <v-row class="mt-5">
        <v-col cols="12" lg="7">
          <v-row>
            <v-col class="grey--text py-0 ma-0" cols="5">
              <p>Height</p>
            </v-col>
            <v-col class="ma-0 py-0" cols="7">
              <span class="text-capitalize black--text">
                {{ getPokemonVarieties[varietySelected].pokemonHeight }}
              </span>
            </v-col>
            <v-col class="grey--text ma-0 py-0" cols="5">
              <p>Weight</p>
            </v-col>
            <v-col class="ma-0 py-0" cols="7">
              <span class="text-capitalize black--text">
                {{ getPokemonVarieties[varietySelected].pokemonWeight }}
              </span>
            </v-col>
            <v-col class="grey--text ma-0 py-0" cols="5">
              <p>Abilities</p>
            </v-col>
            <v-col class="ma-0 py-0" cols="7">
              <span
                class="text-capitalize black--text"
                v-for="(ability, i) of getPokemonVarieties[varietySelected]
                  .abilities"
                :key="i"
              >
                {{ ability }}
                {{
                  i === 0 &&
                  getPokemonVarieties[varietySelected].abilities.length > 1
                    ? ", "
                    : ""
                }}
              </span>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" lg="7">
          <h3 class="font-weight-black pb-7">Breeding</h3>
          <v-row>
            <v-col class="grey--text py-0" cols="5">
              <p>Gender</p>
            </v-col>
            <v-col class="py-0" cols="4">
              <span class="blue--text font-weight-bold">M</span>
              <span class="black--text ma-0">
                {{ getPokemonAbout.gendersPercent.male }}
              </span>
            </v-col>
            <v-col class="py-0" cols="3">
              <span class="pink--text font-weight-bold">F</span>
              <span class="black--text ma-0 pa-0">
                {{ getPokemonAbout.gendersPercent.female }}
              </span>
            </v-col>
          </v-row>

          <v-row
            v-if="getPokemonVarieties[varietySelected].eggGroups.length > 0"
          >
            <v-col class="grey--text py-varietySelected" cols="5">
              <p>Egg groups</p>
            </v-col>
            <v-col class="py-varietySelected" cols="7">
              <span
                class="text-capitalize black--text"
                v-for="(egg, i) of getPokemonVarieties[varietySelected]
                  .eggGroups"
                :key="i"
              >
                {{ egg }}
                {{
                  i === 0 &&
                  getPokemonVarieties[varietySelected].eggGroups.length > 1
                    ? ", "
                    : ""
                }}
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AboutPokemon",
  props: {
    getPokemonAbout: {
      type: Object,
      require: true,
    },
    getPokemonVarieties: {
      type: [],
    },
    varietySelected: {
      type: Number,
    },
  },
};
</script>

<style scoped></style>
