<template>
  <div class="case-study-page">

    <section class="accent-bg">
      <div class="container header">
        <div class="centered">
          <h5>Case Study</h5>
          <h2 class="title white">{{title}}</h2>
          <h2 class="statement">{{statement}}</h2>
        </div>
      </div>
    </section>

    <section class="body">
      <div class="container">
        <v-more msg="Back to Work" link="/work" color="accent" direction="left"/>

        <p>
          <img src="http://via.placeholder.com/800x400/eceff1/b0bec5?text=800x400">
        </p>

        <blockquote>Even worse, it missed the chance to create a brand name with purpose behind it — one that could have propelled <strong>The Weinstein Company</strong> into its next chapter without ignoring the reality of its past.</blockquote>

        <p>
          Additionally, Alphabet is the perfect complement to Google (a “googol” is a number equal to one followed by 100 zeros). Not to mention that “alpha” means an excess return or abnormally high rate of return on an investment. In the context of investing, Alphabet is an alpha ... bet. A perfect story for the name of a publicly held company.
        </p>
        <p>
          So, what name should the Weinstein Company have gone with? Earlier this year, several company names were being considered when Maria Contreras-Sweet, former Small Business Administrator for President Barack Obama, was considering purchasing the company. All three of the leaked names, Wonder Hill, Assembly Hall and Creative Trade, tell a much richer, more relevant and more positive story than Lantern Entertainment.
        </p>

        <div class="tags">
          <span class="h6" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
        </div>

      </div>
    </section>

    <section class="next-case-study">
      <div class="container">

        <h4 class="gray">Next Case Study</h4>

      </div>
    </section>

    <v-case-study-intro id="123" color="light-gray-bg" :title="caseStudies[0].title" statement="A quick project statement here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia."/>

  </div>
</template>

<script>
export default {
  name: 'v-news',
  data () {
      return {
        title: "Client Name One",
        statement: "A quick project statement here",
        tags: ['naming', 'strategy'],
        caseStudies: [
          { title: 'Client Name One' }
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
  h2.title {
    margin-top: 20px;
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
    background-color: var(--accent);
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
      color: var(--gray);
      strong {
        color: var(--accent);
      }
      &:before {
          content: open-quote;
      }
      &:after {
          content: close-quote;
      }
    }
  }
}
.tags {
  margin-top: 80px;
  span {
    background-color: var(--accent);
    padding: 14px 28px;
    color: var(--white);
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
