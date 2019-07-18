import SomethingPage from "./Something";

export default function createSomethingProcessComponent(componentName) {
  return {
    name: componentName,
    // created() {
    //   this.$events.$emit("loading", true);
    // },
    mounted() {
      this.$events.$emit("loading", true);
      const delayTime = this.randomRange(1000, 5000);

      var timer = setTimeout(() => {
        console.log("emit!");

        this.$events.$emit("loading", false);
        clearTimeout(timer);
      }, delayTime);
    },
    methods: {
      randomRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    },
    render(h) {
      return h(SomethingPage);
    }
  };
}
