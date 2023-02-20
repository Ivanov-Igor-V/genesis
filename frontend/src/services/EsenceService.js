import axios from "axios";
// import { watch } from "vue";

export default class EsenceService {
  createLead(data) {
    return axios
      .post(
        "http://localhost:8000/leads",
        {
          name: data.name,
        },
        {
          headers: {
            "content-type": "application/json",
            "X-Domain": localStorage.getItem("domain") || 'amocrm.ru',
            authorisation: 'Bearer ' + localStorage.getItem("token"),
          },
        }
      )
      .then(res => res)
      .catch((e) => console.log(e));
  }

  getLeads(data) {
    return axios
      .get(
        "http://localhost:8000/leads",
        {
          headers: {
            "content-type": "application/json",
            "X-Domain": localStorage.getItem("domain") || 'amocrm.ru',
            authorisation: 'Bearer ' + localStorage.getItem("token"),
          },
        }
      )
      .then(res => res)
      .catch((e) => console.log(e));
  }
}
