<script setup>
import { LogOut, Combine, SquareUser, Triangle, Circle } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner';
  import { useRefHistory, useMagicKeys, useMediaQuery } from "@vueuse/core";
  import { ScrollArea } from "@/components/ui/scroll-area";

  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

  import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";


  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";



  import { cn } from "@/lib/utils";

  import { useToast } from '@/components/ui/toast/use-toast'

  const { toast } = useToast()


  const openedSideBar = ref(false);

const supabase = useSupabaseClient();

  const user = useSupabaseUser();

const logout = async () => {
  navigateTo('/logout')
};
</script>

<template>
<TooltipProvider v-if="user">
  <div class="grid w-full bg-background" :class="{'pl-[53px]': openedSideBar}">
    <aside v-show="openedSideBar" class="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div class=" p-2">
        <Button variant="outline" @click="openedSideBar = !openedSideBar" size="icon" aria-label="Home">
          <Circle class="size-5 fill-foreground" />
        </Button>
      </div>
      <nav v-if="openedSideBar" class="grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg bg-muted"
              aria-label="Team Builder"
            >
              <Combine class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Team Builder
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav class="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser class="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
    <div class="flex flex-col h-screen">
      <header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 shrink-0 transition-all">
        <Button v-show="!openedSideBar" variant="outline" @click="openedSideBar = !openedSideBar" size="icon" aria-label="Home">
          <Circle class="size-5 fill-foreground" />
        </Button>
        <div class="ml-auto" id="headerRightButton"></div>
        <Button @click="logout" variant="outline"><LogOut class="size-4" /></Button>
      </header>
      <main class="h-full w-full max-h-[calc(100%_-_57px)]">
        <slot></slot>
      </main>
    </div>
  </div>
  </TooltipProvider>
</template>