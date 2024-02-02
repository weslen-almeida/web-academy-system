<script setup lang="ts">

const dialog = ref(false);

const props = defineProps({
  isHeader:{
    type:Boolean,
    default:false
  }
});

const { isHeader } = toRefs(props);

const tab = ref(null);

</script>

<template>
  <v-dialog
    v-model="dialog"
    >
    <template v-slot:activator="{ props }">
      <v-btn 
        v-if="isHeader"
        icon 
        color="primary" 
        v-bind="props"
      >
        <v-icon>mdi-account-plus</v-icon>
        <v-tooltip
            activator="parent"
            location="bottom"
            color="primary"
        >Cadastrar novo aluno</v-tooltip>
      </v-btn>
      <v-btn
        v-else
        prepend-icon="mdi-account-plus"
        color="success"
        v-bind="props"
      >
        Novo Aluno
      </v-btn>

    </template>
    
    <v-card>
        <v-container>
          <v-row no-gutters justify="center">
            <v-card-title>
              <v-icon class="mr-2">mdi-account-plus</v-icon> Cadastrar Aluno {{ props.isHeader }}
            </v-card-title>
          </v-row>

          <v-row>
            Colocar um componente de formulario com abas
          </v-row>

          <v-tabs
            v-model="tab"
            bg-color="deep-purple-accent-4"
            centered
            stacked
          >
            <v-tab value="tab-1">
              <v-icon>mdi-phone</v-icon>
              Recents
            </v-tab>

            <v-tab value="tab-2">
              <v-icon>mdi-heart</v-icon>
              Favorites
            </v-tab>

            <v-tab value="tab-3">
              <v-icon>mdi-account-box</v-icon>
              Nearby
            </v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <v-window-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
            >
              <v-card>
                <v-card-text> texto a inserir nas tabs</v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-container>
    </v-card>
  </v-dialog>
</template>


<style scoped>

</style>