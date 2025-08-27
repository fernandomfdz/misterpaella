<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/background.png')">
    <hero></hero>
    <ffooter/>
  </div>
</template>

<script setup>

  useHead({
    title: 'Mister Paella',
    meta: [
      { name: 'description', content: 'Haz una paella. No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo' }
    ]
  });

</script>