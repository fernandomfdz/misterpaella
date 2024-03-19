<template>
<div class="flex flex-col gap-10">
    <Progress class="h-[2px]" :model-value="(currentPosition / innerSteps.length)*100" />
    <div v-if="innerSteps[currentPosition-1]"  class="opacity-20" @click="onPreviousStep">
        <div class="flex gap-10 w-full items-center">
            <div class="size-5 p-4 rounded-full bg-border flex items-center justify-center">
                {{ currentPosition }}
            </div>
            <Label :for="innerSteps[currentPosition-1].name" class="flex gap-4 items-center p-2 w-full cursor-pointer">
                <div class="flex flex-col gap-4 w-full items-start justify-center">
                <span class="text-lg text-foreground">{{ innerSteps[currentPosition-1].name }}</span>
                <span class="opacity-60">{{ innerSteps[currentPosition-1].description }}</span>
                </div>
            </Label>
        </div>
    </div>

    <div v-if="innerSteps[currentPosition]">
        <div class="flex gap-10 w-full items-center ">
            <div class="size-5 p-4 rounded-full bg-border flex items-center justify-center">
                {{ currentPosition+1 }}
            </div>
            <Label :for="innerSteps[currentPosition].name" class="flex gap-4 items-center p-2 w-full cursor-pointer">
                <div class="flex flex-col gap-4 w-full items-start justify-center">
                    <span class="text-lg text-foreground">{{ innerSteps[currentPosition].name }}</span>
                    <span class="opacity-60">{{ innerSteps[currentPosition].description }}</span>
                </div>
                <Timer v-if="innerSteps[currentPosition].timer" :value="innerSteps[currentPosition].timer*10*6"></Timer>
            </Label>
        </div>
    </div>

    <div v-if="innerSteps[currentPosition+1]" class="opacity-20" @click="onNextStep">
        <div class="flex gap-10 w-full items-center ">
            <div class="size-5 p-4 rounded-full bg-border flex items-center justify-center">
                {{ currentPosition+2 }}
            </div>
            <Label :for="innerSteps[currentPosition+1].name" class="flex gap-4 items-center p-2 w-full cursor-pointer">
                <div class="flex flex-col gap-4 w-full items-start justify-center">
                <span class="text-lg text-foreground">{{ innerSteps[currentPosition+1].name }}</span>
                <span class="opacity-60">{{ innerSteps[currentPosition+1].description }}</span>
                </div>
            </Label>
        </div>
    </div>
    <Button @click="onNextStep">Siguiente</Button>
</div>
</template>
<script setup lang="ts">
    const props = defineProps(['steps']);
    const emit = defineEmits(['change'])
    const innerSteps = ref(props.steps);
    const selectedIngredients = ref([]);
    const currentPosition = ref(0);

    const currentStep = computed(() => {
        return innerSteps.value[currentPosition.value];
    })

    function onNextStep() {
        if((currentPosition.value+1) < innerSteps.value.length) {
            currentPosition.value++;
        }

        if(currentStep.value.timer) {
            console.log('Tiene temporizador', currentStep.value.timer);
            let timer = currentStep.value.timer*1000;
            let interval = setInterval(() => {
            if (timer === 0) {
                clearInterval(interval)                
            } else {
                timer--;
                console.log(timer)
            }      
            }, 1000)
        }
    }

    function onPreviousStep() {
        if((currentPosition.value-1) >= 0) {
        currentPosition.value--;
        }
    }

    watch(() => props.steps, (newValue, oldValue) => innerSteps.value = props.steps);

    function onCheck(item: any, event: any) {
        item.checked = event;
        selectedIngredients.value = innerSteps.value.filter((i:any) => i.checked);
        emit('change', selectedIngredients.value);
    }

    function onCheckAll() {
        innerSteps.value.forEach((i:any) => {
            onCheck(i, true);
        })
    }
    function onCheckNone() {
        innerSteps.value.forEach((i:any) => {
            onCheck(i, false);
        })
    }
</script>
