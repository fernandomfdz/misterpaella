<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
// You might choose this based on an API call or logged-in status
const layout = ref("default");

const user = useSupabaseUser();

  watch(user, () => {
  console.log('user ha cambiado')
  if (user.value) { 
    layout.value = 'default';
  } else {
    layout.value = 'login';
  }
}, {immediate: true})
</script>

<template>
  <Toaster />
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>