<script setup lang="ts">
    const props = defineProps({
        isOpenMenuToggle: {
            type: Function,
        }
    });

    const items = ref([
        { 
            title: 'Meus dados',
            link: '#',
            icon:''
        },
        { 
            title: 'Menu teste',
            link: '#',
            icon:''
        },
        { 
            title: 'Sair',
            link: '#',
            icon:''
        },
    ]);
    
    const isClick = ref(false);

</script>

<template>
    <v-app-bar 
        color="white"
        elevation="0"
        flat
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon 
                @click="props.isOpenMenuToggle"
            />
        </template>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-menu
            transition="slide-y-transition"
            >
            <template v-slot:activator="{ props }">
                <v-avatar 
                    v-bind="props" 
                    image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" 
                    size="40" />
                
                <v-btn
                    color="primary"
                    v-bind="props"
                    @click="isClick = !isClick"
                    :append-icon="isClick ? 'mdi-menu-up'  :'mdi-menu-down'"
                    variant="plain"
                >
                    Fulano de tal
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
    </v-app-bar>
</template>