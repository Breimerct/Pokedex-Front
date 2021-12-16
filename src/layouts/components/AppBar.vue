<template>
  <v-app-bar app clipped-left color="appbar">
    <div class="d-flex align-center">
      <v-img
        alt="Pokedex logo"
        class="shrink mr-2"
        contain
        :src="require('../../assets/icon-pokedex.jpg')"
        transition="scale-transition"
        width="40"
      />
      <span class="text-h4"> Pokedex </span>
    </div>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in itemsMenu" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    itemsMenu: [{ title: "About project" }, { title: "dev" }],
  }),
};
</script>

<style scoped></style>
