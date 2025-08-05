<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const { footer } = useAppConfig()

const navItems = ref<NavigationMenuItem[]>([
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Projects',
        to: '/projects'
    },
    {
        label: 'Blog',
        to: '/articles'
    },
    {
        label: 'FAQ',
        to: '/faq'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
])

</script>

<template>
    <UContainer class="max-w-4xl mx-auto px-6 sm:border-x border-default pt-10">
        <header class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
            <!-- <UNavigationMenu :items="navItems" class="w-full justify-center hidden md:block"/> -->
            <!-- <UDrawer class="md:hidden" direction="right">
                <UButton label="Menu" color="neutral" variant="subtle" trailing-icon="i-lucide-align-justify" />
                <template #content>
                    <UNavigationMenu :items="navItems" orientation="vertical" class="w-56"/>
                </template>
            </UDrawer> -->
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <UContainer class="flex justify-between pb-4 opacity-75">
                <small>Copyright @ 2025</small>
                <div class="">
                    <UButton
                    v-for="(link, index) of footer?.links"
                    :key="index"
                    v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
                    />
                </div>
            </UContainer>
        </footer>
    </UContainer>
</template>