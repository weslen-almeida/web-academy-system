<script setup lang="ts">

const props = defineProps({
  menuToggle: {
    type: Boolean,
    required: true
  }
})

const menu = ref([
  {
    text: 'Inicio',
    to: 'https://github.com/benjamincanac',
    icon: 'mdi-home'
  }, 
  {
    text: 'Alunos',
    to: 'https://github.com/Atinux',
    icon: 'mdi-account-multiple'
  },
  {
    text: 'Treinos',
    to: 'https://github.com/smarroufin',
    icon: 'mdi-weight-lifter'
  }
]);


const rail = ref(true);
</script>

<template>
  <v-navigation-drawer 
    :rail="props.menuToggle"
    permanent
  >
    <v-list>
       <div>
        <v-list-item 
          :title="props.menuToggle ? 'L' : 'Logo da Academia'"
          class="mb-2"

        />
       </div>
      
<!--       
      <div class="d-flex justify-center">
        <v-img
          class="bg-white"
          width="100"
          height="80"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </div> -->

      <v-list-item 
        v-for="(item, i) in menu"
        :key="i"
        :value="item"
      >
        <template #prepend>
          <v-icon :icon="item.icon" class="mr-n5"/>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- <aside class="bg-zinc-800 py-6 px-2" :class="props.menuToggle ? 'w-60': 'w-20'">

    <div class="mt-1 ml-2 text-center">
      <span v-if="props.menuToggle" >
        System Academy
      </span>
      <span v-else>
        S.A
      </span>
    </div>

    <div class="mt-8">
      Tette
    </div>
  </aside> -->
</template>