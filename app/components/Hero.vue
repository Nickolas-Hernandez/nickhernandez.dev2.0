<script setup>
const { footer } = useAppConfig()
</script>

<template>
    <section class="text-center pt-16">
        <UAvatar src="https://github.com/Nickolas-Hernandez.png" size="3xl" icon="i-lucide-image" alt="Nickolas Hernandez" />
        <h1 class="tracking-tight font-semi-bold text-pretty text-3xl sm:text-4xl lg:text-5xl text-shadow-md max-w-lg mx-auto text-center">Hello! I&apos;m Nick Hernandez Web Developer</h1>
        <p>I build custom websites where clean design meets powerful functionality and AI-driven solutions. Based in California, I bring ideas to life with code, creativity, and a focus on real business results.</p>
        <!-- Available for new project button -->
            <UButton 
                class="mt-4" 
                color="success"                
                variant="ghost"
                size="lg" 
                href="/contact"
                label="Available for new projects" 
            >
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
         <!-- Github, Linkedin, and Twitter links -->
          <div class="gap-x-4 inline-flex mt-4">
            <div  v-for="(link, index) in footer?.links" :key="index">
                <UButton v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }" />
            </div>
          </div>
    </section>
</template>