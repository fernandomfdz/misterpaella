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
      { name: 'description', content: 'Haz una paella. No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo' },
      { hid: 'og-description', property: 'og:description', content: 'Haz una paella. No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo'},
      { hid: 'twitter-card', property: 'twitter:card', content: '/opengraph-image.png' },
      { hid: 'og-title', property: 'og:title', content: 'Mister Paella'},
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-image', property: 'og:image', content: '/opengraph-image.png'},
    ]
  });

  useSeoMeta({
    title: 'Mister Paella',
    ogTitle: 'Mister Paella',
    description: 'Haz una paella. No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo',
    ogDescription: 'Haz una paella. No pierdas ingredientes. No pierdas tiempo, introduce el número de comensales y deja de calcular a ojo',
    ogImage: '/opengraph-image.png',
    twitterCard: '/opengraph-image.png',
  })

</script>