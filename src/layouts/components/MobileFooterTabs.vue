<template>
  <v-bottom-navigation app color="primary" v-if="$vuetify.breakpoint.mobile">
    <v-btn
      v-for="(route, i) of routesItems"
      :key="i"
      :to="{ name: route.toName }"
    >
      <span>{{ route.title }}</span>
      <v-icon>{{ route.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "MobileFooterTabs",

  props: {
    routesItems: {
      type: [],
      require: true,
    },
  },
};
</script>

<style scoped></style>
