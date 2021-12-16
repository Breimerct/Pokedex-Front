<template>
  <v-list-item :to="{ name: toName }">
    <v-list-item-icon>
      <v-icon> {{ icon }} </v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title> {{ title }} </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "RouterList",
  props: {
    title: {
      type: String,
      required: true,
      default: "#",
    },

    toName: {
      type: String,
      required: true,
      default: "#",
    },

    icon: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped></style>
