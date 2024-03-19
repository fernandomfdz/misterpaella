import { defineStore } from "pinia";

export const usePaellaStore = defineStore("paella", {
  state: () => ({
    paella: {
      personas: 2,
      ingredientes: {
        arroz: false,
        sal: false,
        agua: false,
        tomate: false,
        carne: false,
        pimientoRojo: false,
        ajo: false,
        cebolla: false,
        avecrem: false,
        vinoBlanco: false,
        colorante: false,
        tomillo: false,
      },
      herramientas: {
        paellera: false,
        rasera: false,
      },
    },
  }),
  actions: {},
});
