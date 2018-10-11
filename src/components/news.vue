<template>
  <div class="news-page">

    <section class="dark-gray-bg">
      <div class="container hero">
        <div class="centered">
          <h2 class="white">Our Thinking</h2>
          <h2 class="accent">What we&rsquo;re talking about</h2>
          <p class="description white">We specialize in bringing sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
          <v-more msg="Read More" link="/news/123" color="white"/>
        </div>
        <a href="#scroll-top" v-smooth-scroll="{ duration: 1000, offset: -80 }">
          <svg class="hero-advance" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <polygon fill="#FFFFFF" points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59" transform="translate(-592 -944)"/>
          </svg>
        </a>
      </div>
    </section>

    <div id="scroll-top">
      <v-article-intro v-for="(article, index) in articles" :key="index" :link="'/news/' + article.id" :category="article.category" :title="article.title" :by="article.author.first_name + ' ' + article.author.last_name" :date="article.publish_on | formatDate" :text="article.summary"/>
    </div>

    <!-- <h4 class="load-more accent">Load More</h4> -->

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'v-news',
  data () {
    return {
      articles: []
    }
  },
  created: function () {
    this.$api.getItems('news', {
      "fields": "*,author.*",
      "filter[status][eq]": "published",
      "filter[publish_on][leq]": moment().format("YYYY-MM-DD HH:mm:ss")
    }).then(function(res){
      this.articles = res.data;
      // eslint-disable-next-line
    }.bind(this)).catch(err => console.log('Error fetching "News"', err));
  }
}
</script>

<style lang="scss" scoped>
.news-page {
  position: relative;
}
.load-more {
  transition: all var(--slow) var(--transition);
  margin: var(--component-padding-y) auto;
  max-width: 200px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--dark-gray);
  }
}
</style>
