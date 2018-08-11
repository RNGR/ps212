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
      <v-article-intro v-for="(article, index) in articles" :key="index" link="/news/123" :category="article.category" title="Article Title Lorem Ipsum Dolor Sit Amet" by="David Gaglione" date="July 14th, 2018" text="There are few things more difficult to change than your name. Whether you are Ron Artest who legally changed his name to Metta World Peace or Elizabeth Woolridge Grant known to us as Lana Del Rey, legally changing one’s name requires multiple trips, phone calls and forms to get everything squared away. But people still go through the trouble of formally"/>
    </div>

    <h4 class="load-more accent">Load More</h4>

  </div>
</template>

<script>
export default {
  name: 'v-news',
  data () {
      return {
        articles: [
          { category: 'Category 1' },
          { category: 'Category 2' },
          { category: 'Category 3' },
          { category: 'Category 4' },
          { category: 'Category 5' }
        ]
      }
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
