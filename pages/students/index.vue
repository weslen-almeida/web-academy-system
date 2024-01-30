<script setup lang="ts">
import { buildApiUrl } from "@/utils/services/fetch-utils";

const isDark = ref(true);
const { data } = await useFetch(
    buildApiUrl('/user'), {
        method: "GET"
    },
);

const items = [
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Standard",
        data: "26/01/24"
    },
];

const tags = [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ];

</script>

<template>
    <v-container>
        <v-sheet
            class="text-body-2 mx-auto"
        >
        <v-col cols=12>
          <h2 class="text-center">Pagina dos alunos</h2>
        </v-col>
        
        <v-row no-gutters>
            <v-col cols="12">
                <v-btn 
                    prepend-icon="mdi-plus"
                    variant="flat"
                    color="success"
                >Novo aluno</v-btn>
            </v-col>
            <v-col cols="auto">
                <v-container>
                    <v-chip-group
                    multiple
                    selected-class="text-primary"
                    >
                    <v-chip
                        v-for="tag in tags"
                        :key="tag"
                    >
                        {{ tag }}
                    </v-chip>
                    </v-chip-group>
                </v-container>
            </v-col>
            
        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <v-data-table
                    :items="items"
                >

                </v-data-table>
            </v-col>
        </v-row>
    </v-sheet>
    </v-container>
</template>

<style scoped>

</style>