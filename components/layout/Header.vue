<script setup lang="ts">
    const props = defineProps({
        menuToggle: {
            type: Boolean,
            required: true
        },
        isOpenMenuToggle: {
            type: Function,
        }
    });
</script>

<template>
    <div class="w-full bg-zinc-800 border-t border-zinc-700 p-4">
        <UHeader>
            <UButton
                @click="isOpenMenuToggle"
                icon="i-heroicons-bars-3-16-solid"
                size="xl"
                color="primary"
                square
                variant="soft"
                class="p-1"
            />
        </UHeader>
    </div>
</template>