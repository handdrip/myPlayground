<template>
  <div :style="modalStyle">{{ title }}</div>
</template>

<script>
export default {
  props: ["title"],
  created() {
    this.$events.$on("active", isActive => {
      this.active = isActive;
    });
  },
  data() {
    return {
      active: false,
      modalStyle: {
        width: "400px",
        height: "300px",
        margin: "0 auto"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>