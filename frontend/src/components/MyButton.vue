<template>
  <div class="my-button">
    <button @click="$emit('confirm')">
      <div v-if="!loading">
        {{ title }}
      </div>
      <div v-else>...</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    title: {
      type: String,
      default: "Ок",
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.my-button {
  button {
    min-width: 60px;
    height: 30px;
    background: rgb(67, 67, 216);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    transition: all 0.4s;
    padding: 5px 10px;

    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
    }

    &:hover {
      background: rgb(28, 28, 136);
    }
    &:active {
      background: rgb(94, 94, 192);
    }
  }
}
</style>