<script lang="ts">
import Auth from "../components/Auth.vue";
import { computed } from "vue";

export default {
  components: {
    Auth,
  },
  setup() {},
};
</script>

<template>
  <div>
    <Auth v-if="!isToken" />
    <div v-else>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="text" />
      <button @click="create">Create</button>
    </div>
  </div>
</template>

<style scoped>
</style>
