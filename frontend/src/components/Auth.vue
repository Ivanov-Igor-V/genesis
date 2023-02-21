<template>
  <div class="auth">
    <MyInput type="text" v-model="userID" />
    <MyButton @confirm="onLogin" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";

export default {
  name: "Auth",
  components: {
    MyButton,
    MyInput,
  },
  setup() {
    const router = useRouter();
    const userID = ref("30878566");
    const onLogin = () => {
      axios
        .post("http://localhost:8000/auth", {
          id: userID.value,
        })
        .then(({ data }) => {
          if (data.access_token)
            localStorage.setItem("token", data.access_token);
          localStorage.setItem("domain", data.base_domain);
          router.push("/");
        })
        .catch((e) => console.log(e));
    };

    return {
      userID,
      onLogin,
    };
  },
};
</script>

<style scoped>
.auth {
  display: inline-flex;
  gap: 10px;
  align-items: center;
}
</style>