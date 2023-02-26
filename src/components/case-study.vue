<template>
  <div class="case-study-page">
    <section class="accent-bg">
      <div class="container header">
        <div class="centered">
          <h5>Case Study</h5>
          <h2 class="title white">{{ title }}</h2>
          <h2 class="statement">{{ statement }}</h2>
        </div>
      </div>
    </section>

    <section class="body">
      <div class="container">
        <v-more
          msg="Back to Work"
          link="/work"
          color="accent"
          direction="left"
        />

        <p>
          <img v-if="image" :src="$path + '/assets/' + image" />
        </p>

        <blockquote v-html="quote"></blockquote>

        <div v-html="body"></div>

        <div class="tags">
          <span class="h6" v-for="(tag, index) in tags" :key="index">{{
            tag
          }}</span>
        </div>
      </div>
    </section>

    <section class="next-case-study">
      <div class="container"><h4 class="gray">Next Case Study</h4></div>
    </section>

    <v-case-study-intro
      :id="caseStudies.id"
      color="light-gray-bg"
      :title="caseStudies.client"
      :statement="caseStudies.statement"
      :description="caseStudies.quote"
    />
  </div>
</template>

<script>
export default {
  name: "v-news",
  data() {
    return {
      title: "",
      statement: "",
      image: "",
      quote: "",
      body: "",
      tags: [],
      caseStudies: {},
    };
  },
  created: function () {
    this.$api
      .get("/items/case_studies/" + this.$route.params.id, {
        params: {
          "fields[]": "*,image.*,related_case_study.*",
          "filter[status][_eq]": "published",
        },
      })
      .then(
        function (res) {
          this.title = res.data.client;
          this.statement = res.data.statement;
          if (res.data.image) {
            this.image = res.data.image.id;
          }
          if (res.data.tags) {
            this.tags = res.data.tags.split(",");
          }
          this.quote = res.data.statement;
          this.body = res.data.body;
          this.caseStudies = res.data.related_case_study;
        }.bind(this)
      )
      .catch(
        function () {
          this.$router.push("/not-found");
        }.bind(this)
      );
  },
};
</script>

<style lang="scss">
@import "~@/assets/_variables.scss";
.body {
  p {
    margin: 40px 0;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/_variables.scss";
.header {
  margin-top: 120px;
  padding-top: 100px;
  padding-top: var(--component-padding-y);
  padding-bottom: 100px;
  padding-bottom: var(--component-padding-y);
  h2.title {
    margin-top: 20px;
  }
  p.body {
    max-width: 700px;
    margin-top: 20px;
  }
}
.body {
  position: relative;
  &::before {
    content: "";
    background-color: $accent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
  }
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
      quotes: "“" "”";
      text-indent: -0.4em; // For hanging quote
      margin: 80px 40px;
      font-family: "Quarto", mono;
      font-size: 36px;
      line-height: 46px;
      color: $gray;
      strong {
        color: $accent;
      }
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
.tags {
  margin-top: 80px;
  span {
    background-color: $accent;
    padding: 14px 28px;
    color: $white;
    margin-right: 20px;
  }
}
.next-case-study {
  h4 {
    margin: 40px auto;
    max-width: 260px;
    text-align: center;
  }
}
</style>
