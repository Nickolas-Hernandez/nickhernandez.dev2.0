<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  featured?: { src: string; alt?: string }
  status?: string
  stack?: string[]
  tags?: string[]
  links?: { live?: string; repo?: string }
  path: string // Nuxt Content _path
}>()

const statusColor = computed(() => {
  switch (props.status) {
    case 'planned': return 'gray'
    case 'in-progress': return 'amber'
    case 'launched': return 'green'
    case 'archived': return 'zinc'
    default: return 'gray'
  }
})
</script>

<template>
  <UCard
    class="overflow-hidden flex flex-col transition hover:shadow-xl hover:-translate-y-1 duration-200"
  >
    <!-- Featured image -->
    <NuxtLink :to="links?.live" class="block">
      <NuxtImg
        v-if="featured?.src"
        :src="featured.src"
        :alt="featured.alt || title"
        width="800"
        height="450"
        format="webp"
        class="w-full h-auto aspect-video object-cover"
      />
    </NuxtLink>

    <div class="flex-1 flex flex-col p-4">
      <!-- Status -->
      <UBadge :color="statusColor" size="xs" variant="soft" class="uppercase mb-2">
        {{ status }}
      </UBadge>

      <!-- Title -->
      <NuxtLink :to="links?.live" target="_blank" rel="noopener">
        <h3 class="text-lg font-semibold hover:text-primary transition">{{ title }}</h3>
      </NuxtLink>

      <!-- Description -->
      <p class="text-sm opacity-75 mt-1 line-clamp-3">
        {{ description }}
      </p>

      <!-- Stack badges -->
      <div v-if="stack?.length" class="flex flex-wrap gap-2 mt-3">
        <UBadge
          v-for="s in stack"
          :key="s"
          size="xs"
          variant="subtle"
          class="tracking-wide"
        >
          {{ s }}
        </UBadge>
      </div>

      <!-- Links -->
      <div class="mt-auto flex gap-2 pt-4">
        <UButton
          v-if="links?.live"
          :to="links.live"
          target="_blank"
          size="xs"
          icon="i-lucide-external-link"
        >
          Live
        </UButton>
        <UButton
          v-if="links?.repo"
          :to="links.repo"
          target="_blank"
          size="xs"
          variant="outline"
          icon="i-simple-icons-github"
        >
          Repo
        </UButton>
      </div>
    </div>
  </UCard>
</template>