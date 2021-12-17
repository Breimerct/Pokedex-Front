<template>
  <v-overlay :value="overlay" z-index="99">
    <v-progress-circular indeterminate size="100"></v-progress-circular>
  </v-overlay>
</template>

<script>
import EventBus from "@/helpers/eventBus";

export default {
  name: "Loading",
  data: () => ({
    overlay: false,
  }),
  watch: {
    overlay(val) {
      if (val) {
        console.log(val);
      }
    },
  },
  mounted() {
    EventBus.$on("showOrHideLoading", (data) => {
      this.overlay = data.show;
    });
  },
};
</script>

<style lang="scss" scoped></style>
