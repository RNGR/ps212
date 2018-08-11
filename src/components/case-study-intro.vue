<template>
  <section :class="[color, 'pad-top']">
    <div class="container">
      <h2 class="title white">{{title}}</h2>
      <h2 class="statement">{{statement}}</h2>
      <div class="description white">{{description}}</div>
      <v-more msg="View Case Study" :link="link" :color="moreColor"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-case-study-intro',
  props: {
    id: String,
    title: String,
    statement: String,
    description: String,
    color: {
      type: String,
      default: 'accent-bg'
    }
  },
  computed: {
    link: function(){
      return '/work/' + this.id
    },
    moreColor: function(){
      return (this.color == 'accent-bg')? 'white' : 'accent';
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  .container {
    padding-bottom: var(--component-padding-y);
  }
  h2.title {
    margin-top: 10px;
  }
  h2.statement {
    margin-bottom: 20px;
  }
  .description {
    max-width: 600px;
  }
  &.light-gray-bg {
    .title {
      color: var(--accent);
    }
    .description {
      color: var(--dark-gray);
    }
  }
}
</style>
