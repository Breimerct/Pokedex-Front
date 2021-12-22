<template>
  <v-card flat v-if="pokemonEvolutions !== null">
    <v-card-text v-if="pokemonEvolutions.evolutionsPokemon.length > 0">
      <h3 class="font-weight-black pb-7">Evolutionary chain</h3>
      <v-row>
        <v-col class="my-auto" cols="4">
          <v-card
            class="my-2"
            flat
            :to="{
              name: 'pokemonDetail',
              params: {
                pokemonName: pokemonEvolutions.nameFirstPokemon,
              },
            }"
          >
            <v-img
              transition="none"
              class="mx-auto"
              width="100"
              :src="pokemonEvolutions.firstPokemonImg"
            ></v-img>
            <v-card-text class="pa-0 text-center">
              {{ pokemonEvolutions.nameFirstPokemon }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="my-auto" cols="8">
          <v-row
            v-for="(firstEvolution, i) in pokemonEvolutions.evolutionsPokemon"
            :key="i"
          >
            <v-col class="my-auto" cols="6">
              <div class="text-center mb-0">
                <p>
                  {{ firstEvolution.trigger }}
                </p>
              </div>
            </v-col>

            <v-col class="my-auto" cols="6">
              <v-card
                class="my-2"
                flat
                :to="{
                  name: 'pokemonDetail',
                  params: { pokemonName: firstEvolution.name },
                }"
              >
                <v-img
                  transition="none"
                  class="mx-auto"
                  width="100"
                  :src="firstEvolution.img"
                ></v-img>
                <v-card-text class="pa-0 text-center">
                  {{ firstEvolution.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        v-for="(firstEvolution, i) in pokemonEvolutions.evolutionsPokemon"
        v-bind:key="i"
      >
        <v-col
          v-if="firstEvolution.evolutions.length > 0"
          class="my-auto"
          cols="4"
        >
          <div>
            <v-card
              class="my-2"
              flat
              :to="{
                name: 'pokemonDetail',
                params: {
                  pokemonName: firstEvolution.name,
                },
              }"
            >
              <v-img
                transition="none"
                class="mx-auto"
                width="100"
                :src="firstEvolution.img"
              ></v-img>
              <v-card-text class="pa-0 text-center">
                {{ firstEvolution.name }}
              </v-card-text>
            </v-card>
          </div>
        </v-col>
        <v-col class="my-auto" cols="8">
          <v-row
            v-for="(secondEvolution, i) in firstEvolution.evolutions"
            :key="i"
          >
            <v-col class="my-auto" cols="6">
              <div class="text-center mb-0">
                <p>
                  {{ secondEvolution.trigger }}
                </p>
              </div>
            </v-col>

            <v-col class="my-auto" cols="6">
              <v-card
                class="my-2"
                flat
                :to="{
                  name: 'pokemonDetail',
                  params: { pokemonName: secondEvolution.name },
                }"
              >
                <v-img
                  transition="none"
                  class="mx-auto"
                  width="100"
                  :src="secondEvolution.img"
                ></v-img>
                <v-card-text class="pa-0 text-center">
                  {{ secondEvolution.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-else>This pokémon does not have evolution.</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "EvolutionsPokemon",

  props: {
    pokemonEvolutions: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped></style>
