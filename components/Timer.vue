<template>
  <div class="text-foreground">{{ format(seconds) }}</div>
</template>
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

    function format(time) {
      // Hours, minutes and seconds
      var hrs = ~~(time / 3600);
      var mins = ~~((time % 3600) / 60);
      var secs = ~~time % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
      ret += "" + String(mins).padStart(2, '0') + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    }


    return {
      seconds,
      format
    };
  },
};
</script>