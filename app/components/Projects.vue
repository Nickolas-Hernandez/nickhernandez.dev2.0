<script setup lang="ts">

const {data: projects}  = await useAsyncData('all-projects', () => queryCollection("projects").all());


</script>

<template>
    <section id="projects" class="pt-24">
        <UContainer>
            <h2 class="text-xl sm:text-2xl">Projects</h2>
            <div class="projects-list py-8">
                <ProjectCard
                v-for="proj in projects"
                :key="proj.path"
                :title="proj.title"
                :description="proj.description"
                :status="proj.status"
                :stack="proj.stack"
                :tags="proj.tags"
                :links="proj.links"
                :path="proj.path"
                />
            </div>
        </UContainer>
    </section>
</template>