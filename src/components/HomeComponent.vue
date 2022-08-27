<template>
  <div class="container">
    <div class="main-view">
      <div class="main-info"><div>LOREM IPSUM</div></div>
      <div class="image"><img :src="image" alt="" /></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/main-image.webp"),
    };
  },
};
</script>

<style scoped>
.container {
  padding: 2em;
}
.main-view {
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: row;
}
.image {
  flex: 1;
}
img {
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
}
.main-info {
  flex: 1;
  overflow: auto;
}
</style>