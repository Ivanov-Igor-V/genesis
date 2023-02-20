<template>
  <div>
    <MySelect
      default="Выберите сущность"
      :options="options"
      @input="currenteEsence = $event"
    />
    <input type="text" v-model="esenceName" />
    <button @click="createEsence">Create</button>
  </div>
</template>

<script>
import { ref } from "vue";
import MySelect from "./MySelect.vue";
import EsenceService from "../services/EsenceService";

export default {
  components: {
    MySelect,
  },
  setup() {
    const options = ref([
      { title: "Сделка", value: "lead" },
      { title: "Контакт", value: "contact" },
      { title: "Компания", value: "company" },
    ]);

    const esenceService = new EsenceService();

    const currenteEsence = ref(null);

    const esenceName = ref(null);

    const esenceCreateRequest = () => {
      esenceService.getLeads();
    };

    const createEsence = () => {
      esenceCreateRequest();
    };

    return {
      options,
      currenteEsence,
      esenceName,
      createEsence,
    };
  },
};
</script>

<style>
</style>