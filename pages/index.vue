
<template>

    <div>
        home
        <v-btn density="comfortable">Comfortable Button</v-btn>
    </div>
    
    
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