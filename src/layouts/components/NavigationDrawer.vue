<template>
  <v-navigation-drawer app clipped>
    <v-list shaped dense>
      <v-list-item-group color="primary">
        <router-list v-for="(route, i) of routesList" :key="i" v-bind="route" />

        <v-divider class="ma-3"></v-divider>

        <v-list-item class="mb-auto" :to="{ name: 'settings' }">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ajustes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const routesArray = [
  {
    title: "Home",
    toName: "home",
    icon: "mdi-home",
  },
  {
    title: "Pokédex",
    toName: "pokedex",
    icon: "mdi-view-list",
  },
];

export default {
  name: "NavigationDrawer",
  components: {
    RouterList: () => import("./RouterList"),
  },
  data: () => ({
    routesList: routesArray,
  }),
};
</script>

<style scoped></style>
