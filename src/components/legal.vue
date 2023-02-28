<template>
  <div class="legal-page">
    <div class="container">
      <section>
        <h3>Privacy Notice</h3>
        <div v-html="privacy"></div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
const api = require("../api");

export default {
  name: "v-legal",
  setup() {
    const privacy = ref("");
    const legal = ref({});
    const baseURL = ref("");

    onMounted(async () => {
      try {
        baseURL.value = api.getUri();
        const legalItem = await api.get("/items/legal/1", {
          params: {
            "fields[]": "*",
          },
        });
        legal.value = legalItem.data.data;
        // console.log({ legalItem: legalItem });
        // console.log({ legal: legal });
        privacy.value = legal.value.privacy_policy;
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Legal"', err);
      }
    });
    return {
      privacy,
      baseURL,
    };
  },
};
</script>

<style lang="scss" scoped>
.legal-page {
  margin-top: 220px;

  h3 {
    text-align: center;
  }
}
</style>
