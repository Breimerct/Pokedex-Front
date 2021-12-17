<template>
  <section>
    <h1 class="text-h4 font-weight-bold">What pokémon are you looking for?</h1>
    <p>You can use the search bar above to search for a specific pokemon.</p>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="6" v-for="(card, i) of cards" :key="i">
            <v-card
              rounded="xl"
              ripple
              flat
              dark
              :color="card.color"
              class="py-7 px-4"
              :to="{ name: card.route }"
            >
              <h3>
                {{ card.name }}
              </h3>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" lg="5" align-self="center">
        <v-card outlined rounded="xl">
          <v-card-title> Featured pokemon </v-card-title>
          <v-divider></v-divider>
          <v-list two-line>
            <v-list-item
              v-for="pokemon of pokeFeatured"
              :key="pokemon.name"
              ripple
            >
              <v-list-item-avatar tile>
                <v-img :src="pokemon.artwork"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium text-capitalize">
                  {{ pokemon.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip small class="mr-1">{{ pokemon.primaryType }}</v-chip>
                  <v-chip small v-if="pokemon.secondaryType">
                    {{ pokemon.secondaryType }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <section class="mt-5">
      <h2>Pokemon news</h2>
      <v-row>
        <v-col
          v-for="pokeNew in pokeNews"
          :key="pokeNew.i"
          cols="12"
          sm="6"
          md="6"
          lg="4"
        >
          <v-card outlined rounded="xl" ripple>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  style="line-height: 1.3em; height: 3.7em; overflow: hidden"
                  class="text-body-1 font-weight-bold"
                >
                  {{ pokeNew.title }}
                </v-card-title>

                <v-card-subtitle
                  class="text-subtitle-2 font-weight-bold mt-1"
                  v-text="pokeNew.date"
                ></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" tile min-width="115" height="80">
                <v-img
                  style="border-radius: 20px"
                  :src="pokeNew.imageUrl"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
import { pokeFeatured, pokeNews } from "../helpers/Util";

export default {
  name: "Home",

  data: () => ({
    cards: [
      {
        name: "Pokedex",
        route: "pokedex",
        color: "#4fc1a6",
      },
      {
        name: "Movements",
        route: "404",
        color: "#f7786b",
      },
      {
        name: "Objects",
        route: "404",
        color: "#ffce4b",
      },
      {
        name: "Places",
        route: "404",
        color: "#58aaf6",
      },
      {
        name: "Types",
        route: "404",
        color: "#7c538c  ",
      },
      {
        name: "Group Builder",
        route: "404",
        color: "#b1736c",
      },
    ],
    pokeFeatured: pokeFeatured,
    pokeNews: pokeNews,
  }),
};
</script>
