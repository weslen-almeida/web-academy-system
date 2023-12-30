// Criar a logica para permitir o acesso somente logado.

const logged: boolean = true;

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path !== "/login" && !logged) return navigateTo("/login");
})