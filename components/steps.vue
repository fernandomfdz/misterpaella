<template>
  <Dialog @update:open="onOpenChange">
    <DialogTrigger as-child>
      <Button>
        Comenzar
      </Button>
    </DialogTrigger>
    <DialogScrollContent class="gap-11 w-full my-4 h-full md:my-2 md:h-auto border-transparent md:border-border">
      <DialogHeader class="gap-9 h-full">
        <DialogTitle>{{ currentStep.dialogTitle }}</DialogTitle>
        <Progress v-if="currentStep.id === 'ingredients'" class="h-[2px]" :model-value="(checkedIngredients.length / ingredients.length)*100" />
        <DialogDescription>
          <div class="flex flex-col gap-9">
            <div v-if="currentStep.id === 'people'" class="flex flex-col gap-4">
              <h3>Somos {{ people }} personas</h3>
              <Slider v-model="sliderValue" :max="25" :min="2" :step="1"/>
            </div>
            <div v-if="currentStep.id==='ingredients'" class="flex flex-col gap-6">
              <CheckIngredients :ingredients="ingredients" @change="checkedIngredients = $event"/>
            </div>
            <div v-if="currentStep.id==='cook'" class="flex flex-col gap-6">
              <CookSteps :steps="cookSteps" :position="cookPosition" @next="onNextStepCook"></CookSteps>
            </div>
            <div v-if="currentStep.id==='finish'" class="flex flex-col gap-6">
              <ClientOnly>
                   <Vue3Lottie
                      :animationData="confetti.default"
                      :loop="false"
                    />
              </ClientOnly>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter class="gap-2">
        <Button v-if="currentStep.id !=='cook' || (currentStep.id ==='cook' && cookPosition === 0)" @click="onPreviousStep" variant="outline">
          Volver
        </Button>
        <Button v-if="currentStep.id ==='cook' && cookPosition > 0" @click="onPreviousStepCook" variant="outline">
          Volver
        </Button>
        <Button v-if="currentStep.showContinue && currentStep.id !=='cook'" @click="onNextStep">
          Continuar
        </Button>
        <Button v-if="currentStep.id ==='cook' && cookPosition < cookSteps.length" @click="onNextStepCook">
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
  import * as confetti from "~/assets/confetti.json";
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

  const steps = computed( () => [{
    dialogTitle: '¿Cuantas personas sois?',
    id:'people',
    showBack: false,
    showContinue: true,
  },
  {
    dialogTitle: 'Reúne los ingredientes (' + sliderValue.value[0] + ' personas)',
    id:'ingredients',
    showBack: true,
    showContinue: true,
  },
  {
    dialogTitle: 'Vamos a cocinar',
    id:'cook',
    showBack: true,
    showContinue: false,
  },
  {
    dialogTitle: 'Paella terminada',
    id:'finish',
    showBack: false,
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
  },
  {
    img: '',
    name: 'Pimiento Choricero',
    description: 'Opcional pero recomendado',
    quantity: people.value * pimientoChoricero,
    quantityPerPerson: pimientoChoricero,
    measure: 'gr'
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
      description: 'Deja carne y ajo todo junto, que empape y que no se quemen, a remover!',
    },
    {
      name: 'Espera 2 minutos',
      description: 'Deja 2 minutos carne y ajo todo junto, que empape y que no se quemen, a remover!',
      timer: 120
    },
    {
      name: 'Añade un poco de sal',
      description: 'Y remueve',
    },
    {
      name: 'Añade los pimientos',
      description: 'Cuando estén un poco blanditos avanza al siguiente paso',
      timer: 90
    },
    {
      name: 'Haz un hueco en el centro de la paellera',
      description: 'No tiene más misterio',
    },
    {
      name: 'Añade la cebolla',
      description: 'En el hueco que has hecho antes, cuando esté algo pochada avanza al siguiente paso, ojo que no se queme, a remover!'
    },
    {
      name: 'Añade el vino',
      description: 'Deja que caramelice un poco con la cebolla, sin que se evapore mucho'
    },
    {
      name: 'Añade el tomate',
      description: 'Remueve y liga bien con el vino'
    },
    {
      name: 'Añade el agua',
      description: ''
    },
        {
      name: 'Añade el Pimiento Choricero',
      description: 'Mezcla bien'
    },
    {
      name: 'Añade el resto de sal y colorante',
      description: 'Mezcla bien'
    },
    {
      name: 'Sube el fuego y que hierva el agua',
      description: 'Avanza al siguiente paso cuando rompa a hervir'
    },
    {
      name: 'Añade el arroz',
      description: 'Esparcelo bien por la paellera, que quede uniforme y avanza al siguiente paso'
    },
    {
      name: 'Espera 10 minutos a fuego fuerte',
      description: 'No remuevas, vigila el fuego y que no baje intensidad, prepárate para bajar el fuego cuando terminen estos 10 minutos',
      timer: 600
    },
    {
      name: 'Baja el fuego',
      description: 'Bajalo a intensidad media',
    },
    {
      name: 'Espera 5 minutos',
      description: 'Ten a mano el tomillo',
      timer: 300
    },
    {
      name: 'Añade el tomillo y espera 5 minutos más',
      description: 'Prepárate para sacar la paella',
      timer: 300
    }
  ]);

  function onNextStep() {
    if((currentStepIndex.value+1) < steps.value.length) {
      currentStepIndex.value++;
    }
  }

  function onPreviousStep() {
    if((currentStepIndex.value-1) >= 0) {
      currentStepIndex.value--;
    }
  }

  function onNextStepCook() {
      if((cookPosition.value+1) < cookSteps.value.length) {
          cookPosition.value++;
      } else if((cookPosition.value+1) === cookSteps.value.length) {
        onNextStep();
      }
  }

  function onPreviousStepCook() {
      if((cookPosition.value-1) >= 0) {
      cookPosition.value--;
      }
  }

  const cookPosition = ref(0);

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

  const people = computed(() => {
    return sliderValue.value[0];
  });

  const sliderValue = ref([2]);

  function onOpenChange(opened) {
    if(opened) {
      sliderValue.value = [2];
      cookPosition.value = 0;
      currentStepIndex.value = 0;
    }
  }

  const arrozPorPersona = 100;
  const salPorPersona = 5;
  const aguaPorPersona = 400;
  const tomatePorPersona = 40;
  const trozosDeCarnePorPersona = 4;
  const trozosDePimientoRojoPorPersona = 3;
  const trozosDeAjoPorPersona = 1;
  const cebollaPorPersona = 40;

  const avecremPorPersona = 1;
  const totalPastillaAvecrem = 10;
  const vinoBlancoPorPersona = 30;
  const colorantePorPersona = 3;
  const tomilloPorPersona = 1;
  const pimientoChoricero = 5;
</script>
