<template>
  <v-dialog
    scrollable
    v-model="showDialogFilter"
    width="500"
    @click:outside="closeFilterDialog"
  >
    <v-card>
      <v-card-title> Filter </v-card-title>
      <v-form @submit.prevent="applyFilters">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  outlined
                  v-model="regionSelected"
                  name="regions"
                  label="Región"
                  required
                  :items="getRegions"
                  @change="submitPokedexes"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :loading="false"
                  :disabled="false"
                  outlined
                  v-model="pokedexSelected"
                  name="pokedexes"
                  label="Pokedex"
                  required
                  :items="getPokedexes"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="accent" @click="closeFilterDialog"> Cerrar </v-btn>
          <v-btn color="primary" type="submit"> Aplicar </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "FormFilters",

  data: () => ({
    showDialogFilter: false,
    pokedexSelected: "national",
    regionSelected: "all",
  }),

  computed: {
    ...mapGetters("pokedexModule", ["getRegions", "getPokedexes"]),
  },

  watch: {
    $route: function () {
      this.showDialogFilter = this.$route.hash === "#filter";
      if (this.$route.query.region && this.$route.query.pokedex) {
        this.regionSelected = this.$route.query.region;
        this.pokedexSelected = this.$route.query.pokedex;
      } else {
        this.setPokedexes(["national"]);
        this.regionSelected = "all";
        this.pokedexSelected = "national";
      }
    },
    getPokedexes: function (newVal, oldVal) {
      if (newVal.length > 1 && newVal[0] !== oldVal[0])
        this.pokedexSelected = newVal[0];
    },
  },

  methods: {
    ...mapActions("pokedexModule", ["fetchRegions", "fetchPokedexes"]),
    ...mapMutations("pokedexModule", ["setPokedexes"]),
    submitPokedexes() {
      if (this.regionSelected !== "all") {
        this.fetchPokedexes({ region: this.regionSelected });
      } else {
        this.setPokedexes(["national"]);
      }
    },

    applyFilters() {
      if (
        this.regionSelected !== "all" ||
        this.pokedexSelected !== "national"
      ) {
        this.$router.push({
          query: {
            region: this.regionSelected,
            pokedex: this.pokedexSelected,
            page: this.$route.query.page,
          },
          hash: "",
        });
      } else {
        this.$router.push({
          query: {
            page: this.$route.query.page,
          },
          hash: "",
        });
      }
    },

    closeFilterDialog() {
      if (this.$route.query.region && this.$route.query.pokedex) {
        this.regionSelected = this.$route.query.region;
        this.pokedexSelected = this.$route.query.pokedex;
      } else {
        this.setPokedexes(["national"]);
        this.regionSelected = "all";
        this.pokedexSelected = "national";
      }
      this.$router.push({
        query: {
          region: this.$route.query.region,
          pokedex: this.$route.query.pokedex,
          page: this.$route.query.page,
        },
        hash: "",
      });
    },
  },

  mounted() {
    this.fetchRegions();
    this.showDialogFilter = this.$route.hash === "#filter";
    if (this.$route.query.region) {
      this.regionSelected = this.$route.query.region;
    } else {
      this.regionSelected = "all";
    }
    if (this.$route.query.pokedex) {
      this.pokedexSelected = this.$route.query.pokedex;
      this.fetchPokedexes({ region: this.regionSelected });
    } else {
      this.setPokedexes(["national"]);
      this.pokedexSelected = "national";
    }
  },
};
</script>

<style scoped></style>
