<template>
  <div class="work-page">

    <section class="accent-bg">
      <div class="container hero">
        <div class="centered">
          <h2 class="white">Client Name</h2>
          <h2>A quick project statement here</h2>
          <p class="description white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
          <v-more msg="View Case Study" link="/work/123" color="white"/>
        </div>
        <a href="#scroll-top" v-smooth-scroll="{ duration: 1000, offset: -80 }">
          <svg class="hero-advance" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <polygon fill="#FFFFFF" points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59" transform="translate(-592 -944)"/>
          </svg>
        </a>
      </div>
    </section>

    <div id="scroll-top">
      <div v-for="page in 10" :key="page" v-if="workPages(page).length || caseStudies[page]">

        <section>
          <div class="container case-studies">

            <div v-if="workPages(page).length" v-for="(caseStudy, index) in workPages(page)" :key="index" class="case-study">
              <img src="http://via.placeholder.com/220x220/eceff1/b0bec5?text=220x220">
              <div class="subtext">{{caseStudy.client}}</div>
              <h6 class="gray">{{caseStudy.client}}</h6>
            </div>

          </div>
        </section>

        <v-case-study-intro v-if="caseStudies[page]" id="123" :title="caseStudies[page].title" statement="A quick project statement here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia."/>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'v-work',
  data () {
      return {
        caseStudies: [
          { title: 'Client Name One' },
          { title: 'Client Name Two' },
          { title: 'Client Name Three' },
          { title: 'Client Name Four' }
        ],
        work: [
          { client: 'Client 1' },
          { client: 'Client 2' },
          { client: 'Client 3' },
          { client: 'Client 4' },
          { client: 'Client 5' },
          { client: 'Client 6' },
          { client: 'Client 7' },
          { client: 'Client 8' },
          { client: 'Client 9' },
          { client: 'Client 10' },
          { client: 'Client 11' },
          { client: 'Client 12' },
          { client: 'Client 13' },
          { client: 'Client 14' },
          { client: 'Client 15' },
          { client: 'Client 16' },
          { client: 'Client 17' },
          { client: 'Client 18' },
          { client: 'Client 19' },
          { client: 'Client 20' },
          { client: 'Client 21' },
          { client: 'Client 22' },
          { client: 'Client 23' },
          { client: 'Client 24' },
          { client: 'Client 25' },
          { client: 'Client 26' },
          { client: 'Client 27' },
          { client: 'Client 28' },
          { client: 'Client 29' },
          { client: 'Client 30' },
          { client: 'Client 31' },
          { client: 'Client 32' },
          { client: 'Client 33' },
          { client: 'Client 34' },
          { client: 'Client 35' },
          { client: 'Client 36' },
          { client: 'Client 37' },
          { client: 'Client 38' },
          { client: 'Client 39' },
          { client: 'Client 40' }
        ]
      }
   },
   methods: {
     workPages(pageNumber) {
       return this.work.slice((pageNumber*12-12), (pageNumber*12))
     }
   }
}
</script>

<style lang="scss" scoped>
#scroll-top section {
  padding-top: var(--component-padding-y);
  padding-bottom: 60px;
}
.case-studies {
  display: flex;
  flex-wrap: wrap;
  .case-study {
    width: calc((100% - 120px)/4);
    margin-bottom: 40px;
    margin-right: 40px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    img {
      display: block;
      margin-bottom: 10px;
    }
    .subtext {

    }
    h6 {

    }
  }
}
</style>
