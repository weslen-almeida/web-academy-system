<template>
    
    <div class="h-screen w-screen flex flex-col">
        <LayoutHeader/>
        <div class="flex flex-1">
            <aside class="w-2 bg-zinc-500 p-6">
                <nav class="space-y-4">
                    Home
                </nav>
                <nav>
                    Treino
                </nav>
                <nav>
                    Financeiro
                </nav>
            </aside>
            <UMain>
                <NuxtPage/>
            </UMain>
        </div>
        <LayoutFooter/>
    </div>

</template>