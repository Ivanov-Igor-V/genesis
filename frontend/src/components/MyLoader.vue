<template>
  <div class="my-loader"></div>
</template>

<script>
export default {
  name: "MyLoader",
};
</script>

<style scoped>
.my-loader {
  border: 2px solid white;
  border-top: 2px solid transparent;
  display: inline-block;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>