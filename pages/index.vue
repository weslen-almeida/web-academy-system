
<template>
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
    <div class="flex gap-2">
        Home page
    </div>
    <div>
        Api Response:
    </div>

    <div>
        <UButton>Button</UButton>
    </div>

    <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />

  </ClientOnly>
    
</template>

<script setup lang="ts">
import { buildApiUrl } from "@/utils/services/fetch-utils";

const isDark = ref(true);
const { data } = await useFetch(
    buildApiUrl('/user'), {
        method: "GET"
    },
)

console.log(data)


</script>

<style scoped>

</style>