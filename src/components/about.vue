<template>
  <div class="about-page">

    <section>
      <div class="container hero">
        <div class="centered">
          <h2 class="accent">Who are we?</h2>
          <h2>Short. Company. Purpose.</h2>
          <p class="description gray">We specialize in bringing sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
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
        <h3 class="gray">PS212 was <strong>founded in 2011</strong> out of a need for lorem ipsum dolor sit mauris pharetra at massa sed lacinia omnibus. Mauris pharetra at sit.</h3>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h3 class="center">Services &amp; Offerings</h3>

        <div class="service gray">
          <div>
            <h5 class="accent">Naming</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
          </div>

          <div>
            <h5 class="accent">Consulting</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
          </div>
        </div>

      </div>
    </section>

    <section class="staff">
      <div class="container">
        <h3 class="center">Leadership &amp; Team</h3>

        <div class="leadership">
          <div>
            <img src="http://via.placeholder.com/380x380/eceff1/b0bec5?text=380x380">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
            <p class="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
            <!-- <v-more msg="Read More" link="/staff/123" color="accent"/> -->
          </div>

          <div>
            <img src="http://via.placeholder.com/380x380/eceff1/b0bec5?text=380x380">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
            <p class="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra at massa sed lacinia.</p>
            <!-- <v-more msg="Read More" link="/staff/123" color="accent"/> -->
          </div>
        </div>

        <div class="team">
          <div>
            <img src="http://via.placeholder.com/170x170/eceff1/b0bec5?text=170x170">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
          </div>
          <div>
            <img src="http://via.placeholder.com/170x170/eceff1/b0bec5?text=170x170">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
          </div>
          <div>
            <img src="http://via.placeholder.com/170x170/eceff1/b0bec5?text=170x170">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
          </div>
          <div>
            <img src="http://via.placeholder.com/170x170/eceff1/b0bec5?text=170x170">
            <div class="subtext">David Gaglione</div>
            <h6>Founding Partner</h6>
          </div>
        </div>

      </div>
    </section>

    <section class="locations">
      <div class="container">
        <h3 class="center">Locations</h3>

        <div class="office">
          <img src="http://via.placeholder.com/800x380/eceff1/b0bec5?text=800x380">
          <div class="subtext">New York</div>
          <h6>66 West Broadway, Suite 600<br>New York NY 10007</h6>
        </div>
        <div class="office">
          <img src="http://via.placeholder.com/800x380/eceff1/b0bec5?text=800x380">
          <div class="subtext">Seattle</div>
          <h6>10400 NE 4 Street, Suite 7145<br>Bellevue, WA 98004</h6>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h3 class="center">Ready to get started?</h3>
        <button>Contact Us</button>
        <div class="logos">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
          <img src="http://via.placeholder.com/100x100/eceff1/b0bec5?text=100x100">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'v-about',
  data () {
      return {
        foo: 'bar'
      }
   }
}
</script>

<style lang="scss" scoped>
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
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    div {
      width: calc((100% - 40px) / 2);
      h5 {
        margin-bottom: 20px;
      }
    }
  }
}
.staff {
  .container {
    border-bottom: 2px solid var(--light-gray);
  }
  .leadership {
    display: flex;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) 0 var(--component-padding-x);
    &> div {
      width: calc((100% - 40px) / 2);
      h6 {
        margin-bottom: 20px;
      }
    }
  }
  .team {
    display: flex;
    justify-content: space-between;
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    &> div {
      width: calc((100% - 120px) / 4);
      h6 {
        margin-bottom: 20px;
      }
    }
  }
}
.locations {
  .container {
    padding: 0 var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    border-bottom: 2px solid var(--light-gray);
  }
  .office {
    margin-top: 60px;
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
    padding: var(--component-padding-y) var(--component-padding-x) var(--component-padding-y) var(--component-padding-x);
    img {
      border-radius: 100%;
    }
  }
}
</style>
