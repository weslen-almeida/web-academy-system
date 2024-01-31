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
        plano: "Semestral",
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
    <v-sheet
        class="text-body-2 mx-auto"
        width="98%"
    >
        <v-container>
            <v-col cols=12 class="mt-4">
            <h2 class="text-center"><v-icon class="mr-3">mdi-account-multiple</v-icon>Alunos</h2>
            </v-col>
            <v-row no-gutters class="mt-2">
                <v-col cols="12" class="d-flex justify-start mb-6">
                    <v-btn 
                        prepend-icon="mdi-account-plus"
                        color="success"
                    >Novo aluno</v-btn>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field
                        :loading="loading"
                        density="compact"
                        variant="outlined"
                        label="Digite por nome ou cpf"
                        prepend-inner-icon="mdi-magnify"
                        clearable
                        hide-details
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="">
                    <v-btn 
                        prepend-icon="mdi-magnify"
                        color="primary"
                        class="ml-md-2 ml-0"
                        block
                        height="38px"
                    >Pesquisar</v-btn>
                </v-col>
                <v-col cols="12" class="mt-3">
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
</template>

<style scoped>

</style>