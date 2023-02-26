<template>
  <div class="work-page">
    <section class="accent-bg">
      <div class="container hero">
        <div class="centered" v-if="caseStudies[0]">
          <h2 class="white">{{ caseStudies[0].client }}</h2>
          <h2>{{ caseStudies[0].statement }}</h2>
          <p class="description white">{{ caseStudies[0].quote }}</p>
          <v-more
            msg="View Case Study"
            :link="'/work/' + caseStudies[0].id"
            color="white"
          />
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
              fill="#FFFFFF"
              points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59"
              transform="translate(-592 -944)"
            />
          </svg>
        </a>
      </div>
    </section>

    <div id="scroll-top">
      <div
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
        workItems="caseStudy.workItems"
      >
        <section>
          <div class="container case-studies">
            <div
              v-for="(work, index) in workItems"
              :key="index"
              class="case-study"
            >
              <img
                v-if="work.image"
                :src="$path + '/uploads/_/originals/' + work.image.filename"
              />
              <div v-else class="blank"></div>
              <div class="subtext">{{ work.name }}</div>
              <h6 class="gray">{{ work.description }}</h6>
            </div>
          </div>
        </section>

        <v-case-study-intro
          v-if="caseStudies[index]"
          :id="caseStudies[index].id | toString"
          :title="caseStudies[index].client"
          :statement="caseStudies[index].statement"
          :description="caseStudies[index].quote"
          spacing="spacing"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-work",
  data() {
    return {
      caseStudies: [],
      work: [],
    };
  },
  // methods: {
  //   workPages(pageNumber) {
  //     return this.work.slice(pageNumber * 12 - 12, pageNumber * 12);
  //   },
  // },
  created: function () {
    this.$api
      .get("/items/case_studies", {
        params: {
          "filter[status][_eq]": "published",
          limit: 10,
        },
      })
      .then(
        function (res) {
          this.caseStudies = res.data;
        }.bind(this)
      )
      // eslint-disable-next-line
      .catch((err) => console.log('Error fetching "Case Studies"', err));

    this.$api
      .get("/items/work", {
        params: {
          "fields[]": "*.*",
          "filter[status][_eq]": "published",
        },
      })
      .then(
        function (res) {
          this.work = res.data;
          this.workSize = res.data.length;
        }.bind(this)
      )
      // eslint-disable-next-line
      .catch((err) => console.log('Error fetching "Work"', err));

    const chunkSize = 12;
    this.caseStudies.array.forEach((caseStudy, index) => {
      const i = index + 1;
      const low = i * chunkSize - chunkSize;
      if (low <= this.workSize) {
        const high = i * chunkSize;
        caseStudy.workItems = this.work.slice(low, high);
      } else {
        caseStudy.workItems = [];
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/_variables.scss";
#scroll-top {
  margin-top: 60px;
}
.case-studies {
  display: flex;
  flex-wrap: wrap;
  .case-study {
    width: calc((100% - 120px) / 4);
    margin-bottom: 40px;
    margin-right: 40px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    img {
      display: block;
      margin-bottom: 10px;
      max-width: 100%;
    }
    .blank {
      background-color: $dark-gray;
      display: block;
      margin-bottom: 10px;
      max-width: 100%;
      padding-bottom: 100%;
    }
    .subtext {
    }
    h6 {
    }
    @media only screen and (max-width: 1050px) {
      width: calc((100% - 40px) / 2);
      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    @media only screen and (max-width: 800px) {
      width: calc((100% - 20px) / 2);
      margin-bottom: 20px;
      margin-right: 20px;
    }
  }
}
</style>
