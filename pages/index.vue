<script setup lang="ts">
import { buildApiUrl } from "@/utils/services/fetch-utils";

const isDark = ref(true);
const { data } = await useFetch(
    buildApiUrl('/user'), {
        method: "GET"
    },
)

</script>

<template>
    <div class="text-center">
      <h1>Pagina inicial</h1>
      <p>Página home do site</p>
    </div>
</template>


<style scoped>

</style>