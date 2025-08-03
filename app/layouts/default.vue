<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';


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
        to: '/blog'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
])

</script>

<template>
    <UContainer class="">
        <header class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
              <UNavigationMenu :items="navItems" class="w-full justify-center"/>
        </header>
        <main>
            <slot />
        </main>
        <footer class="">
            <p>Footer</p>
        </footer>
    </UContainer>
</template>