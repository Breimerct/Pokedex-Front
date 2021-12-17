<template>
  <div>
    <v-autocomplete
      v-if="!$vuetify.breakpoint.mobile || $route.hash.includes('#search')"
      :autofocus="$vuetify.breakpoint.mobile"
      dense
      background-color="background"
      class="mt-6"
      outlined
      clearable
      placeholder="Search"
      v-model="search"
      :items="pokemonsNameData"
      @input="submitSearch"
    >
      <template
        v-if="
          $vuetify.breakpoint.mobile && this.$route.hash.includes('#search')
        "
        v-slot:prepend
      >
        <v-btn small icon rounded @click="closeSearch">
          <v-icon> mdi-keyboard-backspace </v-icon>
        </v-btn>
      </template>

      <template v-slot:append>
        <v-btn small icon rounded @click="submitSearch">
          <v-icon> search </v-icon>
        </v-btn>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "AutocompleteInput",

  props: {
    pokemonsNameData: {
      type: [],
      required: true,
      default: [],
    },
  },

  data: () => ({
    search: null,
  }),

  methods: {
    submitSearch() {
      console.log(this.search);
    },
    closeSearch() {
      this.$emit("closeSearch");
    },
  },
};
</script>

<style scoped></style>
