<script setup>
useHead({
    title: 'Mister Paella | Logout'
});
    const supabase = useSupabaseClient();

    const { error } = await supabase.auth.signOut();

    navigateTo('/')
</script>

<template></template>