//router.js
import { createWebHistory, createRouter } from "vue-router";

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
  { path: "/:catchAll(.*)", name: "not-found", component: NoPage },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  base: "", // /ps212/
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ left: 0, top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

export default router;
