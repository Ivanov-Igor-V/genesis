import axios from "axios";

const MyApi = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "content-type": "application/json",
    "X-Domain": localStorage.getItem("domain") || "amocrm.ru",
    authorisation: "Bearer " + localStorage.getItem("token"),
  },
});

export default class EssenceService {
  // leads
  createLead(data) {
    console.log("data-log", JSON.stringify(data));
    return MyApi.post("/leads", JSON.stringify(data))
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  getLeads() {
    return MyApi.get("/leads")
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  getLeadByID(id) {
    return MyApi.get(`/leads/${id}`)
      .then((res) => res)
      .catch((e) => console.log(e));
  }
  // Contacts
  createContact(data) {
    return MyApi.post("/contacts", {
      name: data.name,
    })
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  getContacts() {
    return MyApi.get("/contacts")
      .then((res) => res)
      .catch((e) => console.log(e));
  }
  // Companies
  createCompany(data) {
    return MyApi.post("/companies", {
      name: data.name,
    })
      .then((res) => res)
      .catch((e) => console.log(e));
  }

  getCompanies() {
    return MyApi.get("/companies")
      .then((res) => res)
      .catch((e) => console.log(e));
  }
}
