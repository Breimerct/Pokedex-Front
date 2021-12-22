<template>
  <v-card
    class="pa-3"
    rounded="xl"
    :color="types[0]"
    flat
    ripple
    dark
    :to="{
      name: 'pokemonDetail',
      params: { pokemonName: name },
    }"
  >
    <v-card-title
      class="text-capitalize text-body pl-3 pt-0 pl-0 font-weight-bold d-block text-truncate"
    >
      {{ name }}
    </v-card-title>
    <v-row>
      <!--Pokemon Types-->
      <v-col class="pb-0 pr-0 pt-0" cols="6">
        <v-chip
          style="height: 25px"
          class="text-capitalize mb-1 d-block text-center text-caption"
          color="rgba(255, 255, 255, 0.2)"
          v-for="(type, i) of types"
          :key="i"
        >
          {{ type }}
        </v-chip>
      </v-col>

      <!--Pokemon artwork-->
      <v-col class="pa-0" cols="6">
        <v-responsive :aspect-ratio="1">
          <v-img :src="img" transition="scale">
            <template v-slot:placeholder>
              <v-skeleton-loader> </v-skeleton-loader>
            </template>
          </v-img>
        </v-responsive>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "pokeCard",

  props: {
    types: {
      type: [],
      require: true,
      default: [],
    },
    name: {
      type: String,
      require: true,
      default: "",
    },
    img: {
      type: String,
      require: true,
      default: "",
    },
  },
};
</script>

<style scoped></style>
