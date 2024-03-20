<template>
<div class="flex flex-col gap-10">
    <Progress class="h-[2px]" :model-value="(position / innerSteps.length)*100" />
    <div>
        <div class="flex gap-10 w-full items-center">
            <div class="size-5 p-4 rounded-full bg-border flex items-center justify-center">
                {{ position+1 }}
            </div>
            <Label :for="currentStep.name" class="flex gap-4 items-center p-2 w-full cursor-pointer">
                <div class="flex flex-col gap-4 w-full items-start justify-start text-left">
                <span class="text-lg text-foreground">{{ currentStep.name }}</span>
                <span class="opacity-60 text-foreground" v-if="currentStep.description">{{ currentStep.description }}</span>
                </div>
            </Label>
            <Timer v-if="currentStep.timer" :value="currentStep.timer" @end="onTimerEnd"></Timer>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
    const props = defineProps(['steps','position']);
    const emit = defineEmits(['change','next'])
    const innerSteps = ref(props.steps);

    const currentStep = computed(() => {
        return innerSteps.value[props.position];
    })


    watch(() => props.steps, (newValue, oldValue) => innerSteps.value = props.steps);

    function onTimerEnd() {
        emit('next');
    }

</script>
