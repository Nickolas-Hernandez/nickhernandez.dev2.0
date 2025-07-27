<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <div class="">
        <header>
            <nav class="navigation-bar">
                <ul class="nav-links">
                    <li class="nav-link"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/about">About</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/projects">Projects</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/blog">Blog</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer class="">
            <p>Footer</p>
        </footer>
    </div>
</template>