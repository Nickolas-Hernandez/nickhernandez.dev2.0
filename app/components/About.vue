<script setup lang="ts">
import { ULink } from '#components';

</script>

<template>
    <section class="flex flex-row justify-between mb-10">
        <UContainer class="grid md:grid-cols-2 gap-12 items-start">
            <div class="about-me">
                <h2 class="text-xl sm:text-2xl">About Me</h2>
                <p class="text-sm opacity-75 mt-4">
                    As a Web Developer with over five years of experience. I build websites and AI-driven solutions — from custom business 
                    websites and eCommerce platforms to AI agents and marketing tools. With a strong foundation in React, Vue, Nuxt, 
                    WordPress, and Shopify, I create digital products that combine clean design, powerful functionality, and real 
                    business impact.
                </p>
            </div>
            <div class="work-experience">
                <h2 class="text-xl sm:text-2xl">Work Experience</h2>
                <ul class="space-y-4 mt-4 text-sm">
                    <li class="flex items-center justify-between opacity-75">
                        <span class="">2023 – Present</span>
                        <span class="flex-1 border-t border-borderGray mx-4 opacity-50"></span>
                        <span>Freelance Web Developer</span>
                    </li>
                    <li class="flex items-center justify-between opacity-75">
                        <span class="">2021 – 2025</span>
                        <span class="flex-1 border-t border-borderGray mx-4 opacity-50"></span>
                        <span>Web Developer at <ULink to="https://www.getindio.com/" class="text-success font-medium" target="_blank">Big Rig Media</ULink></span>
                    </li>
                    <li class="flex items-center justify-between opacity-75">
                        <span class="">2021 – 2022</span>
                        <span class="flex-1 border-t border-borderGray mx-4 opacity-50"></span>
                        <span>Teaching Assistant at <ULink to="https://learningfuze.com/" class="text-success font-medium" target="_blank">Learning Fuze</ULink></span>
                    </li>
                </ul>
            </div>
        </UContainer>
    </section>
</template>