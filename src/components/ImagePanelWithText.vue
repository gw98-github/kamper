<template>
  <div class="container" v-if="windowWidth > 800">
    <div class="elem"><slot name="elem1"></slot></div>
    <div class="elem"><slot name="elem2"></slot></div>
  </div>
  <div v-else>
    <div class="elem"><slot name="elem2"></slot></div>
    <div class="elem"><slot name="elem1"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.elem {
  font-size: larger;
  padding: 25px;
  width: 50%;
}
@media only screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
  .elem {
    font-size: 16px;
    padding: 25px;
    width: calc(100% - 50px);
  }
}
</style>
