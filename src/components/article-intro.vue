<template>
  <section :class="[color, 'article', 'pad-top']">
    <div class="container">
      <h5 class="accent">{{ category }}</h5>
      <h2>{{ title }}</h2>
      <div class="description gray">By {{ by }}</div>
      <div class="description">{{ date }}</div>
      <p class="body">{{ text }}</p>
      <v-more msg="Read More" :link="link" color="accent" />
    </div>
  </section>
</template>

<script>
export default {
  name: "v-article-intro",
  props: {
    link: String,
    category: String,
    title: String,
    by: String,
    date: String,
    text: String,
    color: String
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.article {
  .container {
    padding-bottom: var(--component-padding-y);
    border-bottom: 1px solid $light-gray;
  }
  h2 {
    max-width: 800px;
    margin: 20px 0 10px;
  }
  p.body {
    max-width: 700px;
    margin-top: 20px;
  }
}
</style>
