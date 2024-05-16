export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    
    if (!user.value && to.path.includes('/app')) { 
        return navigateTo('/login')
    }
})