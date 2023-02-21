<template>
  <div class="main">
    <MyButton @confirm="login" title="Логин" />
    <MySelect
      default="Выберите сущность"
      :options="options"
      @input="currentEssence = $event"
    />
    <div>Имя сущности:</div>
    <MyInput v-model="essenceName" />
    <MyButton
      @confirm="createEssence(currentEssence)"
      title="Сохранить"
      :loading="loading"
      :isDisabled="isButtonDisabled"
    />
    <EssenceData :data="essenceData" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import MySelect from "./MySelect.vue";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import EssenceData from "./EssenceData.vue";
import EssenceService from "../services/EssenceService";
import { useEssences } from "../store/essences";
import { useRouter } from "vue-router";

export default {
  components: {
    MySelect,
    EssenceData,
    MyButton,
    MyInput,
  },
  setup() {
    const options = ref([
      { title: "Сделка", value: "lead" },
      { title: "Контакт", value: "contact" },
      { title: "Компания", value: "company" },
    ]);

    const router = useRouter();

    const login = () => {
      localStorage.clear();
      router.push("/auth");
    };

    const essenceService = new EssenceService();
    const essenceData = ref(null);
    const currentEssence = ref(null);
    const essenceName = ref(null);
    const loading = ref(false);
    const isButtonDisabled = ref(true);

    const storeEssences = useEssences();

    watch(currentEssence, (newVal) => {
      isButtonDisabled.value = false;
      getEssence(newVal);
    });

    const getEssence = (essense) => {
      if (essense.value === "lead") {
        essenceData.value = storeEssences.getLeads;
      }

      if (essense.value === "contact") {
        essenceData.value = storeEssences.getContacts;
      }

      if (essense.value === "company") {
        essenceData.value = storeEssences.getCompanies;
      }
    };

    const createEssence = (essense) => {
      // if (!currentEssence.value) return alert("Выберите сущность");
      // if (!essenceName.value) return alert("Выберите имя");
      if (essense.value === "lead") {
        loading.value = true;
        return essenceService
          .createLead([{ name: essenceName.value }])
          .then((res) => {
            loading.value = false;
            storeEssences.addLeadToList(res.data);
          })
          .catch((e) => {
            loading.value = false;
            console.log(e);
          });
      }

      if (essense.value === "company") {
        loading.value = true;

        return essenceService
          .createCompany([{ name: essenceName.value }])
          .then((res) => {
            loading.value = false;
            storeEssences.addCompanyToList(res.data);
          })
          .catch((e) => {
            loading.value = false;
            console.log(e);
          });
      }
      if (essense.value === "contact") {
        loading.value = true;
        return essenceService
          .createContact([{ name: essenceName.value }])
          .then((res) => {
            loading.value = false;
            storeEssences.addContactToList(res.data);
          })
          .catch((e) => {
            loading.value = false;
            console.log(e);
          });
      }
    };

    return {
      login,
      options,
      loading,
      currentEssence,
      essenceName,
      getEssence,
      essenceData,
      createEssence,
      isButtonDisabled,
    };
  },
};
</script>

<style>
.main {
  display: flex;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
}
</style>