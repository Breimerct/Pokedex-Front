<template>
  <v-card flat>
    <v-card-text>
      <h3 class="font-weight-black pb-7">Base stats</h3>
      <!--Info-->
      <v-row v-for="(stats, i) in pokemonStats" :key="i">
        <v-col cols="3" class="pb-0">
          {{ stats.name }}
        </v-col>
        <v-col cols="2" class="font-weight-bold pb-0">
          {{ stats.value }}
        </v-col>
        <v-col cols="7" class="pt-5 pb-0">
          <v-progress-linear
            :color="stats.value > 50 ? 'success' : 'error'"
            :value="stats.value"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PokemonStats",
  props: {
    pokemonStats: {
      type: [],
    },
  },
};
</script>

<style scoped></style>
