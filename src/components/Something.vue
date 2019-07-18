<template>
  <v-layout style="height:100vh" align-center justify-center>
    <v-progress-circular v-show="loading" :size="300" color="primary" indeterminate>
      <h1 class="text-uppercase">loading</h1>
    </v-progress-circular>
  </v-layout>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  created() {
    this.$events.$on("loading", toggleState => {
      this.loading = toggleState;
    });
  },
  data() {
    return {
      loading: false
    };
  },
  beforeDestroy() {
    this.$events.$off("loading");
  }
};
</script>

<style lang="scss" scoped>
</style>