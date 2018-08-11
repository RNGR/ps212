<template>
  <header id="header" :class="this.$route.name">
    <div class="container">
      <router-link to="/">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="110" height="26" viewBox="0 0 110 26">
          <path fill="#E53935" fill-rule="evenodd" d="M13.7220734,7.33807239 C13.7805233,7.36617721 13.8365292,7.39550397 13.8900913,7.42625634 C15.444817,8.33314572 16.0496815,10.2634169 16.0496815,14.3125466 C16.0496815,17.3657884 15.9087501,20.2102807 14.2063723,21.4646107 C14.0528141,21.584158 13.8823523,21.6880236 13.6870442,21.7796697 C22.014419,21.2310149 25.0031012,17.4254602 25.0031012,14.2308797 C25.0031012,9.95426395 22.4038132,7.98896358 16.0313522,7.44764044 C15.366205,7.39448568 14.5491288,7.35619796 13.7220734,7.33807239 Z M0,32.3979942 C1.61582312,31.7462883 2.21681808,30.3777061 2.21681808,27.655816 L2.21681808,12.0682347 C2.21681808,9.34634462 1.61582312,7.97796605 0,7.32626023 L10.8030423,7.32626023 L10.8030423,27.655816 C10.8030423,30.7866515 12.0359882,31.8729637 13.5320604,32.3979942 L0,32.3979942 Z M40.26096,7.0403243 C41.9959231,7.16374109 44.7106852,7.5488585 45.906769,7.89772477 L46.1861879,14.043107 C45.0200418,11.3387315 43.1231705,8.25331176 40.26096,7.0403243 Z M37.1537489,7.10040343 C36.2841289,7.57940721 35.531816,8.53211965 35.531816,10.3953873 C35.531816,13.1840773 37.8319303,14.500523 40.2668661,15.8941552 C40.6136958,16.0927218 40.9662279,16.2943433 41.3189637,16.5041111 C41.5024596,16.6126609 41.6875848,16.7208033 41.873321,16.8293531 C44.573216,18.4077031 47.3653681,20.0398189 47.3653681,24.0241853 C47.3653681,29.0663518 44.1756755,32.109207 38.3561461,32.6607131 C39.4776911,32.0189865 40.1664627,30.7141492 40.1664627,29.1248017 C40.1664627,26.4709334 38.1229576,25.3047873 34.7373459,23.3726832 C34.4886794,23.2307335 34.2320702,23.084507 33.9638525,22.9303378 C30.2953597,20.8923315 28.6595781,18.4233848 28.6595781,14.9247428 C28.6595781,11.7281257 30.9099998,7.88041383 37.1537489,7.10040343 Z M28.9748408,31.5194132 L28.5882978,24.2113471 C30.059931,28.0299359 33.0363937,31.3852026 35.3965871,32.6497155 C33.0184718,32.4124539 30.0678737,31.928766 28.9748408,31.5194132 Z M56.6387347,11.8313804 L56.5328325,11.8319914 C54.4834213,11.8680388 52.736646,12.4898069 51.3291651,13.6822249 C52.8792067,10.2560852 56.4949521,7 60.863825,7 C65.9518145,7 68.870031,9.36772871 68.870031,13.4964887 C68.870031,18.4506749 62.7169097,22.516301 56.7157174,24.7775165 C58.9551415,22.3258807 60.9367345,19.8807619 60.9367345,15.9855977 C60.9367345,13.3066794 59.410521,11.8313804 56.6387347,11.8313804 Z M49.6948091,32.3979942 L55.1231113,26.7495376 L65.0257813,26.7495376 C66.6953701,26.7495376 68.790197,25.8206531 70.0097015,23.2895907 L69.2624801,32.3979942 L49.6948091,32.3979942 Z M74.2740978,32.3979942 C75.8426723,31.7603407 76.4025283,30.4159938 76.4025283,27.655816 L76.4025283,12.6394956 C76.4025283,10.687433 76.133496,9.34573364 75.6011338,8.64963036 C75.1954469,8.12785839 74.6225568,7.8125957 73.9034402,7.5969218 C75.7548957,7.5614853 77.9943198,7.46861722 80.1754977,7.37819303 C81.5990676,7.31913219 83.0674423,7.25844209 84.4007917,7.21485926 C84.3360284,8.62356213 84.3360284,10.1055819 84.3360284,12.6394956 L84.3360284,27.655816 C84.3360284,30.6538664 85.0865084,31.8208272 86.4911381,32.3979942 L74.2740978,32.3979942 Z M96.6294404,11.8313804 L96.5233346,11.8319914 C94.4741271,11.8680388 92.7273518,12.4898069 91.3198709,13.6820213 C92.8697088,10.2560852 96.4854542,7 100.854123,7 C105.94252,7 108.860737,9.36772871 108.860737,13.4964887 C108.860737,18.4506749 102.707412,22.516301 96.7064232,24.7775165 C98.9458473,22.3258807 100.927237,19.8809656 100.927237,15.9855977 C100.927237,13.3066794 99.4008194,11.8313804 96.6294404,11.8313804 Z M89.6853113,32.3979942 L95.1136134,26.7495376 L105.016487,26.7495376 C106.686076,26.7495376 108.780495,25.8208568 110,23.289998 L109.252982,32.3979942 L89.6853113,32.3979942 Z" transform="translate(0 -7)"/>
        </svg>
      </router-link>
      <nav class="h6">
        <div id="menu">
          <div class="center">
            <router-link to="/work">Work</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/about">About</router-link>
            <a href="mailto:contact@ps212.com" target="_blank" class="button">Let's Talk</a>
          </div>
        </div>
        <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19">
          <path fill="#263238" d="M294,43 L324,43 L324,46 L294,46 L294,43 Z M294,51 L324,51 L324,54 L294,54 L294,51 Z M294,59 L324,59 L324,62 L294,62 L294,59 Z" transform="translate(-294 -43)"/>
        </svg>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  props: {
    msg: String
  },
  created() {
    // console.log(this.$route.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  transition: all var(--slow) var(--transition);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 10;
  background-color: var(--white);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.0);
  &.shadow {
    height: 80px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    #logo {
      top: 27px;
    }
    nav {
      top: 20px;
    }
  }
  #logo {
    transition: top var(--slow) var(--transition);
    position: absolute;
    left: var(--page-padding);
    top: 47px;
    &:hover path {
      fill: var(--dark-accent-x);
    }
    path {
      transition: fill var(--fast) var(--transition);
    }
  }
  #hamburger {
    position: absolute;
    top: 10px;
    right: 0;
    display: none;
    cursor: pointer;
    path {
      transition: all var(--fast) var(--transition);
    }
    &:hover path {
      fill: var(--accent);
    }
  }
  nav {
    transition: top var(--slow) var(--transition);
    position: absolute;
    right: var(--page-padding);
    top: 40px;
    a {
      transition: all var(--fast) var(--transition);
      margin-left: 60px;
      color: var(--dark-gray);
      line-height: 40px;
      padding-bottom: 2px;
      border-bottom: 2px solid var(--white);
      &:hover,
      &.router-link-active {
        border-bottom: 2px solid var(--dark-gray);
      }
      &.button {
        background-color: var(--accent);
        padding: 13px 22px;
        color: var(--white);
        border: none;
        &:hover,
        &.active {
          background-color: var(--dark-accent);
          border: none;
        }
      }
    }
  }

  // Alt colors
  &.news {
    background-color: var(--dark-gray);
    #logo {
      path {
        fill: var(--white);
      }
      &:hover path {
        fill: var(--light-gray);
      }
    }
    nav {
      a {
        color: var(--white);
        border-bottom: 2px solid var(--dark-gray);
        &:hover,
        &.router-link-active {
          border-bottom: 2px solid var(--white);
        }
        &.button {
          background-color: var(--white);
          color: var(--dark-gray);
          border: none;
          &:hover,
          &.active {
            background-color: var(--light-gray);
            border: none;
          }
        }
      }
    }
  }
  &.work {
    background-color: var(--accent);
    #logo {
      path {
        fill: var(--white);
      }
      &:hover path {
        fill: var(--light-gray);
      }
    }
    nav {
      a {
        color: var(--white);
        border-bottom: 2px solid var(--accent);
        &:hover,
        &.router-link-active {
          border-bottom: 2px solid var(--white);
        }
        &.button {
          background-color: var(--white);
          color: var(--dark-gray);
          border: none;
          &:hover,
          &.active {
            background-color: var(--light-gray);
            border: none;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  header #menu {
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--white);
    text-align: center;
    display: none;
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    a {
      font-family: "Quarto", mono;
      font-size: 48px;
      line-height: 67px;
      border: none;
      margin-left: 0;
      margin-bottom: 40px;
      display: block;
      &.button {
        font-family: "Gotham HTF", mono;
        font-size: 16px;
        line-height: 18px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
  header #hamburger {
    display: inline-block;
  }
}
</style>
