<script setup lang="ts">
import { NuxtLink } from '#components';
import type { NavigationMenuItem } from '@nuxt/ui';

const navItems = ref<NavigationMenuItem[]>([
    {
        label: 'home'
    },
    {
        label: 'About'
    },
    {
        label: 'Projects'
    },
    {
        label: 'Blog'
    },
    {
        label: 'Contact'
    }
])

</script>

<template>
    <div class="">
        <header>
              <UNavigationMenu :items="navItems" class="w-full justify-center" />

            <!-- <nav class="navigation-bar">
                <ul class="nav-links">
                    <li class="nav-link"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/about">About</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/projects">Projects</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/blog">Blog</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav> -->
        </header>
        <main>
            <slot />
        </main>
        <footer class="">
            <p>Footer</p>
        </footer>
    </div>
</template>