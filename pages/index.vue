<template>
    <div>
        Home page
    </div>
    <div>
        Api Response: {{ data }}
    </div>
</template>

<script setup lang="ts">
import { buildApiUrl } from "@/utils/services/fetch-utils";

const { data } = await useFetch(
    buildApiUrl('/user'), {
        method: "GET"
    },
)

console.log(data)

</script>

<style lang="scss" scoped>

</style>