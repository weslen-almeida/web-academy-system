<script setup lang="ts">

const dialog = ref(false);

</script>

<template>
   <div>
      <v-dialog
        v-model="dialog"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            prepend-icon="mdi-account-plus"
            color="success"
            v-bind="props"
          >
            Novo Aluno
          </v-btn>
        </template>
        
        <v-card>
            TESTE
        </v-card>
      </v-dialog>
    </div>
</template>


<style scoped>

</style>