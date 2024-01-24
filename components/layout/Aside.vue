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
    color="indigo-darken-3"
  >
    <v-list >
      <div>
        <v-list-item 
          :title="props.menuToggle ? 'L' : 'Logo da Academia'"
        />
      </div>
      <v-divider class="mt-2"></v-divider>
      <div class="mt-4">
        <v-list-item
          v-for="(item, i) in menu"
          :key="i"
          :value="item"
          rounded="s-xl"
          active-class="menu-active"
        >
          <template #prepend>
            <v-icon :icon="item.icon" class="mr-n5"/>
          </template>
          <v-list-item-title v-text="item.text"/>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.menu-active {
  background-color: white;
  color: black;
}
</style>