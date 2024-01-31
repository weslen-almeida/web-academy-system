<script setup lang="ts">
import { buildApiUrl } from "@/utils/services/fetch-utils";

const loading = ref(false);
const isDark = ref(true);
const { data } = await useFetch(
    buildApiUrl('/user'), {
        method: "GET"
    },
);

const items = [
    {
        nome: "Aluno academia",
        CPF: "123.456.789-01",
        plano: "Anual",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        CPF: "123.456.789-01",
        plano: "Anual",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        CPF: "123.456.789-01",
        plano: "Semestral",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        CPF: "123.456.789-01",
        plano: "Mensal",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        CPF: "123.456.789-01",
        plano: "Anual",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Semestral",
        data: "26/01/24"
    },
    {
        nome: "Aluno academia",
        plano: "Mensal",
        data: "26/01/24"
    },
];

const tags = [
        'Mensal',
        'Semestral',
        'Anual',
      ];

</script>

<template>
    <v-container>
        <v-sheet
            class="text-body-2 mx-auto"
        >
        <v-container>
            <v-col cols=12>
          <h2 class="text-center">Alunos</h2>
        </v-col>
        
        <v-row no-gutters class="mt-5">
            <v-col cols="12" class="d-flex justify-space-around">
                <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="outlined"
                    label="Digite por nome ou cpf"
                    append-inner-icon="mdi-magnify"
                    clearable
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>

                <v-btn 
                    prepend-icon="mdi-magnify"
                    variant="flat"
                    color="primary"
                    class="ml-2"
                >Pesquisar</v-btn>
            </v-col>
            <v-col cols="auto mt-3">
                <h5>Filtros de Planos</h5>
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
            </v-col>
            <v-col cols="12" class="d-flex justify-start my-4">
                <v-btn 
                    prepend-icon="mdi-plus"
                    variant="flat"
                    color="success"
                >Novo aluno</v-btn>
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
        </v-container>
    </v-sheet>
    </v-container>
</template>

<style scoped>

</style>