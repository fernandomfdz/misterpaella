<template>
  <ClientOnly>
    <div class="text-foreground">{{ format(seconds) }}</div>
  </ClientOnly>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";

import timerSound from "~/assets/sound/timer.mp3";


export default {
  props: {
    value: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  emits: ['end'],
  setup(props, {emit}) {
    const seconds = ref(0);
    let _timerId = null;

    onMounted(() => {
      onValueChange();
    });

    if (process.client) {
        var audio = new Audio(timerSound);
    }

    watch(() => props.value, onValueChange);

    function onValueChange() {
      clearInterval(_timerId);
      seconds.value = props.value;
      if (seconds.value > 0) {
        _timerId = setInterval(() => {
          if(seconds.value === 15) {
            audio.play();
          }
          seconds.value--;
          if (seconds.value <= 0) {
            clearInterval(_timerId);
          }
        }, 1000);
      }
    }

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