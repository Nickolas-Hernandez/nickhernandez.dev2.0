<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const navItems = ref<NavigationMenuItem[]>([
    {
        label: 'home',
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
    <div class="">
        <header>
              <UNavigationMenu :items="navItems" class="w-full justify-center" />
        </header>
        <main>
            <slot />
        </main>
        <footer class="">
            <p>Footer</p>
        </footer>
    </div>
</template>