<template>
  <div id="app">
    <v-header msg="Pass this value" />

    <transition name="fade">
      <router-view></router-view>
      <!-- component matched by the route will render here -->
    </transition>

    <v-footer msg="Pass this value" />
  </div>
</template>

<script>
import VHeader from "./components/header.vue";
import VFooter from "./components/footer.vue";

export default {
  name: "app",
  components: {
    VHeader,
    VFooter
  },
  created: function() {
    window.addEventListener("scroll", function() {
      var scroll = this.scrollY;
      var element = document.getElementById("header");
      if (scroll > 20) {
        element.classList.add("shadow");
      } else {
        element.classList.remove("shadow");
      }
    });
  }
};
</script>

<style>
#app {
  position: relative;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 300ms var(--transition);
}
.fade-enter-to {
  transition: all 300ms var(--transition);
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: all 300ms var(--transition);
}
.fade-leave-to {
  opacity: 0;
}
</style>
