<template>
  <!-- The button to open modal -->
  <label for="my-modal" class="btn">Comenzar</label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box flex flex-col gap-8">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-8">
          <h2 class="font-bold text-lg">¿Cuantas personas sois?</h2>
          <h3>{{ people }}</h3>
          <input type="range" v-model="people" min="2" max="25" class="range" />

          <div class="divider"></div>

          <ol class="text-left">
            <li>
              Arroz: {{ people * arrozPorPersona }}gr
              <span class="text-gray-500"
                >({{ arrozPorPersona }}gr por persona)</span
              >
            </li>
            <li>
              Sal: {{ people * salPorPersona }}gr
              <span class="text-gray-500"
                >({{ arrozPorPersona }}gr por persona)</span
              >
            </li>
            <li>
              Agua: {{ people * aguaPorPersona }}ml
              <span class="text-gray-500"
                >({{ aguaPorPersona }}ml por persona)</span
              >
            </li>
            <li>
              Tomate frito: {{ people * tomatePorPersona }}ml
              <span class="text-gray-500"
                >({{ tomatePorPersona }}ml por persona)</span
              >
            </li>
            <li>
              Trozos de carne: {{ people * trozosDeCarnePorPersona }}
              <span class="text-gray-500"
                >({{ trozosDeCarnePorPersona }} por persona)</span
              >
            </li>
            <li>
              Trozos de pimiento rojo:
              {{ people * trozosDePimientoRojoPorPersona }}
              <span class="text-gray-500"
                >({{ trozosDePimientoRojoPorPersona }} por persona)</span
              >
            </li>
            <li>
              Dientes de ajo: {{ people * trozosDeAjoPorPersona }}
              <span class="text-gray-500"
                >({{ trozosDeAjoPorPersona }} por persona)</span
              >
            </li>
            <li>
              Cebolla: {{ people * cebollaPorPersona }}
              <span class="text-gray-500"
                >({{ cebollaPorPersona }}gr por persona)</span
              >
            </li>
            <li>
              Avecrem: {{ people * avecremPorPersona }}
              <span class="text-gray-500"
                >({{ avecremPorPersona }}gr por persona)</span
              >
            </li>
            <li>
              Vino: {{ people * vinoBlancoPorPersona }}
              <span class="text-gray-500"
                >({{ vinoBlancoPorPersona }}ml por persona)</span
              >
            </li>
            <li>
              Colorante: {{ people * colorantePorPersona }}
              <span class="text-gray-500"
                >({{ colorantePorPersona }}gr por persona)</span
              >
            </li>
            <li>
              Tomillo: {{ people * tomilloPorPersona }}
              <span class="text-gray-500"
                >({{ tomilloPorPersona }} rama por persona)</span
              >
            </li>
          </ol>
        </div>
        <div class="modal-action">
          <label for="my-modal" class="btn">Cerrar</label>
          <label class="btn">Siguiente</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { usePaellaStore } from "@/stores/paella";
  import { storeToRefs } from "pinia";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

  const steps = ["pide-personas", "check-ingredientes"];

  const currentStep = ref(0);

  const canContinue = computed(() => {
    return currentStep.value < steps.length;
  });

  const paellaStore = usePaellaStore();
  const { paella } = storeToRefs(paellaStore);

  console.log(paella.value.personas);

  const people = ref(2);

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
