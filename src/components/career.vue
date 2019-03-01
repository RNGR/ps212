<template>
  <section :class="[color, 'career', 'pad-top']">
    <div class="container">
      <h4>
        <a :href="link" target="_blank" class="accent">{{ title }}</a>
      </h4>
      <div class="description gray">{{ location }}</div>
      <div class="body" v-html="text"></div>
      <a :href="link" target="_blank" class="accent h6 button">Reach Out</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-career",
  props: {
    link: String,
    location: String,
    title: String,
    text: String,
    color: String
  },
  computed: {
    subject: function() {
      return encodeURIComponent(this.title);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.career {
  .container {
    // padding-bottom: 80px;
    // border-bottom: 1px solid $light-gray;
  }
  h2 {
    max-width: 800px;
    margin: 20px 0 10px;
  }
  div.body {
    max-width: 700px;
    margin-top: 0px;
  }
  a.button {
    background-color: $accent;
    display: inline-block;
    padding: 13px 22px;
    margin-top: 30px;
    color: $white;
  }
}
</style>

<style lang="scss">
@import "../assets/_variables.scss";
.career {
  div.body {
    p {
      margin: 20px 0;
    }
  }
}
.career ul {
  margin: 0 0 10px 0;
  padding: 0;
  list-style-type: disc;
  li {
    margin-top: 10px;
    font-family: "Gotham HTF", mono;
    font-size: 16px;
    line-height: 24px;
    color: $gray;
  }
}
@media only screen and (max-width: 800px) {
  .career ul {
    margin: 0 0 10px 10px;
  }
}
</style>
