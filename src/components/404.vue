<template>
  <div class="not-found-page">
    <div class="container">
      <h2>Page Not Found</h2>
      <h5 class="accent">
        <router-link to="/">Go to the homepage</router-link>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-not-found",
};
</script>

<style lang="scss" scoped>
.not-found-page {
  margin-top: 120px;
  padding-top: 30vh;
  padding-bottom: calc(30vh - 200px);
  h2 {
    text-align: center;
  }
  h5 {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
