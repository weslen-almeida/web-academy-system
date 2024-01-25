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

<template>

    <div>
      <h1>Pagina Treino</h1>
    </div>
    
    
</template>


<style scoped>

</style>