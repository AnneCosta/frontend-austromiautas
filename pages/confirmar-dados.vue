<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="../static/image/logo_no_bg.png" alt="" width="150" />
        <nuxt-link to="/entrar">
          <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg">
            Entrar
          </a-button>
        </nuxt-link>
      </nav>
      <img src="../static/image/wave.png" alt="" width="100%" />
    </header>
    <main class="container m-auto">
      <h1 class="text-2xl text-center font-bold mt-4 mx-4 md:mx-0">
        Informe seus dados
      </h1>
      <section class="mx-4 md:mx-auto md:w-1/2">
        <form>
          <section>
            <a-input label="Nome completo" />
          </section>
          <section>
            <a-input label="CPF" />
          </section>
          <section class="my-8">
            <a-input
              id="birth"
              label="Data de nascimento"
              type="date"
              elevate-label
            />
          </section>

          <a-button class="mb-4 md:mb-0 w-full my-4" fluid size="md">
            Confirmar adoção
          </a-button>
        </form>
      </section>
    </main>
  </div>
</template>
