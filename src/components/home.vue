<template>
  <div v-if="about" class="home-page">
    <section class="background">
      <div class="container hero">
        <div class="centered">
          <h2 class="accent">{{ about.home_heading_one }}</h2>
          <h2 id="credentials">
            <vue-typer
              :text="credentials"
              :shuffle="true"
              :pre-type-delay="1000"
              :type-delay="140"
              :pre-erase-delay="2000"
              :erase-delay="70"
              erase-style="backspace"
            >
            </vue-typer>
          </h2>
          <p class="description">{{ about.home_heading_description }}</p>
          <v-more msg="View Services" link="/about" color="accent" />
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
              fill="#E53935"
              points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59"
              transform="translate(-592 -944)"
            />
          </svg>
        </a>
      </div>
    </section>

    <section id="scroll-top" class="white dark-gray-bg what-we-do">
      <div class="container">
        <h5 class="accent">What we do</h5>
        <h3 v-html="what_we_do" class="gray"></h3>
        <v-more msg="Read More" link="/about" color="white" />
      </div>
    </section>

    <section class="clients">
      <div class="container">
        <h3>{{ about.home_logo_introduction }}</h3>

        <div class="logos">
          <div>
            <img
              v-if="about.logo_1"
              :src="$path + '/uploads/_/originals/' + about.logo_1.filename"
            />
          </div>
          <div>
            <img
              v-if="about.logo_2"
              :src="$path + '/uploads/_/originals/' + about.logo_2.filename"
            />
          </div>
          <div>
            <img
              v-if="about.logo_3"
              :src="$path + '/uploads/_/originals/' + about.logo_3.filename"
            />
          </div>
          <div>
            <img
              v-if="about.logo_4"
              :src="$path + '/uploads/_/originals/' + about.logo_4.filename"
            />
          </div>
          <div>
            <img
              v-if="about.logo_5"
              :src="$path + '/uploads/_/originals/' + about.logo_5.filename"
            />
          </div>
          <div>
            <img
              v-if="about.logo_6"
              :src="$path + '/uploads/_/originals/' + about.logo_6.filename"
            />
          </div>
        </div>

        <div class="names h6">
          <ul v-for="(n, index) in 4" :key="index">
            <li v-for="(client, index2) in chunked[index]" :key="index2">
              {{ client.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <v-case-study-intro
      v-if="caseStudies[0]"
      :id="caseStudies[0].id"
      :title="caseStudies[0].client"
      :statement="caseStudies[0].statement"
      :description="caseStudies[0].quote"
    />

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

    <section class="light-gray-bg newsletter">
      <div class="container">
        <h3>Join our newsletter</h3>
        <form @submit.prevent="subscribe" novalidate="true">
          <input
            v-model="email"
            type="email"
            name="email"
            novalidate="true"
            class="h3"
            placeholder="Enter your email address…"
            spellcheck="false"
          />
          <button v-on:click="subscribe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <polygon
                fill="#FFFFFF"
                points="133 1 131.942 2.058 136.127 6.25 127 6.25 127 7.75 136.127 7.75 131.942 11.943 133 13 139 7"
                transform="translate(-127 -1)"
              />
            </svg>
          </button>
          <span class="error">{{ error }}</span>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line
import { VueTyper } from "vue-typer";
import moment from "moment";

function split(arr, n) {
  var rest = arr.length % n, // how much to divide
    restUsed = rest, // to keep track of the division over the elements
    partLength = Math.floor(arr.length / n),
    result = [];

  for (var i = 0; i < arr.length; i += partLength) {
    var end = partLength + i,
      add = false;

    if (rest !== 0 && restUsed) {
      // should add one element for the division
      end++;
      restUsed--; // we've used one division element now
      add = true;
    }

    result.push(arr.slice(i, end)); // part of the array

    if (add) {
      i++; // also increment i in the case we added an extra element for division
    }
  }

  return result;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function isScrolledIntoView(el) {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;

  // Only completely visible elements return true:
  // let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  let isVisible = elemTop >= 200 && elemBottom <= window.innerHeight - 200;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  // return isVisible;
  if (isVisible) {
    el.classList.add("highlight");
  } else {
    el.classList.remove("highlight");
  }
}

window.onscroll = function() {
  let strongs = document.querySelector("h3 b");
  if (strongs) {
    isScrolledIntoView(strongs);
  }
};

export default {
  name: "v-home",
  data() {
    return {
      email: "",
      error: "",
      about: [],
      work: [],
      credentials: ["Tapestry"],
      caseStudies: [],
      articles: []
    };
  },
  methods: {
    subscribe: function(event) {
      // `event` is the native DOM event
      if (event.type != "submit") {
        return true;
      }
      if (!this.email) {
        this.error = "Email Required";
        return true;
      }
      if (!this.validEmail(this.email)) {
        this.error = "Email Invalid";
        return true;
      }
      this.$api
        .getItems("contacts", {
          "filter[email][eq]": this.email
        })
        .then(res => {
          if (res.data.length > 0) {
            this.error = "Email Exists";
          } else {
            this.$api
              .createItem("contacts", {
                added_on: moment().toISOString(),
                email: this.email
              })
              .then(function() {
                this.error = "Email Added";
              })
              .catch(function() {
                this.error = "Try Again Later";
              });
          }
        })
        .catch(function() {
          return false;
        });
    },
    validEmail: function(email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  computed: {
    what_we_do: function() {
      return !this.about.what_we_do
        ? ""
        : "“" +
            this.about.what_we_do
              .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
              .trim() +
            "”";
    },
    chunked: function() {
      return split(this.work, 4);
    }
  },
  created: function() {
    this.$api
      .getItem("about", 1, {
        fields: "*.*"
      })
      .then(res => {
        this.about = res.data;
        this.credentials = shuffle(res.data.credentials.split(","));
      })
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "About"', err));

    this.$api
      .getItems("work", {
        limit: "24",
        "filter[status][eq]": "published"
        // "sort": "?"
      })
      .then(res => {
        this.work = res.data;
      })
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "Work"', err));

    this.$api
      .getItems("case_studies", {
        limit: "1",
        "filter[status][eq]": "published"
      })
      .then(res => {
        this.caseStudies = res.data;
      })
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "Case Studies"', err));

    this.$api
      .getItems("news", {
        sort: "-publish_on",
        fields: "*,author.*",
        limit: "2",
        "filter[status][eq]": "published",
        "filter[publish_on][leq]": moment().format("YYYY-MM-DD HH:mm:ss")
      })
      .then(res => {
        this.articles = res.data;
      })
      // eslint-disable-next-line
      .catch(err => console.log('Error fetching "News"', err));
  },
  components: {
    VueTyper
  }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";
.accent {
  max-width: 960px;
  margin-bottom: 10px;
}
h3 {
  strong,
  b {
    color: $white;
    font-weight: inherit;
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.hero .centered {
  @media only screen and (max-width: 800px) {
    h2 {
      font-size: 28px;
      line-height: 36px;
    }
    p.description {
      margin-top: 20px;
    }
    button {

    }
  }
}
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
    background-image: url("/images/home-hero.jpg");
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
#credentials {
  text-overflow: clip;
  overflow: hidden;
  padding-left: 3px;
}
.what-we-do {
  padding-top: 100px;
  padding-top: var(--component-padding-y);
  padding-bottom: 100px;
  padding-bottom: var(--component-padding-y);
  h3 {
    margin-top: 40px;
    max-width: 800px;
    text-indent: -0.4em; // For hanging quote
    strong {
      color: $white;
      font-weight: inherit;
    }
  }
}
.clients {
  position: relative;
  &::before {
    content: "";
    background-color: $dark-gray;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
  }
  .container {
    background-color: $white;
  }
  h3 {
    padding-top: 100px;
    padding-top: var(--component-padding-y);
    text-align: center;
  }
  .logos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 100px 100px 0 100px;
    padding: var(--component-padding-y) var(--component-padding-x) 0
      var(--component-padding-x);
    div {
      text-align: center;
      img {
        max-width: 100px;
        max-height: 100px;
        margin-bottom: 100px;
        margin-bottom: var(--component-padding-y);
      }
    }
    @media only screen and (max-width: 800px) {
      div {
        flex: 1 0 33%;
      }
    }
    @media only screen and (max-width: 500px) {
      div {
        flex: 1 0 50%;
      }
    }
  }
  .names {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 100px 100px 100px;
    padding: 0 var(--component-padding-x) var(--component-padding-y)
      var(--component-padding-x);
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: calc(25% - 20px);
      li {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }
    }
    @media only screen and (max-width: 800px) {
      ul {
        flex: 1 0 50%;
        li {
          text-align: center;
        }
      }
    }
  }
}
.newsletter {
  transform: translateY(-1px); // Hack: Hides last article list border bottom
  text-align: center;
  padding-top: 100px;
  padding-top: var(--component-padding-y);
  padding-bottom: 100px;
  padding-bottom: var(--component-padding-y);
  h3 {
    margin-bottom: 70px;
  }
  form {
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 800px;
    input {
      border: none;
      outline: none;
      color: $accent;
      background-color: $white;
      padding: 10px 40px;
      width: 100%;
      height: 90px;
      &::placeholder {
        color: $light-gray;
      }
    }
    button {
      transition: all $fast $transition;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      font-size: 62px;
      background-color: $accent;
      svg {
        width: 18px;
        height: 18px;
        top: -6px;
        position: relative;
      }
      &:hover {
        background-color: $dark-gray;
      }
    }
    .error {
      display: block;
      color: $accent;
      margin-top: 20px;
    }
  }
}
</style>
