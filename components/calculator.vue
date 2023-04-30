<template>
  <!-- The button to open modal -->
  <label for="my-modal" class="btn">Comenzar</label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box h-screen flex flex-col gap-8">
      <div class="flex flex-col justify-between h-screen">
        <div class="flex flex-col gap-8">
          <h2 class="font-bold text-lg">¿Cuantas personas sois?</h2>
          <h3>{{ people }}</h3>
          <input type="range" v-model="people" min="4" max="25" class="range" />

          <div class="divider"></div>

          <ol class="text-left">
            <li>Arroz: {{ people * arrozPorPersona }}gr <span class="text-gray-500">({{ arrozPorPersona }}gr por persona)</span></li>
            <li>Agua: {{ people * aguaPorPersona }}ml <span class="text-gray-500">({{ aguaPorPersona }}ml por persona)</span></li>
            <li>Tomate: {{ people * tomatePorPersona }}ml <span class="text-gray-500">({{ tomatePorPersona }}ml por persona)</span></li>
            <li>Trozos de carne: {{ people * trozosDeCarnePorPersona }} <span class="text-gray-500">({{ trozosDeCarnePorPersona }} por persona)</span></li>
          </ol>
        </div>
        <div class="modal-action">
          <label for="my-modal" class="btn">Cerrar</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const people = ref(4);

    const arrozPorPersona = 100;
    const aguaPorPersona = 400;
    const tomatePorPersona = 100;
    const trozosDeCarnePorPersona = 4;

    const avecremPorPersona = 4;
    const cebollaPorPersona = 4;
    const pimientoPorPersona = 4;
    const ajoPorPersona = 4;

    return { 
        people,

        arrozPorPersona,
        aguaPorPersona,
        tomatePorPersona,
        trozosDeCarnePorPersona,
    };
  },
};
</script>