<template>
  <div class="news-page">
    <section class="background dark-gray-bg">
      <div class="container hero">
        <div class="centered">
          <h2 class="white">{{ about.news_heading_one }}</h2>
          <h2 class="accent">{{ about.news_heading_two }}</h2>
          <p class="description white">{{ about.news_heading_description }}</p>
          <!-- <v-more msg="Read More" link="/news/123" color="white"/> -->
        </div>
        <a href="#scroll-top" v-smooth-scroll="{ duration: 1000, offset: -80 }">
          <svg
            class="hero-advance"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <polygon
              fill="#FFFFFF"
              points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59"
              transform="translate(-592 -944)"
            />
          </svg>
        </a>
      </div>
    </section>

    <div id="scroll-top">

      <div class="relations">
        <h4>Media Inquiries</h4>
        <p v-html="about.news_cta"></p>
      </div>

      <v-article-intro
        v-for="(article, index) in articles"
        :key="index"
        :linkable="article.body.length > 20 ? true : false"
        :link="'/news/' + article.id"
        :category="article.category"
        :title="article.title"
        :by="article.author"
        :date="article.publish_on | formatDate"
        :text="article.summary"
      />
    </div>

    <!-- <h4 class="load-more accent">Load More</h4> -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "v-news",
  data() {
    return {
      about: [],
      articles: []
    };
  },
  created: function() {
    this.$api
      .getItem("about", 1, {
        fields: "*"
      })
      .then(res => {
        this.about = res.data;
      })
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "About"', err));

    this.$api
      .getItems("news", {
        sort: "-publish_on",
        fields: "*,author.*",
        "filter[status][eq]": "published",
        "filter[publish_on][leq]": moment().format("YYYY-MM-DD HH:mm:ss")
      })
      .then(
        function(res) {
          this.articles = res.data;
        }.bind(this)
      )
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "News"', err));
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.background {
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/images/news-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    opacity: 0.2;
    -webkit-filter: grayscale(1);
    -webkit-filter: grayscale(100%);
    filter: gray;
    filter: grayscale(100%);
  }
}
.news-page {
  position: relative;
  .relations {
    margin: 60px auto 0;
    max-width: 800px;
    padding: 40px;
    background-color: $light-gray;
    color: $body;
    h4 {
      margin-bottom: 10px;
    }
  }
}
.load-more {
  transition: all $slow $transition;
  margin: 100px auto;
  margin: var(--component-padding-y) auto;
  max-width: 200px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: $dark-gray;
  }
}
</style>
