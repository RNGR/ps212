<template>
  <div class="news-detail">
    <section class="dark-gray-bg">
      <div class="container header">
        <div class="centered">
          <!-- <h5 class="accent">{{category}}</h5> -->
          <h2 class="white">{{ title }}</h2>
          <div class="description gray">By {{ author }}</div>
          <div class="description white">{{ publish_on | formatDate }}</div>
        </div>
      </div>
    </section>

    <section class="body paper">
      <div class="container">
        <v-more
          msg="Back to News"
          link="/news"
          color="accent"
          direction="left"
        />
        <div v-html="body"></div>
      </div>
    </section>

    <section class="next-article">
      <div class="container"><h4 class="gray">Next Article</h4></div>
    </section>

    <v-article-intro
      color="light-gray-bg"
      :link="'/news/' + related.id"
      :category="related.category"
      :title="related.title"
      :by="related.author"
      :date="related.publish_on | formatDate"
      :text="related.summary"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "v-news",
  data() {
    return {
      category: "",
      title: "",
      author: "",
      publish_on: "",
      body: "",
      related: {
        id: "",
        category: "",
        title: "",
        author: "",
        publish_on: "",
        intro: ""
      }
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.load(event, to.params.id);
    next();
  },
  created: function () {
    this.load(event, this.$route.params.id);
  },
  methods: {
    load: function (event, id) {
      this.$api
        .getItem("news", id, {
          fields: "*,author.*,related_article.*,related_article.author.*",
          "filter[status][eq]": "published",
          "filter[publish_on][leq]": moment().format("YYYY-MM-DD HH:mm:ss")
        })
        .then(
          function(res) {
            this.category = res.data.category;
            this.title = res.data.title;
            this.author = res.data.author;
            this.publish_on = res.data.publish_on;
            this.body = res.data.body;

            this.related.id = res.data.related_article.id;
            this.related.category = res.data.related_article.category;
            this.related.title = res.data.related_article.title;
            this.related.author = res.data.related_article.author;
            this.related.publish_on = res.data.related_article.publish_on;
            this.related.summary = res.data.related_article.summary;
            // eslint-disable-next-line
          }.bind(this)
        )
        .catch(
          function() {
            this.$router.push("/not-found");
          }.bind(this)
        );
    }
  }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";
.news-detail {
  .header {
    margin-top: 120px;
    padding-top: 100px;
    padding-top: var(--component-padding-y);
    padding-bottom: 100px;
    padding-bottom: var(--component-padding-y);
    h2 {
      max-width: 800px;
      margin: 20px 0 10px;
    }
    p.body {
      max-width: 700px;
      margin-top: 20px;
    }
  }
  body {
    quotes: "“" "\201d";
  }
  .paper {
    &::before {
      content: "";
      background-color: $dark-gray;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 200px;
    }
  }
  .body {
    position: relative;
    .container {
      background-color: $white;
      padding: 20px 100px 100px;
      padding: 20px var(--component-padding-x) var(--component-padding-y);
      &::after {
        content: "";
        background-color: $light-gray;
        position: absolute;
        bottom: 0;
        left: 30%;
        right: 30%;
        height: 2px;
      }
      h5 {
        margin-bottom: 50px;
      }
      p {
        margin: 40px 0;
      }
      a {
        transition: color $fast $transition;
        color: $dark-gray;
        text-decoration: underline;
        &:hover {
          color: $accent;
        }
      }
      img,
      iframe {
        width: 100%;
        margin: 20px 0;
      }
      blockquote {
        text-indent: -0.4em; // For hanging quote
        margin: 80px 40px;
        font-family: "Quarto", mono;
        font-size: 36px;
        line-height: 46px;
        color: $dark-gray;
        &:before {
          content: open-quote;
        }
        &:after {
          content: close-quote;
        }
        @media only screen and (max-width: 800px) {
          margin: 100px 10px;
          margin: var(--component-padding-y) 10px;
          font-size: 28px;
          line-height: 36px;
        }
      }
    }
  }
  .next-article {
    h4 {
      margin: 40px auto;
      max-width: 200px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 500px) {
    .paper {
      padding-left: 0;
      padding-right: 0;
      font-size: 20px;
      line-height: 24px;
    }
    .body .container p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
