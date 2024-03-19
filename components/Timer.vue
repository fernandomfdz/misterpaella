<template>
    <div class="relative w-40 h-40">
  <svg class="w-full h-full" viewBox="0 0 100 100">
    <!-- Background circle -->
    <circle
      class="text-background stroke-current"
      stroke-width="3"
      
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    <!-- Progress circle -->
    <circle
      class="text-foreground  progress-ring__circle stroke-current"
      stroke-width="3"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dashoffset="calc(500 - (500 * 45) / 100)"
    ></circle>
    
    <!-- Center text -->
    <text x="50" y="50" font-family="Verdana" class="fill-foreground" font-size="12" text-anchor="middle" alignment-baseline="middle">70%</text>

  </svg>
</div>
  <div>
    <span class="progress-bar-seconds">{{ seconds }} Seconds left ...</span>
  </div>
</template>
<style scoped>
.progress-ring__circle {
  stroke-dasharray: 400, 400;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  setup(props) {
    const seconds = ref(0);
    let _timerId = null;

    onMounted(() => {
      seconds.value = props.value;
      if (seconds.value > 0) {
        _timerId = setInterval(() => {
          seconds.value--;
          if (seconds.value <= 0) {
            clearInterval(_timerId);
          }
        }, 1000);
      }
    });

    onUnmounted(() => clearInterval(_timerId));

    return {
      seconds,
    };
  },
};
</script>