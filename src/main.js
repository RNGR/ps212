//main.js
import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import moment from "moment"; //@TODO Change to date-fns
import router from "./router";

const app = createApp(App).use(router);
app.use(store);

app.config.globalProperties.$filters = {
  nl2br(value) {
    if (!value) return "";
    // value = value.toString()
    return (value + "").replace(
      /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
      "$1" + "<br>" + "$2"
    );
  },

  toString(value) {
    if (!value) return "";
    return value.toString();
  },

  formatDate(value) {
    if (value) {
      return moment(String(value)).format("MMMM Do, YYYY");
    }
  },
};

// Directus API
const client = require("./api");

// Global variables
app.config.globalProperties.$api = client;
app.config.globalProperties.$path = client.baseURL;

// Smooth scroll
import vueSmoothScroll from "vue3-smooth-scroll";
app.use(vueSmoothScroll);

// Global components
import VMore from "./components/more.vue";
import VArticleIntro from "./components/article-intro.vue";
import VCaseStudyIntro from "./components/case-study-intro.vue";
import VCareer from "./components/career.vue";

app.component("v-more", VMore);
app.component("v-article-intro", VArticleIntro);
app.component("v-case-study-intro", VCaseStudyIntro);
app.component("v-career", VCareer);

app.mount("#app");
