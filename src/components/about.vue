<template>
  <div class="about-page">

    <section class="background">
      <div class="container hero">
        <div class="centered">
          <h2 class="accent">{{about.about_heading_one}}</h2>
          <h2>{{about.about_heading_two}}</h2>
          <p class="description gray">{{about.about_heading_description}}</p>
        </div>
        <a href="#scroll-top" v-smooth-scroll="{ duration: 1000, offset: -80 }">
          <svg class="hero-advance" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <polygon fill="#E53935" points="608 952 600 960 592 952 593.41 950.59 599 956.17 599 944 601 944 601 956.17 606.59 950.59" transform="translate(-592 -944)"/>
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
            <h5 class="accent">{{service.name}}</h5>
            <p>{{service.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="staff">
      <div class="container">
        <h3 class="center">Leadership &amp; Team</h3>
        <div class="leadership">
          <div v-for="(leader, index) in leadership" :key="index" v-on:click="showUserDetail = leader.id">
            <img v-if="leader.image" :src="$path + '/thumbnail/' + $project + '/600/600/crop/best/' + leader.image.filename">
            <div class="subtext">{{leader.name}}</div>
            <h6>{{leader.title}}</h6>
            <p class="gray">{{leader.short_bio}}</p>
            <h6 class="load-user accent" v-on:click="showUserDetail = leader.id">Show More</h6>
          </div>
        </div>

        <div class="team">
          <div v-for="(member, index) in staff" :key="index" v-on:click="showUserDetail = member.id">
            <img v-if="member.image" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + member.image.filename">
            <div class="subtext">{{member.name}}</div>
            <h6>{{member.title}}</h6>
          </div>
        </div>

      </div>
    </section>

    <section class="careers" v-if="careers.length > 0">
      <div class="container">
        <h3 class="center">Career Opportunities</h3>

        <v-career v-for="(career, index) in careers" :key="index" link="mailto:careers@ps212.com" :category="career.category" :title="career.title" :location="career.office.name" :text="career.description"/>

      </div>
    </section>

    <section class="locations">
      <div class="container">
        <h3 class="center">Locations</h3>
        <div class="office" v-for="(office, index) in offices" :key="index">
          <img v-if="office.image" :src="$path + '/thumbnail/' + $project + '/800/400/crop/best/' + office.image.filename">
          <div class="subtext">{{office.name}}</div>
          <h6 v-html="$options.filters.nl2br(office.address)"></h6>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h3 class="center">Ready to get started?</h3>
        <a href="mailto:contact@ps212.com" target="_blank"><button>Contact Us</button></a>
        <div class="logos">
          <div><img v-if="about.logo_1" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_1.filename"></div>
          <div><img v-if="about.logo_2" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_2.filename"></div>
          <div><img v-if="about.logo_3" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_3.filename"></div>
          <div><img v-if="about.logo_4" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_4.filename"></div>
          <div><img v-if="about.logo_5" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_5.filename"></div>
          <div><img v-if="about.logo_6" :src="$path + '/thumbnail/' + $project + '/200/200/crop/best/' + about.logo_6.filename"></div>
        </div>
      </div>
    </section>

    <div class="user-detail" v-if="showUserDetail">

      <div class="smoke" v-on:click="showUserDetail = false"></div>

      <div class="modal" v-for="(leader, index) in leadership" :key="index" v-show="showUserDetail === leader.id">
        <h3>{{leader.name}}</h3>
        <h6>{{leader.title}}</h6>
        <p class="gray">{{leader.bio}}</p>

        <div class="close" v-on:click="showUserDetail = false">
          <svg width="20px" height="20px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#FFFFFF" points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"></polygon></g>
          </svg>
        </div>
      </div>

      <div class="modal" v-for="(member, index) in staff" :key="index" v-show="showUserDetail === member.id">
        <h3>{{member.name}}</h3>
        <h6>{{member.title}}</h6>
        <p class="gray">{{member.bio}}</p>

        <div class="close" v-on:click="showUserDetail = false">
          <svg width="20px" height="20px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#FFFFFF" points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"></polygon></g>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'v-about',
  data () {
    return {
      about: {},
      services: [],
      leadership: [],
      staff: [],
      careers: [],
      offices: [],
      showUserDetail: false
    }
  },
  computed: {
    our_story: function () {
      return !this.about.our_story ? '' : '“' + this.about.our_story.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").trim() + '”'
    }
  },
  created: function () {
    this.$api.getItem('about', 1, {
      "fields": "*.*"
    }).then(res => {
      this.about = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "About"', err));

    this.$api.getItems('services').then(res => {
      this.services = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "Services"', err));

    this.$api.getItems('team', {
      "filter[leadership][eq]": "1",
      "fields": "*,image.*",
      "filter[status][eq]": "published"
    }).then(res => {
      this.leadership = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "Leadership"', err));

    this.$api.getItems('team', {
      "filter[leadership][eq]": "0",
      "fields": "*,image.*",
      "filter[status][eq]": "published"
    }).then(res => {
      this.staff = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "Staff"', err));

    this.$api.getItems('careers', {
      "fields": "*,office.*",
      "filter[status][eq]": "published"
    }).then(res => {
      this.careers = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "Careers"', err));

    this.$api.getItems('offices', {
      "fields": "*,image.*",
      "filter[status][eq]": "published"
    }).then(res => {
      this.offices = res.data;
      // eslint-disable-next-line
    }).catch(err => console.log('Error fetching "Offices"', err));
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  .background {
    background-image: url('/images/vintage-office.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }
}
.our-story {
  padding-top: var(--component-padding-y);
  padding-bottom: var(--component-padding-y);
  h3 {
    margin-top: 40px;
    max-width: 800px;
    // text-indent: -0.4em; // For hanging quote
    strong {
      color: var(--white);
      font-weight: inherit;
    }
  }
}
h3.center {
  padding-top: var(--component-padding-y);
  text-align: center;
}
.services {
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
    border-bottom: 2px solid var(--light-gray);
  }
  .service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    div {
      width: calc((100% - 40px) / 2);
      h5 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 0 0 var(--component-padding-y) 0;
        &:nth-of-type(2n) {
          margin-bottom: 0;
        }
      }
    }
  }
}
.staff {
  .container {
    border-bottom: 2px solid var(--light-gray);
  }
  img {
    max-width: 100%;
  }
  .leadership > div,
  .team > div {
    transition: all var(--fast) var(--transition);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .leadership {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) 0 var(--component-padding-x);
    &> div {
      width: calc((100% - 40px) / 2);
      h6 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 800px) {
        width: 100%;
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
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    &> div {
      width: calc((100% - 120px) / 4);
      h6 {
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 800px) {
        width: calc((100% - 40px) / 2);
        margin: 0 0 var(--component-padding-y) 0;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      @media only screen and (max-width: 500px) {
        width: 100%;
        margin: 0 0 var(--component-padding-y) 0;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
.careers {
  .container {
    padding: 0 var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    border-bottom: 2px solid var(--light-gray);
  }
}
.locations {
  .container {
    padding: 0 var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    border-bottom: 2px solid var(--light-gray);
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
    transition: all var(--slow) var(--transition);
    display: block;
    color: var(--white);
    background-color: var(--accent);
    padding: 10px 40px;
    margin: 70px auto;
    width: 100%;
    max-width: 400px;
    &:hover {
      background-color: var(--dark-accent);
    }
  }
  .logos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: var(--component-padding-y) var(--component-padding-x) 0 var(--component-padding-x);
    div {
      text-align: center;
      img {
        max-width: 100px;
        max-height: 100px;
        border-radius: 100%;
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
  transition: var(--fast) var(--transition) opacity;
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
    background-color: var(--dark-gray);
    opacity: 0.9;
    z-index: 12;
  }
  .modal {
    background-color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    padding: 40px 40px 60px 40px;
    max-width: 600px;
    z-index: 13;
    h3 {
      margin-bottom: 0;
    }
    h6 {
      margin-bottom: 40px;
    }
  }
  .close {
    polygon {
      fill: var(--accent);
    }
    display: block;
    position: absolute;
    right: 40px;
    top: 40px;
    transition: var(--fast) var(--transition) all;
    cursor: pointer;
    &:hover {
      color: var(--light-gray);
    }
  }
}
.load-user {
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: var(--dark-accent);
  }
}
</style>
