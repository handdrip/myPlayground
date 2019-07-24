<template>
  <div @close="ttt">
    <input type="hidden" :value="checked" style="width:0;height:0;" />
    <slot name="activator" :on="{click: foo}"></slot>

    <section v-show="checked" ref="modalContent">
      <slot id="modal"></slot>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import DialogOverlay from "./DialogBackground";

export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  data() {
    return {
      loaded: false
    };
  },
  watch: {
    checked(val) {
      if (val) {
        this.setDialog();
      }
    }
  },
  methods: {
    ttt() {
      alert("hi");

      //   return this.$createElement('div', {
      //             staticClass: 'v-dialog__activator',
      //             class: {
      //                 'v-dialog__activator--disabled': this.disabled
      //             },
      //             ref: 'activator',
      //             on: listeners
      //         }, this.$slots.activator)
    },
    setDialog() {
      this.$nextTick(() => {
        console.log(this.$refs);
        const ModalContentNode = this.$refs.modalContent.childNodes[0];

        const App = document.getElementById("app");
        const Dialog = Vue.extend(DialogOverlay());
        const DialogComponent = new Dialog().$mount();

        this.$el.appendChild(DialogComponent.$el);
        DialogComponent.$el.appendChild(ModalContentNode);

        App.insertBefore(DialogComponent.$el, App.childNodes[0]);

        this.$events.$emit("active", true);
      });
    },
    foo(e) {
      e.preventDefault();
      e.stopPropagation();

      this.$emit("change", !this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>