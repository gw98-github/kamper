<template>
  <div class="next-button">
    <img
      class="next-image"
      :src="require('@/assets/arrow.svg')"
      alt="prev-image"
      srcset=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.next-button {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background: #c42217;
  height: 50px;
  width: 50px;
  border: none;
  opacity: 0.7;
}
.next-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>