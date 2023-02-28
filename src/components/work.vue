<template>
  <div class="work-page">
    <section class="accent-bg">
      <div class="container hero">
        <div class="centered" v-if="heroCaseStudy">
          <h2 class="white">{{ heroCaseStudy.client }}</h2>
          <h2>{{ heroCaseStudy.statement }}</h2>
          <p class="description white">{{ heroCaseStudy.quote }}</p>
          <v-more
            msg="View Case Study"
            :link="'/work/' + heroCaseStudy.id"
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
      <div v-for="(caseStudy, index) in caseStudies" :key="index">
        <section>
          <div class="container case-studies">
            <div
              v-for="(work, index) in caseStudy.workItems"
              :key="index"
              class="case-study"
            >
              <img
                v-if="work.image"
                :src="baseURL + 'assets/' + work.image.id"
              />
              <div v-else class="blank"></div>
              <div class="subtext">{{ work.name }}</div>
              <h6 class="gray">{{ work.description }}</h6>
            </div>
          </div>
        </section>

        <v-case-study-intro
          v-if="caseStudy"
          :id="caseStudy.id | $filters.toString()"
          :title="caseStudy.client"
          :statement="caseStudy.statement"
          :description="caseStudy.quote"
          spacing="spacing"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
const api = require("../api");

export default {
  name: "v-work",
  setup() {
    const heroCaseStudy = ref({});
    const caseStudies = ref([]);
    const work = ref([]);
    const baseURL = ref("");

    onMounted(async () => {
      try {
        baseURL.value = api.getUri();
        const caseStudiesItem = await api.get("/items/case_studies", {
          params: {
            "filter[status][_eq]": "published",
            limit: 10,
          },
        });
        caseStudies.value = caseStudiesItem.data.data;
        heroCaseStudy.value = caseStudies.value.shift();
        // console.log({ caseStudiesItem: caseStudiesItem });
        // console.log({ caseStudies: caseStudies });
        // console.log({ heroCaseStudy: heroCaseStudy });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Case Studies"', err);
      }
      try {
        const workItems = await api.get("/items/work", {
          params: {
            "fields[]": "*.*",
            "filter[status][_eq]": "published",
          },
        });
        work.value = workItems.data.data;
        // console.log({ workItems: workItems });
        // console.log({ work: work });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Work"', err);
      }

      const workSize = work.value.length;
      // console.log({workSize: workSize});
      const chunkSize = 12;
      caseStudies.value.forEach((caseStudy, index) => {
        const i = index + 1;
        const low = i * chunkSize - chunkSize;
        if (low <= workSize) {
          const high = i * chunkSize;
          caseStudy.workItems = work.value.slice(low, high);
        } else {
          caseStudy.workItems = [];
        }
      });
      // console.log({ caseStudies: caseStudies });
    });

    return {
      heroCaseStudy,
      caseStudies,
      work,
      baseURL,
    };
  },
  // methods: {
  //   workPages(pageNumber) {
  //     return this.work.slice(pageNumber * 12 - 12, pageNumber * 12);
  //   },
  // },
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
