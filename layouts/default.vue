<script setup lang="ts">

const toggleMenu = ref(false);



function isOpenMenuToggle() {
  toggleMenu.value = !toggleMenu.value
}
</script>

<template>
  <div class="h-full w-full flex">
    <LayoutAside :menu-toggle="toggleMenu" />
    <div class="h-full w-full">
      <LayoutHeader :menu-toggle="toggleMenu" :is-open-menu-toggle="isOpenMenuToggle" />
      <div class="w-full h-[calc(100vh-50px)] p-6">
        <UMain>
          <NuxtPage/>
        </UMain>
      </div>
      <LayoutFooter class="bg-zinc-800 border-t border-zinc-700 p-4"/>
    </div>
  </div>
</template>