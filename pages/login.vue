<template>
  <section>
    <a-header />
    <main class="container-fluid flex justify-center">
      <div
        class="w-full h-full px-2 flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-40"
      >
        <section
          class="bg-white rounded-3xl text-center p-10 flex flex-col justify-center items-center"
        >
          <h1 class="text-4xl pb-3 font-semibold text-dark-custom text-center">
            Entrar
          </h1>
          <form class="w-9/12">
            <a-flat-input
              class="input my-1"
              type="email"
              placeholder="E-mail"
            />
            <a-flat-input class="input my-1" type="text" placeholder="Senha" />

            <p class="text-dark-custom text-left font-thin mt-1">
              <a href="/recuperarsenha">Esqueci minha senha</a>
            </p>

            <div class="flex flex-col justify-center items-center px-10">
              <nuxt-link class="w-full mt-6" to="/dashboard">
                <a-button class="w-full" color="primary">Entrar</a-button>
              </nuxt-link>

              <a-dividir>ou</a-dividir>

              <nuxt-link to="/cadastro" class="w-full">
                <a-button-outline class="w-full">
                  Criar Conta
                </a-button-outline>
              </nuxt-link>
            </div>
          </form>
        </section>
      </div>
    </main>
    <a-footer />
  </section>
</template>
