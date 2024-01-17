<script setup lang="ts">

const toggleMenu = ref(false);

const links = [{
  avatar: {
    src: 'https://ipx.nuxt.com/s_16x16/gh_avatar/benjamincanac',
    srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/benjamincanac 2x',
    alt: ''
  },
  label: 'benjamincanac',
  to: 'https://github.com/benjamincanac',
  target: '_blank'
}, {
  avatar: {
    src: 'https://ipx.nuxt.com/s_16x16/gh_avatar/Atinux',
    srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/Atinux 2x',
    alt: ''
  },
  label: 'Atinux',
  to: 'https://github.com/Atinux',
  target: '_blank'
}, {
  avatar: {
    src: 'https://ipx.nuxt.com/s_16x16/gh_avatar/smarroufin',
    srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/smarroufin 2x',
    alt: ''
  },
  label: 'smarroufin',
  to: 'https://github.com/smarroufin',
  target: '_blank'
}]

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