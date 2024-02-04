<template>
  <div
    class="card-inner"
    :class="
      navFunction.active == sectionName
        ? `animated active ${width ? animationFunction.animationIn : ''}`
        : width
        ? `animated hidden ${width ? animationFunction.animationOut : ''}`
        : ''
    "
    :id="sectionName"
  >
    <div class="card-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
import { animationFunction } from "../animationFunction";
import { navFunction } from "../navFunction";
export default {
  name: `BlogPostContainer`,
  props: {
    sectionName: {
      type: String,
    },
    extraCls: { type: String },
  },
  data() {
    return {
      width: false,
      navFunction,
      animationFunction,
    };
  },
  mounted() {
    let width = window.innerWidth;
    this.width = width > 1200 ? true : false;

    window.addEventListener("scroll", () => {
      width = window.innerWidth;
      this.width = width > 1200 ? true : false;
    });
  },
};
</script>
