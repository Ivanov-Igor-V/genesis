<template>
  <div class="my-button">
    <button @click="$emit('confirm')" :disabled="isDisabled || loading">
      <div v-if="!loading">
        {{ title }}
      </div>
      <MyLoader v-else />
    </button>
  </div>
</template>

<script>
import MyLoader from "./MyLoader.vue";
export default {
  name: "MyButton",
  components: { MyLoader },
  props: {
    title: {
      type: String,
      default: "Ок",
    },
    loading: {
      type: Boolean,
    },
    isDisabled: {
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

    &:disabled {
      cursor: initial;
      background: rgb(167, 167, 230);
      &:hover {
        background: rgb(167, 167, 230);
      }
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