<template>
  <div class="essence-data">
    <div v-if="data" class="essence-data__data">
      <div
        v-for="item of data?._embedded['leads'] ||
        data?._embedded['contacts'] ||
        data?._embedded['companies']"
        :key="item.id"
        class="essence-data__field"
      >
        <div>
          {{ item.name }}
        </div>
        <div>
          {{ item.responsible_user_id }}
        </div>
      </div>
    </div>
    <div v-if="data">
      <button :style="{ marginRight: '10px' }" @click="$emit('toPrevPage')">
        prevPage
      </button>
      <button @click="$emit('toNextPage')">nextPage</button>
    </div>
    <div v-else>Нет данных...</div>
  </div>
</template>

<script>
import { useEssences } from "../store/essences";
export default {
  name: "EssenceData",
  props: {
    data: {
      type: Object,
    },
  },

  setup() {
    const storeEssences = useEssences();

    return { storeEssences };
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