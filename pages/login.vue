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
              <nuxt-link
                to="/dashboard"
                class="text-sm bg-dark-custom text-white p-2 rounded-full mt-6 w-full"
              >
                <button>Entrar</button>
              </nuxt-link>

              <span
                class="flex items-center justify-center p-2 text-gray-500 w-full"
              >
                <hr class="w-full mr-4" />
                ou
                <hr class="w-full ml-4" />
              </span>

              <nuxt-link
                to="/cadastro"
                class="text-sm border-2 border-dark-custom text-dark-custom p-2 mb-10 rounded-full w-full whitespace-no-wrap"
              >
                <button>Criar Conta</button>
              </nuxt-link>
            </div>
          </form>
        </section>
      </div>
    </main>
    <a-footer />
  </section>
</template>

<style></style>
