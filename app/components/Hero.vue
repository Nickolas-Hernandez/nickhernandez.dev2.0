<script setup>
const { footer } = useAppConfig()
</script>

<template>
    <section class="text-center flex flex-col items-center py-18 sm:py-24 lg:py-28">
        <UAvatar 
            src="https://github.com/Nickolas-Hernandez.png" 
            size="3xl" 
            icon="i-lucide-image" 
            alt="Nickolas Hernandez" />
        <h1 class="tracking-tight font-semi-bold text-pretty text-3xl sm:text-4xl lg:text-5xl max-w-md mx-auto pt-4">Hello! I&apos;m Nick Hernandez Web Developer</h1>
        <p class="max-w-lg mx-auto opacity-75 pt-4">I build custom websites where clean design meets powerful functionality and AI-driven solutions.</p>
        <UButton 
            class="mt-4" 
            color="success"                
            variant="ghost"
            size="lg" 
            href="/contact"
            label="Available for new projects">
            <template #leading>
                <span class="relative flex size-2">
                    <span
                        class="absolute inline-flex size-full rounded-full opacity-75 bg-success animate-ping"
                    />
                    <span
                        class="relative inline-flex size-2 scale-90 rounded-full bg-success"
                    />
                </span>
            </template>
        </UButton>
        <div class="gap-x-4 inline-flex mt-4">
            <div  v-for="(link, index) in footer?.links" :key="index">
                <UButton v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }" />
            </div>
        </div>
    </section>
</template>