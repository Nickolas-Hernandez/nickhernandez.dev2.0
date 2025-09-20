<script setup lang="ts">
const route = useRoute()

const { data: project } = await useAsyncData(route.path, () => {
    return queryCollection('projects').path(route.path).first()
})
</script>

<template>
    <section id="projects" class="">
        <UContainer>
            <p class="text-sm opacity-75 mt-4 italic">Coming soon...</p>
            <ContentRenderer v-if="project" :value="project" />
        </UContainer>
    </section>
</template>