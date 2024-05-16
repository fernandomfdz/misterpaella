<script setup lang="ts">
    import config from '@/config.json';
useHead({
    title:  config.appName + ' | Login'
});
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast/use-toast';


const { toast } = useToast();
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');

async function handleLogin() {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithOtp({ email: email.value, options: {
            emailRedirectTo: `${window.location.origin}/confirm`,
        } })
        if (error) throw error;
        
        toast({ title: "Check your email for the login link!" });
        loading.value = false;
    } catch (error) {
        toast({title: error.error_description || error.message});
    } finally {
        loading.value = false;
    }
}

async function onSocialLogin() {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/confirm`,
            },
        });
        if (error) throw error;
    } catch (error) { 
        toast({ title: error.error_description || error.message });
    } finally { 
        loading.value = false;
    }
}

</script>

<template>
    <div class="h-[calc(100dvh-57px)] grid place-content-center">
        <Card class="mx-auto max-w-sm border-none shadow-none">
            <CardHeader>
                <CardTitle class="text-2xl">
                    {{ config.appName }}
                </CardTitle>
                <CardDescription>
                    Accede a {{config.appName}} usando tu cuenta de Google
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <Button class="w-full" @click="onSocialLogin">
                        Login con Google
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
</template>