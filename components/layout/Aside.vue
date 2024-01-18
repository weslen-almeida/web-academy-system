<script setup lang="ts">

const menu = ref([
  {
    label: 'Inicio',
    to: 'https://github.com/benjamincanac',
    icon: 'i-heroicons-home'
  }, 
  {
    label: 'Alunos',
    to: 'https://github.com/Atinux',
    icon: 'i-heroicons-users'
  },
  {
    label: 'Treinos',
    to: 'https://github.com/smarroufin',
    icon: 'i-heroicons-fire'
  }
]);

</script>

<template>
  <aside class="w-60 bg-zinc-800 py-6 px-2">
    <!-- Colocar a logo aqui -->

    <!-- Menu -->
    <UVerticalNavigation :links="menu" />
  </aside>
</template>