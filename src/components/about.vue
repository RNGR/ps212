<template>
  <div class="about-page">
    <section class="background">
      <div class="container hero">
        <div class="centered">
          <h2 class="accent">{{ about.about_heading_one }}</h2>
          <h2>{{ about.about_heading_two }}</h2>
          <p class="description">{{ about.about_heading_description }}</p>
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
              fill="#E53935"
              points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59"
              transform="translate(-592 -944)"
            />
          </svg>
        </a>
      </div>
    </section>

    <section id="scroll-top" class="white dark-gray-bg our-story">
      <div class="container">
        <h5 class="accent">Our Story</h5>
        <h3 class="gray" v-html="our_story"></h3>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h3 class="center">Services &amp; Offerings</h3>
        <div class="service gray">
          <div v-for="(service, index) in services" :key="index">
            <h5 class="accent">{{ service.name }}</h5>
            <p v-html="service.description"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="staff">
      <div class="container">
        <h3 class="center">Our Team</h3>
        <div class="leadership">
          <div
            v-for="(leader, index) in leadership"
            :key="index"
            v-on:click="showUserDetail = leader.id"
          >
            <img
              v-if="leader.image"
              :src="
                baseURL +
                'assets/' +
                leader.image.id +
                '?key=thumbnail-600-best'
              "
            />
            <div class="subtext">{{ leader.name }}</div>
            <h6>{{ leader.title }}</h6>
            <p class="gray">{{ leader.short_bio }}</p>
            <h6
              class="load-user accent"
              v-on:click="showUserDetail = leader.id"
            >
              Show More
            </h6>
          </div>
        </div>

        <div class="team">
          <div
            v-for="(member, index) in staff"
            :key="index"
            v-on:click="showUserDetail = member.id"
          >
            <img
              v-if="member.image"
              :src="
                baseURL +
                'assets/' +
                member.image.id +
                '?key=thumbnail-200-best'
              "
            />
            <div class="subtext">{{ member.name }}</div>
            <h6>{{ member.title }}</h6>
            <h6
              class="load-user accent"
              v-on:click="showUserDetail = member.id"
            >
              Show More
            </h6>
          </div>
        </div>
      </div>
    </section>

    <section class="careers" v-if="careers.length > 0">
      <div class="container">
        <h3 class="center">We&rsquo;re Hiring!</h3>

        <v-career
          v-for="(career, index) in careers"
          :key="index"
          :link="career.link"
          :category="career.category"
          :title="career.title"
          :location="career.location"
          :text="career.description"
        />
      </div>
    </section>

    <section class="locations">
      <div class="container">
        <h3 class="center">Locations</h3>
        <div class="office" v-for="(office, index) in offices" :key="index">
          <img
            v-if="office.image"
            :src="
              baseURL + 'assets/' + office.image.id + '?key=thumbnail-800-best'
            "
          />
          <div class="subtext">{{ office.name }}</div>
          <h6 v-html="$filters.nl2br(office.address)"></h6>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h3 class="center">Ready to get started?</h3>
        <a href="mailto:contact@ps212.com" target="_blank"
          ><button>Say Hello</button></a
        >
        <div class="logos">
          <div>
            <img
              v-if="about.logo_1"
              :src="baseURL + 'assets/' + about.logo_1.id"
            />
          </div>
          <div>
            <img
              v-if="about.logo_2"
              :src="baseURL + 'assets/' + about.logo_2.id"
            />
          </div>
          <div>
            <img
              v-if="about.logo_3"
              :src="baseURL + 'assets/' + about.logo_3.id"
            />
          </div>
          <div>
            <img
              v-if="about.logo_4"
              :src="baseURL + 'assets/' + about.logo_4.id"
            />
          </div>
          <div>
            <img
              v-if="about.logo_5"
              :src="baseURL + 'assets/' + about.logo_5.id"
            />
          </div>
          <div>
            <img
              v-if="about.logo_6"
              :src="baseURL + 'assets/' + about.logo_6.id"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="user-detail" v-if="showUserDetail">
      <div class="smoke" v-on:click="showUserDetail = false"></div>

      <div
        class="modal"
        v-for="(leader, index) in leadership"
        :key="index"
        v-show="showUserDetail === leader.id"
      >
        <h3>{{ leader.name }}</h3>
        <h6>{{ leader.title }}</h6>
        <p class="gray" v-html="leader.bio"></p>

        <div class="close" v-on:click="showUserDetail = false">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon
                fill="#FFFFFF"
                points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"
              ></polygon>
            </g>
          </svg>
        </div>
      </div>

      <div
        class="modal"
        v-for="(member, index) in staff"
        :key="index"
        v-show="showUserDetail === member.id"
      >
        <h3>{{ member.name }}</h3>
        <h6>{{ member.title }}</h6>
        <p class="gray" v-html="member.bio"></p>

        <div class="close" v-on:click="showUserDetail = false">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon
                fill="#FFFFFF"
                points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"
              ></polygon>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
const api = require("../api");

export default {
  name: "v-about",
  setup() {
    const about = ref({});
    const our_story = ref("");
    const services = ref([]);
    const leadership = ref([]);
    const staff = ref([]);
    const careers = ref([]);
    const offices = ref([]);
    const showUserDetail = ref(false);
    const baseURL = ref("");

    onMounted(async () => {
      try {
        baseURL.value = api.getUri();
        const aboutItem = await api.get("/items/about/1", {
          params: {
            "fields[]": "*.*",
          },
        });
        about.value = aboutItem.data.data;
        our_story.value = !about.value.our_story
          ? ""
          : "“" +
            about.value.our_story
              .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
              .trim() +
            "”";
        // console.log({ aboutItem: aboutItem });
        // console.log({ about: about });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "About"', err);
      }
      try {
        const serviceItems = await api.get("/items/services", {
          params: {
            "fields[]": "*",
          },
        });
        services.value = serviceItems.data.data;
        // console.log({ serviceItems: serviceItems });
        // console.log({ services: services });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Services"', err);
      }
      try {
        const leadershipItems = await api.get("/items/team", {
          params: {
            "fields[]": "*,image.*",
            "filter[leadership][_eq]": "1",
            "filter[status][_eq]": "published",
            sort: "sort",
          },
        });
        leadership.value = leadershipItems.data.data;
        // console.log({ leadershipItems: leadershipItems });
        // console.log({ leadership: leadership });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Leadership"', err);
      }
      try {
        const staffItems = await api.get("/items/team", {
          params: {
            "fields[]": "*,image.*",
            "filter[leadership][_eq]": "0",
            "filter[status][_eq]": "published",
            sort: "sort",
          },
        });
        staff.value = staffItems.data.data;
        // console.log({ staffItems: staffItems });
        // console.log({ staff: staff });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Staff"', err);
      }
      try {
        const careersItems = await api.get("/items/careers", {
          params: {
            "fields[]": "*",
            "filter[status][_eq]": "published",
          },
        });
        careers.value = careersItems.data.data;
        // console.log({ careersItems: careersItems });
        // console.log({ careers: careers });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Careers"', err);
      }
      try {
        const officesItems = await api.get("/items/offices", {
          params: {
            "fields[]": "*,image.*",
            "filter[status][_eq]": "published",
          },
        });
        offices.value = officesItems.data.data;
        // console.log({ officesItems: officesItems });
        // console.log({ offices: offices });
      } catch (err) {
        // eslint-disable-next-line
        console.log('Error fetching "Offices"', err);
      }
    });
    return {
      about,
      our_story,
      services,
      leadership,
      staff,
      careers,
      offices,
      showUserDetail,
      baseURL,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/_variables.scss";
.about-page {
  .background {
    width: 100%;
    height: 100%;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(./images/about-hero.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      opacity: 0.2;
      -webkit-filter: grayscale(1);
      -webkit-filter: grayscale(100%);
      filter: gray;
      filter: grayscale(100%);
    }
  }
}
.our-story {
  padding-top: 100px;
  padding-top: var(--component-padding-y);
  padding-bottom: 100px;
  padding-bottom: var(--component-padding-y);
  h3 {
    margin-top: 40px;
    max-width: 800px;
    // text-indent: -0.4em; // For hanging quote
    b,
    strong {
      color: $white;
      font-weight: inherit;
    }
  }
}
h3.center {
  padding-top: 100px;
  padding-top: var(--component-padding-y);
  text-align: center;
}
.services {
  position: relative;
  &::before {
    content: "";
    background-color: $dark-gray;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
  }
  .container {
    background-color: $white;
    border-bottom: 2px solid $light-gray;
  }
  .service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px;
    padding: var(--component-padding-y) var(--component-padding-x);
    div {
      width: calc((100% - 40px) / 2);
      h5 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
        margin-bottom: 100px;
        margin-bottom: var(--component-padding-y);
        &:nth-of-type(2n) {
          margin-bottom: 0;
        }
      }
    }
  }
}
.staff {
  .container {
    border-bottom: 2px solid $light-gray;
  }
  img {
    max-width: 100%;
  }
  .leadership > div,
  .team > div {
    transition: all $fast $transition;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .leadership {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 100px 0 100px;
    padding: var(--component-padding-y) var(--component-padding-x) 0
      var(--component-padding-x);
    & > div {
      width: calc((100% - 40px) / 2);
      h6 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 0 0 100px 0;
        margin: 0 0 var(--component-padding-y) 0;
        &:nth-of-type(2n) {
          margin-bottom: 0;
        }
      }
    }
  }
  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x)
      var(--component-padding-y) var(--component-padding-x);
    & > div {
      width: calc((100% - 120px) / 4);
      h6 {
        margin-bottom: 20px;
        &.accent {
          margin-bottom: 60px;
        }
      }
      @media only screen and (max-width: 800px) {
        width: calc((100% - 40px) / 2);
        margin: 0;
        margin-bottom: 100px;
        margin-bottom: var(--component-padding-y);
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      @media only screen and (max-width: 500px) {
        width: 100%;
        margin-bottom: 100px;
        margin-bottom: var(--component-padding-y);
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
.careers {
  .container {
    padding: 0 100px 100px 100px;
    padding: 0 var(--component-padding-x) var(--component-padding-y)
      var(--component-padding-x);
    border-bottom: 2px solid $light-gray;
  }
}
.locations {
  .container {
    padding: 0 100px 100px 100px;
    padding: 0 var(--component-padding-x) var(--component-padding-y)
      var(--component-padding-x);
    border-bottom: 2px solid $light-gray;
  }
  .office {
    margin-top: 60px;
    img {
      max-width: 100%;
    }
  }
}
.cta {
  button {
    transition: all $slow $transition;
    display: block;
    color: $white;
    background-color: $accent;
    padding: 10px 40px;
    margin: 70px auto;
    width: 100%;
    max-width: 400px;
    &:hover {
      background-color: $dark-accent;
    }
  }
  .logos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 100px 100px 0 100px;
    padding: var(--component-padding-y) var(--component-padding-x) 0
      var(--component-padding-x);
    div {
      text-align: center;
      img {
        max-width: 100px;
        max-height: 100px;
        margin-bottom: var(--component-padding-y);
      }
    }
    @media only screen and (max-width: 800px) {
      div {
        flex: 1 0 33%;
      }
    }
    @media only screen and (max-width: 500px) {
      div {
        flex: 1 0 50%;
      }
    }
  }
}
.user-detail {
  transition: $fast $transition opacity;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  .smoke {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $dark-gray;
    opacity: 0.9;
    z-index: 12;
  }
  .modal {
    background-color: $white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 40px 60px 40px;
    width: calc(100% - 40px);
    overflow: scroll;
    max-width: 600px;
    z-index: 13;
    @media only screen and (max-width: 800px) {
      padding: 20px;
      height: calc(100% - 40px);
    }
    h3 {
      margin-bottom: 0;
    }
    h6 {
      margin-bottom: 40px;
    }
  }
  .close {
    polygon {
      fill: $accent;
    }
    display: block;
    position: absolute;
    right: 40px;
    top: 40px;
    transition: $fast $transition all;
    cursor: pointer;
    &:hover {
      color: $light-gray;
    }
  }
}
.load-user {
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: $dark-accent;
  }
}
@media only screen and (max-width: 800px) {
  .services,
  .staff,
  .careers,
  .locations {
    padding-left: 0;
    padding-right: 0;
  }
  .careers .career {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
