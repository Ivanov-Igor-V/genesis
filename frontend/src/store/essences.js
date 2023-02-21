import { defineStore } from "pinia";

export const useEssences = defineStore({
  id: "essence",
  state: () => {
    return {
      leads: [],
      companies: [],
      contacts: [],
    };
  },
  actions: {
    addLeadToList(idArray) {
      this.leads.push(...idArray);
    },
    addContactToList(idArray) {
      this.contacts.push(...idArray);
    },
    addCompanyToList(idArray) {
      this.companies.push(...idArray);
    },
  },
  getters: {
    getLeads(state) {
      return state.leads;
    },
    getContacts(state) {
      return state.contacts;
    },
    getCompanies(state) {
      return state.companies;
    },
  },
});
