<script setup lang="ts">
const route = useRoute()

console.log("route: ", route.path);

const { data: project } = await useAsyncData(route.path, () => {
    return queryCollection('projects').path(route.path).first()
})
</script>

<template>
    <section id="projects" class="">
        <UContainer>
            <ContentRenderer v-if="project" :value="project" />
        </UContainer>
    </section>
</template>