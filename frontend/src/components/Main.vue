<template>
  <div class="main">
    <MySelect
      default="Выберите сущность"
      :options="options"
      @input="currentEssence = $event"
    />
    <MyInput :value="essenceName" @change="essenceName = $event.target.value" />
    <MyButton
      @confirm="createEssence(currentEssence)"
      title="Сохранить"
      :loading="loading"
    />
    <MyButton
      @confirm="getItemDetails(1773223)"
      title="Details"
      :loading="loading"
    />
    <EssenceData :data="essenceData" @toNextPage="() => {}" />
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import MySelect from "./MySelect.vue";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import EssenceData from "./EssenceData.vue";
import EssenceService from "../services/EssenceService";
import { useEssences } from "../store/essences";

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

    const essenceService = new EssenceService();
    const essenceData = ref(null);
    const currentEssence = ref(null);
    const essenceName = ref(null);
    const loading = ref(false);

    const storeEssences = useEssences();

    onMounted(() => {
      console.log(storeEssences.getLeads);
    });

    watch(currentEssence, (newVal) => {
      getEssence(newVal);
    });

    const getItemDetails = async (id) => {
      // let lol;
      // await essenceService.getLeadByID(id).then((res) => {
      //   lol = res;
      // });
      // console.log(lol);
      storeEssences.addLeadToList(id);
      console.log(storeEssences.leads);
    };

    const getEssence = (essense) => {
      if (essense.value === "lead") {
        loading.value = true;
        return essenceService
          .getLeads()
          .then(({ data }) => {
            essenceData.value = data;
            loading.value = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if (essense.value === "company") {
        loading.value = true;

        return essenceService
          .getCompanies()
          .then(({ data }) => {
            essenceData.value = data;
            loading.value = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }

      loading.value = true;
      return essenceService
        .getContacts()
        .then(({ data }) => {
          essenceData.value = data;
          loading.value = false;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const createEssence = (essense) => {
      if (!currentEssence) return alert("Выберите сущность");
      if (!essenceName) return alert("Выберите имя");
      if (essense.value === "lead") {
        console.log("createLead");
        return essenceService
          .createLead([{ name: essenceName.value }])
          .then((res) => {
            console.log(res?.data?._embedded);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      if (essense.value === "company")
        return essenceService
          .createCompanie({ name: essenceName.value })
          .then((res) => (essenceData.value = res?.data))
          .catch((e) => {
            console.log(e);
          });
      if (essense.value === "contact")
        return essenceService
          .createContact({ name: essenceName.value })
          .then((res) => (essenceData.value = res?.data))
          .catch((e) => {
            console.log(e);
          });
    };

    return {
      options,
      loading,
      currentEssence,
      essenceName,
      getEssence,
      essenceData,
      createEssence,
      getItemDetails,
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