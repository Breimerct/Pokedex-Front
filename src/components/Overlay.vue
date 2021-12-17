<template>
  <v-overlay
    :value="overlay || this.$route.hash.includes('#search')"
    absolute
    z-index="4"
    @click="close"
  ></v-overlay>
</template>

<script>
import EventBus from "../helpers/eventBus";

export default {
  name: "Overlay",
  data: () => ({
    overlay: false,
  }),
  methods: {
    close() {
      this.$emit("closeSearch");
    },
  },
  mounted() {
    EventBus.$on("showOrHideOverlay", (data) => {
      this.overlay = data.show;
    });
  },
};
</script>

<style scoped></style>
