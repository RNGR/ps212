<template>
  <div class="news-page">

    <section class="dark-gray-bg">
      <div class="container header">
        <div class="centered">
          <h5 class="accent">Category</h5>
          <h2 class="white">Article Title Lorem Ipsum Dolor Sit Amet</h2>
          <div class="description gray">By David Gaglione</div>
          <div class="description white">July 18, 2018</div>
        </div>
      </div>
    </section>

    <section class="body">
      <div class="container">
        <v-more msg="Back to News" link="/news" color="accent" direction="left"/>

        <p>
          There are few things more difficult to change than your name. Whether you are Ron Artest who legally changed his name to Metta World Peace or Elizabeth Woolridge Grant known to us as Lana Del Rey, legally changing one’s name requires multiple trips, phone calls and forms to get everything squared away. But people still go through the trouble of <a href="#">formally changing their names</a> because of what it achieves: to signal or say something new or different. The same can be said of companies that go through the process of changing their names.
        </p>
        <p>
          After several months of speculation, The Weinstein Company was reborn earlier this week as Lantern Entertainment, sharing the name with its parent company, Lantern Capital. An easy out  on the part of Lantern. Of course, Lantern is a source of light in a dark place and is a metaphor for illumination, but it is also common and overused.
        </p>
        <blockquote>Even worse, it missed the chance to create a brand name with purpose behind it — one that could have propelled The Weinstein Company into its next chapter without ignoring the reality of its past.</blockquote>
        <p>
          Google’s parent company, Alphabet, is a model to live by. It isn’t trite or meaningless; it is a name that reflects the personality of the brand and the people who support it. Alphabet reiterates what many have come to know Google for: the ability to transform the complicated and unknown into the universally accepted and useful. What better name to support that story than the building blocks of all language, the alphabet.
        </p>
        <p>
          <img src="http://via.placeholder.com/800x400/eceff1/b0bec5?text=800x400">
        </p>
        <p>
          Additionally, Alphabet is the perfect complement to Google (a “googol” is a number equal to one followed by 100 zeros). Not to mention that “alpha” means an excess return or abnormally high rate of return on an investment. In the context of investing, Alphabet is an alpha ... bet. A perfect story for the name of a publicly held company.
        </p>
        <p>
          So, what name should the Weinstein Company have gone with? Earlier this year, several company names were being considered when Maria Contreras-Sweet, former Small Business Administrator for President Barack Obama, was considering purchasing the company. All three of the leaked names, Wonder Hill, Assembly Hall and Creative Trade, tell a much richer, more relevant and more positive story than Lantern Entertainment.
        </p>
        <p>
          Wonder Hill, named for the hillside on which the Hollywood sign sits off the Wonder View Trail, suggests a place where magic happens. The name alone presents a bold, memorable and aspirational image. Assembly Hall is literally a place with open doors where people of all types come to gather and share stories. In the context of Contreras-Sweet's vision — an assembly of talent and a symbol of openness, dialogue, togetherness and creation. Lastly, Creative Trade says what the company does while suggesting how it is done — with all hands on deck and sleeves rolled up. It is uncommon, clever and creative.
        </p>
        <p>
          While we wish everyone involved in Lantern Entertainment the best of luck, the reality is that even though The Weinstein Group has taken its final bow, the legacy is a long ways away from being forgotten. It may have been easy to pick the name Lantern Entertainment, but the name alone only checks a box.
        </p>
        <p>
          Lantern Capital missed an opportunity to paint a picture that represents its vision and the culture it plans to  grow. Equally as important, if not more, it missed an opportunity to take a stand and, in doing so, to inspire not only those who work for the company but the world that has been so keenly watching.
        </p>

      </div>
    </section>

    <section class="next-article">
      <div class="container">

        <h4 class="gray">Next Article</h4>

      </div>
    </section>

    <v-article-intro color="light-gray-bg" link="/news/123" category="Test" title="Article Title Lorem Ipsum Dolor Sit Amet" by="David Gaglione" date="July 14th, 2018" text="There are few things more difficult to change than your name. Whether you are Ron Artest who legally changed his name to Metta World Peace or Elizabeth Woolridge Grant known to us as Lana Del Rey, legally changing one’s name requires multiple trips, phone calls and forms to get everything squared away. But people still go through the trouble of formally"/>

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
.header {
  margin-top: 120px;
  padding-top: var(--component-padding-y);
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
body { quotes: '“' '\201d'; }
.body {
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
    padding: 20px var(--component-padding-x) var(--component-padding-y);
    &::after {
      content: "";
      background-color: var(--light-gray);
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
      transition: color var(--fast) var(--transition);
      color: var(--dark-gray);
      text-decoration: underline;
      &:hover {
        color: var(--accent);
      }
    }
    img, iframe {
      width: 100%;
      margin: 20px 0;
    }
    blockquote {
      text-indent: -0.4em; // For hanging quote
      margin: 80px 40px;
      font-family: "Quarto", mono;
      font-size: 36px;
      line-height: 46px;
      color: var(--dark-gray);
      &:before {
          content: open-quote;
      }
      &:after {
          content: close-quote;
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
</style>
