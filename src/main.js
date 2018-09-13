import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Directus SDK
// import { RemoteInstance } from 'directus-sdk-javascript'
// const client = new RemoteInstance({
//   url: 'https://demo-api.getdirectus.com/',
//   // version: '1.1', // optional, only need to update if different from default
//   accessToken: 'Bearer demo' // optional, can be used without on public routes
// });

// Smooth scroll
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

// Global components
import VMore from "./components/more.vue";
import VArticleIntro from './components/article-intro.vue'
import VCaseStudyIntro from './components/case-study-intro.vue'

Vue.component("v-more", VMore);
Vue.component("v-article-intro", VArticleIntro);
Vue.component("v-case-study-intro", VCaseStudyIntro);

// Global styles
import "./assets/global.scss"

Vue.config.productionTip = false

// 0. Explicitly install router when using module system
Vue.use(VueRouter)

// 1. Define route components
import HomePage from './components/home.vue';
import WorkPage from './components/work.vue';
import CaseStudyPage from './components/case-study.vue';
import NewsPage from './components/news.vue';
import ArticlePage from './components/article.vue';
import AboutPage from './components/about.vue';
import LegalPage from './components/legal.vue';
import NoPage from './components/404.vue';

// 2. Define routes
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/work', name: 'work', component: WorkPage },
  { path: '/work/:id', name: 'work-detail', component: CaseStudyPage },
  { path: '/news', name: 'news', component: NewsPage },
  { path: '/news/:id', name: 'news-detail', component: ArticlePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/privacy', name: 'privacy', component: LegalPage },
  { path: '*', component: NoPage }
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'history',
  base: '/ps212/',
  routes, // short for `routes: routes`
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')