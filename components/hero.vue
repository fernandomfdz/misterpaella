<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="pt-6 pb-12 md:pt-40 md:pb-20">
      <div class="text-center pb-12 md:pb-16">
        <h1 class="z-20 text-6xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
          Haz una paella
            <div class="mt-4 flex flex-wrap gap-0 md:gap-4 items-center justify-center">
                <span :class="{'opacity-20' : index !== 0}" class="transition-all ease-in-out delay-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Buena.</span>
                <span :class="{'opacity-20' : index !== 1}" class="transition-all ease-in-out delay-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Fácil.</span>
                <span :class="{'opacity-20' : index !== 2}" class="transition-all ease-in-out delay-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Exacta.</span>
            </div>
        </h1>
        <div class="z-20 max-w-3xl mx-auto">
          <p class="text-xl mb-8 aos-init aos-animate text-muted-foreground">
            No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo
          </p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate">
            <div>
              <steps></steps>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue';
import calculator from './calculator.vue';
export default {
  components: { calculator },
    setup() {
        const index = ref(0);

        setInterval(() => {
            if(index.value + 1 > 2) {
                index.value = 0;
            } else {
                index.value++;
            }
        }, 3000);
        return {index};
    },
}
</script>