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
export default {
  name: 'v-legal',
  data () {
    return {
      privacy: ''
    }
  },
  created: function () {
    this.$api.getItem('legal', 1).then(function(res){
      this.privacy = res.data.privacy_policy;
      // eslint-disable-next-line
    }.bind(this)).catch(err => console.log('Error fetching "News"', err));
  }
}
</script>

<style lang="scss" scoped>
.legal-page {
  margin-top: 220px;
  h3 {
    text-align: center;
  }
}
</style>
