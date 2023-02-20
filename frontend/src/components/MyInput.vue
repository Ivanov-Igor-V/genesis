<template>
  <div class="my-input">
    <input
      type="text"
      :value="value"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.my-input {
  input {
    min-width: 60px;
    height: 30px;
    background: white;
    border: none;
    border-radius: 5px;
    color: black;
    transition: all 0.4s;
    padding: 5px 10px;

    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
    }

    &:hover {
      outline: 2px solid rgb(28, 28, 136);
    }
    &:active {
      outline: 2px solid rgb(94, 94, 192);
    }
  }
}
</style>