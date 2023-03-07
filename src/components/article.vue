<template>
  <div class="news-detail">
    <section class="dark-gray-bg">
      <div class="container header">
        <div class="centered">
          <!-- <h5 class="accent">{{article.category}}</h5> -->
          <h2 class="white">{{ article.title }}</h2>
          <div class="description gray">{{ article.author }}</div>
          <div class="description white">
            {{ $filters.formatDate(article.publish_on) }}
          </div>
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
        <div v-html="article.body"></div>
        <v-more
          msg="Back to News"
          link="/news"
          color="accent"
          direction="left"
        />
      </div>
    </section>

    <section class="next-article">
      <div class="container">
        <h4 class="gray">Next Article</h4>
      </div>
    </section>

    <v-article-intro
      color="light-gray-bg"
      :key="related.id"
      :linkable="related.body && related.body.length > 20 ? true : false"
      :link="'/news/' + related.id"
      :category="related.category"
      :title="related.title"
      :by="related.author"
      :date="$filters.formatDate(related.publish_on)"
      :text="related.summary"
    />
  </div>
</template>

<script>
import moment from "moment";
import { onBeforeRouteUpdate, useRouter, useRoute } from "vue-router";
import { ref } from "vue";
const api = require("../api");

export default {
  name: "v-news",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const article = ref([]);
    const related = ref([]);
    const baseURL = ref("");

    load(route.params.id);
    async function load(id) {
      try {
        baseURL.value = api.getUri();
        const newsItem = await api.get("/items/news/" + id, {
          params: {
            "fields[]": "*,related_article.*",
            "filter[status][_eq]": "published",
            "filter[publish_on][_lte]": moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        });
        article.value = newsItem.data.data;
        related.value = newsItem.data.data.related_article;
        // console.log({ newsItem: newsItem });
        // console.log({ article: article });
        // console.log({ related: related });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "News Article"', err);
        router.push("/not-found");
      }
    }

    onBeforeRouteUpdate(async (to, from) => {
      if (to.params.id !== from.params.id) {
        load(to.params.id);
      }
    });

    return {
      article,
      related,
      load,
      baseURL,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/_variables.scss";

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
