
<script setup lang="ts">

const toggleMenu = ref(false);



function isOpenMenuToggle() {
  toggleMenu.value = !toggleMenu.value
}
</script>

<template>
  <v-app>
    <LayoutAside :menu-toggle="toggleMenu" />
    <LayoutHeader :menu-toggle="toggleMenu" :is-open-menu-toggle="isOpenMenuToggle" />
    <v-main>
      <NuxtPage />
    </v-main>
    <LayoutFooter class=""/>

  </v-app>
</template>