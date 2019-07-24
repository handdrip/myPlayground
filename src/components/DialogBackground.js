import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default function DialogOverlay() {
  return {
    functional: true,
    methods: {
      clickHandler(e) {
        if (e.target.id === "dialog-overlay") {
          this.$events.$emit("active", false);
        }

        this.$emit("close");
      }
    },
    render(createElement) {
      return <Wrapper id="dialog-overlay" onClick={this.clickHandler} />;
    }
  };
}
