import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./filters.js";

Vue.use(Vuex);

// Vuex Store
const store = new Vuex.Store({
  state: {
    items: {}
  },
  mutations: {
    updateData(state, payload) {
      state.items[payload.collection] = payload.items;
    }
  }
});

// Directus SDK
import SDK from "@directus/sdk-js";
const client = new SDK({
  // url: 'http://local.api.com',
  // env: 'ps212',
  // token: 'demo'
  url: "https://api.ps212.rngr.org/",
  env: "_",
  token: "demo"
});

Object.defineProperties(Vue.prototype, {
  $api: { value: client },
  $path: { value: "https://api.ps212.rngr.org" }, // /uploads/_/originals/mountains.jpg
  $project: { value: "_" }
});

// // Global variables
// client.getItem('about', 1).then(function(res){
//   store.commit('updateData', { collection:'about', items: res.data })
//   // eslint-disable-next-line
// }).catch(err => console.log('Error fetching "About"', err));

// client.getItems('offices').then(function(res){
//   store.commit('updateData', { collection:'offices', items: res.data })
//   // eslint-disable-next-line
// }).catch(err => console.log('Error fetching "Offices"', err));

// client.getItems('services').then(function(res){
//   store.commit('updateData', { collection:'services', items: res.data })
//   // eslint-disable-next-line
// }).catch(err => console.log('Error fetching "Services"', err));

// Smooth scroll
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

// Global components
import VMore from "./components/more.vue";
import VArticleIntro from "./components/article-intro.vue";
import VCaseStudyIntro from "./components/case-study-intro.vue";
import VCareer from "./components/career.vue";

Vue.component("v-more", VMore);
Vue.component("v-article-intro", VArticleIntro);
Vue.component("v-case-study-intro", VCaseStudyIntro);
Vue.component("v-career", VCareer);

// Global styles
import "./assets/global.scss";

Vue.config.productionTip = false;

// 0. Explicitly install router when using module system
Vue.use(VueRouter);

// 1. Define route components
import HomePage from "./components/home.vue";
import WorkPage from "./components/work.vue";
import CaseStudyPage from "./components/case-study.vue";
import NewsPage from "./components/news.vue";
import ArticlePage from "./components/article.vue";
import AboutPage from "./components/about.vue";
import LegalPage from "./components/legal.vue";
import NoPage from "./components/404.vue";

// 2. Define routes
const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/work", name: "work", component: WorkPage },
  { path: "/work/:id", name: "work-detail", component: CaseStudyPage },
  { path: "/news", name: "news", component: NewsPage },
  { path: "/news/:id", name: "news-detail", component: ArticlePage },
  { path: "/about", name: "about", component: AboutPage },
  { path: "/privacy", name: "privacy", component: LegalPage },
  { path: "*", name: "not-found", component: NoPage }
];

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: "history",
  base: "", // /ps212/
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
