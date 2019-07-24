<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <something /> -->
    <my-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn outline small v-on="on">HI</v-btn>
      </template>

      <modal-component width="300" height="300" />
    </my-dialog>
  </div>
</template>

<script>
import modalComponent from "./TestComp";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      dialog: false
    };
  },
  created() {},
  components: {
    // something: () => import("./Something")
    modalComponent,
    myDialog: () => import("./DialogComponent")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
