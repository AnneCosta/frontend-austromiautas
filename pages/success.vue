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
          <img
            src="~assets/image/friends.svg"
            alt="Imagem de uma garota e um cachorro sentados no chão e árvores ao fundo"
            width="120vw"
            class="pb-5"
          />
          <h1 class="text-4xl pb-3 font-semibold text-dark-custom text-center">
            Sua conta foi ativada!
          </h1>

          <h4 class="text-lg">
            Você está pronto(a) para começar a usar o nosso sistema!
            <br />Clique no botão abaixo para ser redirecionado para a página de
            login.
          </h4>
          <br />
          <nuxt-link to="/login">
            <a-button>Ir para o login</a-button>
          </nuxt-link>
        </section>
      </div>
    </main>
    <a-footer />
  </section>
</template>
