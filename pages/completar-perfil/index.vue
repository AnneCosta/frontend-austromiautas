<template>
  <div class="min-h-screen bg-primary flex items-center justify-center w-full">
    <div class="relative z-10 px-4">
      <a-card fluid class="flex flex-col max-w-2xl space-y-6">
        <h1 class="text-primary text-xl font-bold">Estamos quase lá...</h1>
        <p class="text-center">
          Precisamos de mais algumas informações para concluir o seu cadastro,
          após isso você estará completamente livre para doar os seus pets
        </p>

        <div class="flex justify-end w-full">
          <nuxt-link to="/completar-perfil/passos/contato">
            <a-button color="primary"> Continuar </a-button>
          </nuxt-link>
        </div>
      </a-card>
    </div>
    <a-footer class="absolute bottom-0" />
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],
}
</script>
