<template>
  <div class="pokedex">
    <v-overlay :value="getPokedex === null" z-index="99">
      <v-progress-circular indeterminate size="100"></v-progress-circular>
    </v-overlay>
    <div class="d-flex">
      <div class="pb-4">
        <div class="d-flex">
          <h1 class="pr-3 pb-2">Pokédex</h1>
          <v-btn text color="accent" class="mt-2" @click="showFilterDialog()">
            <v-icon left>filter_alt</v-icon>
            Filtrar
          </v-btn>
        </div>
        <div v-if="$route.query.pokedex && $route.query.pokedex !== 'national'">
          <h4 class="mb-2">Filtros:</h4>
          <v-chip
            v-if="$route.query.pokedex && $route.query.pokedex !== 'national'"
            close
            @click:close="removeFilter('pokedex')"
          >
            <span class="font-weight-bold mr-1">Pokedex:</span>
            {{ $route.query.pokedex }}
          </v-chip>
        </div>
      </div>

      <!--Filter button (Desktop)-->
    </div>
    <v-row class="mt-5">
      <v-col
        cols="6"
        sm="4"
        md="3"
        lg="3"
        xl="2"
        v-for="(pokemon, i) of getPokedex"
        :key="i"
      >
        <poke-card v-bind="pokemon" />
      </v-col>
    </v-row>
    <div
      class="text-center mt-6"
      v-if="this.getTotalPokemons !== null && getPokedex !== null"
    >
      <v-pagination
        v-model="currentPage"
        :length="maxPagination"
        :total-visible="7"
        @input="nexPage"
      ></v-pagination>
    </div>
    <form-filters />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Pokedex",

  components: {
    FormFilters: () => import("./components/FormFilters"),
    PokeCard: () => import("./components/pokeCard"),
  },

  data: () => ({
    currentPage: 1,
  }),

  computed: {
    ...mapGetters("pokedexModule", ["getPokedex", "getTotalPokemons"]),
    maxPagination() {
      return Math.ceil(this.getTotalPokemons / 12);
    },
  },

  watch: {
    $route(newVal, oldVal) {
      if (!newVal.query.page && oldVal.query.page) {
        this.currentPage = parseInt(
          typeof newVal.query.page === "string" ? newVal.query.page : 1
        );
        this.$router.push({
          query: {
            region: newVal.query.region,
            pokedex: newVal.query.pokedex,
            page: oldVal.query.page,
          },
        });
        window.scrollTo(0, 0);
      }
      if (this.$route.query.pokedex) {
        if (newVal.query.pokedex !== oldVal.query.pokedex) {
          this.fetchPokedex({
            page: this.$route.query.page,
            region: this.$route.query.pokedex
              ? this.$route.query.pokedex.toLowerCase()
              : undefined,
          });
        }
      } else if (oldVal.hash !== "#filter") {
        this.fetchPokedex({ page: this.currentPage });
      }
    },
  },

  methods: {
    ...mapActions("pokedexModule", ["fetchPokedex"]),
    ...mapMutations("pokedexModule", ["setPokedex"]),
    nexPage() {
      this.$router.push({
        query: {
          page: this.currentPage,
        },
      });
      this.fetchPokedex({ page: this.currentPage });
    },
    showFilterDialog() {
      this.$router.push({
        query: {
          region: this.$route.query.region,
          pokedex: this.$route.query.pokedex,
          page: this.$route.query.page,
        },
        hash: "filter",
      });
    },
    removeFilter(removeItem) {
      if (removeItem === "pokedex") {
        this.$router.push({
          query: {
            region: undefined,
            pokedex: undefined,
            page: this.$route.query.page,
          },
        });
      }
    },
  },

  mounted() {
    if (this.$route.query.page) {
      this.currentPage = parseInt(
        typeof this.$route.query.page === "string" ? this.$route.query.page : 1
      );
    } else {
      this.$router.push({
        query: {
          page: 1,
        },
      });
    }

    if (this.$route.query.pokedex) {
      this.fetchPokedex({
        page: this.currentPage,
        region: this.$route.query.pokedex.toLowerCase(),
      });
    } else {
      this.fetchPokedex({ page: this.currentPage });
    }
  },
};
</script>
