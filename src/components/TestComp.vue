<template >
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <v-card v-if="active" :width="width" :height="height">
      <v-card-title>Hello</v-card-title>
      <v-card-text>Lorem ipsum</v-card-text>
    </v-card>
  </transition>
</template>

<script>
export default {
  props: ["width", "height"],
  data() {
    return {
      active: false
    };
  },
  created() {
    this.$events.$on("active", isActive => {
      this.active = isActive;
    });
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "scale(0, 0)";
    },
    enter(el, done) {
      Velocity(el, { scale: 1.3 }, { duration: 125 });
      Velocity(el, { scale: 1 }, { complete: done });
    },
    leave(el, done) {
      Velocity(el, { scale: 0 }, { duration: 125 }, { complete: done });
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>