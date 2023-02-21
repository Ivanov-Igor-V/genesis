import { defineStore } from "pinia";

export const useEssences = defineStore({
  id: "essence",
  state: () => {
    return {
      leads: ['dsada'],
      companies: [],
      contacts: [],
    };
  },
  actions: {
    addLeadToList(id) {
      this.leads.push(id);
    },
    addContactToList(id) {
      this.leads.push(id);
    },
    addCompanyToList(id) {
      this.leads.push(id);
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
