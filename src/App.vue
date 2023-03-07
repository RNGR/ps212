<template>
  <div id="app">
    <v-header msg="Pass this value" />

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

    <v-footer msg="Pass this value" />
  </div>
</template>

<script>
import VHeader from "./components/header.vue";
import VFooter from "./components/footer.vue";
import { onMounted, onUnmounted } from "vue";

export default {
  name: "app",
  components: {
    VHeader,
    VFooter,
  },
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      let scroll = window.scrollY;
      let element = document.getElementById("header");
      if (scroll > 20) {
        element.classList.add("shadow");
      } else {
        element.classList.remove("shadow");
      }
    };
  },
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
