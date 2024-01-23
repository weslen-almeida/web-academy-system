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
    to: '/home',
    icon: 'mdi-home'
  }, 
  {
    text: 'Alunos',
    to: '#',
    icon: 'mdi-account-multiple'
  },
  {
    text: 'Treinos',
    to: '#',
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
      <v-list-item 
        v-for="(item, i) in menu"
        :key="i"
        :value="item"
      >
        <template #prepend>
          <v-icon :icon="item.icon" class="mr-n5"/>
        </template>
        <v-list-item-title v-text="item.text"/>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>