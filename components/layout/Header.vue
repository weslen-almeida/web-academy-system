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
    <!-- <div class="w-full bg-zinc-800 border-t border-zinc-700 p-4"> -->
        <v-app-bar title="Application bar">
            <div class="justify-items-start">
              <v-btn
                @click="isOpenMenuToggle"
                icon="mdi-menu"
                variant="flat"
              />
            </div>
        </v-app-bar>
    <!-- </div> -->
</template>