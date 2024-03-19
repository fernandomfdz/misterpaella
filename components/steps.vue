<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>
        Comenzar
      </Button>
    </DialogTrigger>
    <DialogScrollContent class="gap-11 w-full">
      <DialogHeader class="gap-9">
        <DialogTitle>{{ currentStep.dialogTitle }}</DialogTitle>
        <Progress v-if="currentStep.id === 'ingredients'" class="h-[2px]" :model-value="(checkedIngredients.length / ingredients.length)*100" />
        <DialogDescription>
          <div class="flex flex-col gap-9">
            <div v-if="currentStep.id === 'people'" class="flex flex-col gap-4">
              <h3>Somos {{ people }} personas</h3>
              <Slider v-model="sliderValue" :max="25" :step="1"/>
            </div>
            <div v-if="currentStep.id==='ingredients'" class="flex flex-col gap-6">
              <CheckIngredients :ingredients="ingredients" @change="checkedIngredients = $event"/>
            </div>
            <div v-if="currentStep.id==='cook'" class="flex flex-col gap-6">
              <CookSteps :steps="cookSteps"></CookSteps>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter class="justify-between gap-2">
        <Button v-if="currentStep.showBack" @click="onPreviousStep" variant="outline">
          Volver
        </Button>
        <Button v-if="currentStep.showContinue" @click="onNextStep">
          Continuar
        </Button>
      </DialogFooter>
    </DialogScrollContent>
  </Dialog>
</template>
<script setup>
import {ref, computed} from 'vue'
  import { usePaellaStore } from "@/stores/paella";
  import { storeToRefs } from "pinia";
  import {
    Dialog,
    DialogScrollContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Slider } from '@/components/ui/slider'
  import { Progress } from '@/components/ui/progress'
  import { Toggle } from '@/components/ui/toggle'
  import { Checkbox } from '@/components/ui/checkbox'
  import { Switch } from '@/components/ui/switch'
  import { Label } from '@/components/ui/label'

  const steps = ref([{
    dialogTitle: '¿Cuantas personas sois?',
    id:'people',
    showBack: false,
    showContinue: true,
  },
  {
    dialogTitle: 'Reúne los ingredientes',
    id:'ingredients',
    showBack: true,
    showContinue: true,
  },
    {
    dialogTitle: 'Vamos a cocinar',
    id:'cook',
    showBack: true,
    showContinue: false,
  }
]);

  const ingredients = computed(() => {
    return [
      {
    img: '',
    name: 'Arroz',
    description: 'Bomba',
    quantity: people.value * arrozPorPersona,
    quantityPerPerson: arrozPorPersona,
    measure: 'gr'
  },
  {
    img: '',
    name: 'Sal',
    description: '',
    quantity: people.value * salPorPersona,
    quantityPerPerson: salPorPersona,
    measure: 'gr'
  },
  {
    img: '',
    name: 'Agua',
    description: '',
    quantity: people.value * aguaPorPersona,
    quantityPerPerson: aguaPorPersona,
    measure: 'ml'
  },
  {
    img: '',
    name: 'Tomate frito',
    description: 'Hida',
    quantity: people.value * tomatePorPersona,
    quantityPerPerson: tomatePorPersona,
    measure: 'ml'
  },
  {
    img: '',
    name: 'Trozos de carne',
    description: 'De pollo / conejo',
    quantity: people.value * trozosDeCarnePorPersona,
    quantityPerPerson: trozosDeCarnePorPersona,
    measure: 'unidad'
  },
  {
    img: '',
    name: 'Trozos de pimiento rojo',
    description: 'En juliana',
    quantity: people.value * trozosDePimientoRojoPorPersona,
    quantityPerPerson: trozosDePimientoRojoPorPersona,
    measure: 'unidad'
  },
  {
    img: '',
    name: 'Dientes de ajo',
    description: 'Cortados en trozos',
    quantity: people.value * trozosDeAjoPorPersona,
    quantityPerPerson: trozosDeAjoPorPersona,
    measure: 'unidad'
  },
  {
    img: '',
    name: 'Cebolla',
    description: 'Picada fina',
    quantity: people.value * cebollaPorPersona,
    quantityPerPerson: cebollaPorPersona,
    measure: 'gr'
  },
  {
    img: '',
    name: 'Avecrem',
    description: '',
    quantity: people.value * avecremPorPersona,
    quantityPerPerson: avecremPorPersona,
    measure: 'gr'
  },
  {
    img: '',
    name: 'Vino Blanco',
    description: 'Cualquiera sirve',
    quantity: people.value * vinoBlancoPorPersona,
    quantityPerPerson: vinoBlancoPorPersona,
    measure: 'ml'
  },
  {
    img: '',
    name: 'Colorante',
    description: '',
    quantity: people.value * colorantePorPersona,
    quantityPerPerson: colorantePorPersona,
    measure: 'gr'
  },
  {
    img: '',
    name: 'Tomillo',
    description: 'En rama',
    quantity: people.value * tomilloPorPersona,
    quantityPerPerson: tomilloPorPersona,
    measure: 'unidad'
  }
    ];
  });

  const cookSteps = ref([
    {
      name: 'Enciende el fuego',
      description: 'Usa leña y dale caña, cuando lo veas caliente añade aceite'
    },
    {
      name: 'Fríe la carne',
      description: 'Hasta que esté algo cocinada, no te pases que luego la carne se termina haciendo después'
    },
    {
      name: 'Añade el ajo',
      description: 'Que no se quemen, a remover!',
      timer: 10
    },
    {
      name: 'Enciende el fuego',
      description: 'Usa leña y dale caña, cuando lo veas caliente añade aceite'
    },
    {
      name: 'Fríe la carne',
      description: 'Hasta que esté algo cocinada, no te pases que luego la carne se termina haciendo después'
    },
    {
      name: 'Añade el ajo',
      description: 'Que no se quemen, a remover!'
    }
  ]);

  function onNextStep() {
    console.log(steps.value.length, currentStepIndex.value);
    if((currentStepIndex.value+1) < steps.value.length) {
      currentStepIndex.value++;
    }
  }

  function onPreviousStep() {
    console.log(steps.value.length, currentStepIndex.value)
    if((currentStepIndex.value-1) >= 0) {
      currentStepIndex.value--;
    }
  }

  const checkedIngredients = ref([]);

  const currentStepIndex = ref(0);

  const currentStep = computed(() => {
    return steps.value[currentStepIndex.value];
  }); 

  const canContinue = computed(() => {
    return currentStep.value < steps.length;
  });

  const paellaStore = usePaellaStore();
  const { paella } = storeToRefs(paellaStore);

  console.log(paella.value.personas);

  const people = computed(() => {
    return sliderValue.value[0];
  });

  const sliderValue = ref([2])

  const arrozPorPersona = 100;
  const salPorPersona = 5;
  const aguaPorPersona = 400;
  const tomatePorPersona = 100;
  const trozosDeCarnePorPersona = 4;
  const trozosDePimientoRojoPorPersona = 3;
  const trozosDeAjoPorPersona = 1;
  const cebollaPorPersona = 40;

  const avecremPorPersona = 1;
  const totalPastillaAvecrem = 10;
  const vinoBlancoPorPersona = 30;
  const colorantePorPersona = 3;
  const tomilloPorPersona = 1;
</script>
