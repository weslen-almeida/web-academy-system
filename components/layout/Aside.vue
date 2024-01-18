<script setup lang="ts">

const props = defineProps({
  menuToggle: {
    type: Boolean,
    required: true
  }
})

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
  <aside class="bg-zinc-800 py-6 px-2" :class="props.menuToggle ? 'w-60': 'w-20'">

    <div class="mt-1 ml-2 text-center">
      <span v-if="props.menuToggle" >
        System Academy
      </span>
      <span v-else>
        S.A
      </span>
    </div>

    <div class="mt-8">
      <UVerticalNavigation :links="menu" />
    </div>
  </aside>
</template>