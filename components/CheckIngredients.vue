<template>
<div class="flex flex-col gap-2 items-end">
<Button v-if="innerIngredients.length !== selectedIngredients.length" @click="onCheckAll" variant="ghost">Lo tengo todo</Button>
<Button v-if="innerIngredients.length === selectedIngredients.length" @click="onCheckNone" variant="ghost">Desmarcar todo</Button>
<div class="flex gap-4 w-full items-center" v-for="ingredient in innerIngredients" :key="ingredient.name" >
    <Checkbox :id="ingredient.name" :checked="ingredient.checked" @update:checked="onCheck(ingredient, $event)"/>
    <Label :for="ingredient.name" class="flex gap-4 items-center p-2 w-full cursor-pointer" :class="{'line-through opacity-45': ingredient.checked}">
        <div class="size-5 p-4 rounded-full bg-border"></div>
        <div class="flex flex-col w-full items-start justify-center">
            <span class="text-sm text-foreground">{{ ingredient.name }}</span>
            <span class="text-xs opacity-60">{{ ingredient.description }}</span>
        </div>
        <div class="flex gap-1 text-foreground">
            <span>{{ingredient.quantity}}</span>
            <span>{{ ingredient.measure }}</span>
        </div>
    </Label>
</div>
</div>
</template>
<script setup lang="ts">
    const props = defineProps(['ingredients']);
    const emit = defineEmits(['change'])
    const innerIngredients = ref(props.ingredients);
    const selectedIngredients = ref([]);
    watch(() => props.ingredients, (newValue, oldValue) => innerIngredients.value = props.ingredients);

    function onCheck(item: any, event: any) {
        item.checked = event;
        selectedIngredients.value = innerIngredients.value.filter((i:any) => i.checked);
        emit('change', selectedIngredients.value);
    }

    function onCheckAll() {
        innerIngredients.value.forEach((i:any) => {
            onCheck(i, true);
        })
    }
    function onCheckNone() {
        innerIngredients.value.forEach((i:any) => {
            onCheck(i, false);
        })
    }
</script>
