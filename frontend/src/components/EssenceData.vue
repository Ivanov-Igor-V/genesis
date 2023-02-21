<template>
  <div class="essence-data">
    <div v-if="data" class="essence-data__data">
      <div v-for="item of data" :key="item" class="essence-data__field">
        <div>
          {{ item }}
        </div>
      </div>
    </div>
    <div v-else>Нет данных...</div>
  </div>
</template>

<script>
export default {
  name: "EssenceData",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.essence-data {
  width: 100%;
  padding: 5px;

  &__data {
    max-height: 220px;
    overflow: auto;
    margin-bottom: 10px;
  }

  &__field {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid white;
  }
}
</style>