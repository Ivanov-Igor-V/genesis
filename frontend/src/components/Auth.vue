<template>
  <div>
    <input type="text" v-model="userID" />
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
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

<style>
</style>