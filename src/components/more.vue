<template>
  <router-link :to="link">
    <button :class="[color, direction, 'h6']">
      <svg
        class="left-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
      >
        <polygon
          fill="#FFFFFF"
          points="6 13 0 7 6 1 7.058 2.058 2.873 6.25 12 6.25 12 7.75 2.873 7.75 7.058 11.943"
          transform="translate(0 -1)"
        />
      </svg>
      {{ msg }}
      <svg
        class="right-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
      >
        <polygon
          fill="#FFFFFF"
          points="133 1 131.942 2.058 136.127 6.25 127 6.25 127 7.75 136.127 7.75 131.942 11.943 133 13 139 7"
          transform="translate(-127 -1)"
        />
      </svg>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "v-more",
  props: {
    msg: String,
    link: String,
    color: String,
    direction: {
      type: String,
      default: "right"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
button {
  margin-top: 40px;
  vertical-align: middle;
  padding: 0;
  svg {
    transition: all $fast $transition;
    vertical-align: middle;
    margin-top: -4px;
  }
  &:hover {
    .left-arrow {
      transform: translateX(-10px);
    }
    .right-arrow {
      transform: translateX(10px);
    }
  }
  &.accent {
    color: $accent;
    svg polygon {
      fill: $accent;
    }
  }
  &.white {
    color: $white;
    svg polygon {
      fill: $white;
    }
  }
  &.left {
    .left-arrow {
      margin-right: 20px;
    }
    .right-arrow {
      display: none;
    }
  }
  &.right {
    .left-arrow {
      display: none;
    }
    .right-arrow {
      margin-left: 20px;
    }
  }
}
</style>
