<template>
  <section :class="[color, 'career', 'pad-top']">
    <div class="container">
      <h4>{{title}}</h4>
      <div class="description gray">{{location}}</div>
      <p class="body" v-html="text"></p>
      <a :href="'mailto:careers@ps212.com?subject=PS212 Careers: ' + subject + '&body=At a minimum please be sure to include your name and resume...'" target="_blank" class="accent h6">Reach Out</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-career',
  props: {
    link: String,
    location: String,
    title: String,
    text: String,
    color: String
  },
  computed: {
    subject: function () {
      return encodeURIComponent(this.title);
    }
  }
}
</script>

<style lang="scss" scoped>
.career {
  .container {
    // padding-bottom: 80px;
    // border-bottom: 1px solid var(--light-gray);
  }
  h2 {
    max-width: 800px;
    margin: 20px 0 10px;
  }
  p.body {
    max-width: 700px;
    margin-top: 20px;
  }
  a.accent {
    display: block;
    margin-top: 20px;
    color: var(--accent);
  }
}
</style>

<style lang="scss">
.career ul {
  margin: 20px 0 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  li {
    flex-grow: 1;
    display: inline-block;
    width: calc(50% - 20px);
    margin-top: 20px;
    margin-right: 20px;
    font-family: "Gotham HTF", mono;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--gray);
  }
}
</style>