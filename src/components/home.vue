<template>
  <div class="home-page">

    <section class="container hero">
      <div class="centered">
        <h2 class="accent">What&rsquo;s in a name?</h2>
        <h2 id="credentials">
          <vue-typer
            :text='credentials'
            :shuffle='true'
            :pre-type-delay=1000
            :type-delay=140
            :pre-erase-delay=2000
            :erase-delay=70
            erase-style='backspace'>
          </vue-typer>
        </h2>
        <p class="description gray">We specialize in bringing sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
        <v-more msg="View Services" link="/about" color="accent"/>
      </div>
      <a href="#scroll-top" v-smooth-scroll="{ duration: 1000, offset: -80 }">
        <svg class="hero-advance" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <polygon fill="#E53935" points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59" transform="translate(-592 -944)"/>
        </svg>
      </a>
    </section>

    <section id="scroll-top" class="white dark-gray-bg what-we-do">
      <div class="container">
        <h5 class="accent">What we do</h5>
        <h3 class="gray">“We are lorem <strong>1,234,567 ipsum</strong> dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.”</h3>
        <v-more msg="Read More" link="/about" color="white"/>
      </div>
    </section>

    <section class="clients">
      <div class="container">
        <h3>You’re in good company…</h3>

        <div class="logos">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
        </div>

        <div class="names h6">
          <ul v-for="(n, index) in 4" :key="index">
            <li>Seconday Client</li>
            <li>Seconday Client</li>
            <li>Seconday Client</li>
            <li>Seconday Client</li>
            <li>Seconday Client</li>
            <li>Seconday Client</li>
          </ul>
        </div>

      </div>
    </section>

    <v-case-study-intro id="123" :title="caseStudies[0].title" statement="A quick project statement here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia."/>

    <v-article-intro v-for="(article, index) in articles" :key="index" link="/news/123" :category="article.category" title="Article Title Lorem Ipsum Dolor Sit Amet" by="David Gaglione" date="July 14th, 2018" text="There are few things more difficult to change than your name. Whether you are Ron Artest who legally changed his name to Metta World Peace or Elizabeth Woolridge Grant known to us as Lana Del Rey, legally changing one’s name requires multiple trips, phone calls and forms to get everything squared away. But people still go through the trouble of formally"/>

    <section class="light-gray-bg newsletter">
      <div class="container">
        <h3>Join our newsletter</h3>
        <input type="email" name="email" class="h3" placeholder="Enter your email address…" spellcheck="false">
      </div>
    </section>

  </div>
</template>

<script>
// eslint-disable-next-line
import { VueTyper } from 'vue-typer'

// Directus API
import SDK from "@directus/sdk-js/remote"
const client = new SDK({
  url: 'https://demo-api.directus.app',
  token: 'demo'
});

export default {
  name: 'v-home',
  data () {
    return {
      credentials: [
        'Tapestry',
        'Windows Hello',
        'Etsy Studio',
        'TrueCourse',
        'Microsoft Rewards',
        'Brillion',
        'Morsel'
      ],
      caseStudies: [
        { title: 'Client Name One' }
      ],
      articles: [
        { category: 'Category 1' },
        { category: 'Category 2' }
      ]
    }
  },
  created: function () {

    client.getItems('movies')
      // eslint-disable-next-line
      .then(res => console.log(res))
      // eslint-disable-next-line
      .catch(err => console.log(err));
  },
  components: {
    VueTyper
  }
}
</script>

<style lang="scss" scoped>
#credentials {
  text-overflow: clip;
  overflow: hidden;
  padding-left: 3px;
}
.what-we-do {
  padding-top: var(--component-padding-y);
  padding-bottom: var(--component-padding-y);
  h3 {
    margin-top: 40px;
    max-width: 800px;
    text-indent: -0.4em; // For hanging quote
    strong {
      color: var(--white);
      font-weight: inherit;
    }
  }
}
.clients {
  position: relative;
  &::before {
    content: "";
    background-color: var(--dark-gray);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
  }
  .container {
    background-color: var(--white);
  }
  h3 {
    padding-top: var(--component-padding-y);
    text-align: center;
  }
  .logos {
    display: flex;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    img {
      border-radius: 100%;
    }
  }
  .names {
    display: flex;
    justify-content: space-between;
    padding: 0 var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 10px;
      }
    }
  }
}
.newsletter {
  transform: translateY(-1px); // Hack: Hides last article list border bottom
  text-align: center;
  padding-top: var(--component-padding-y);
  padding-bottom: var(--component-padding-y);
  input {
    border: none;
    outline: none;
    color: var(--accent);
    background-color: var(--white);
    padding: 10px 40px;
    margin-top: 70px;
    width: 100%;
    max-width: 800px;
    &::placeholder {
      color: var(--light-gray);
    }
  }
}
</style>
