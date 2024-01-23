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
    <v-app-bar 
        color="white"
        elevation="1"
        flat
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon 
                @click="props.isOpenMenuToggle"
            />
        </template>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-app-bar>
</template>