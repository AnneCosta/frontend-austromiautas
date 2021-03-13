<template>
  <main class="min-h-screen bg-primary">
    <header class="p-5 sm:bg-primary-400 relative z-0 flex">
      <div class="w-full space-y-3">
        <h1
          class="font-bold leading-none text-gray-200 text-xl sm:text-3xl xl:text-4xl 2xl:text-6xl"
        >
          Bem vindo à Austromiautas
        </h1>

        <p
          class="text-white antialiased text-sm md:text-xl xl:text-2xl 2xl:text-5xl"
        >
          Nós conectamos pessoas que <br />
          querem doar seus pets à pessoas <br />
          que querem adotá-los.
        </p>

        <a-button color="secondary" shape="square" size="lg">
          Quero adotar um pet
        </a-button>
      </div>
      <div class="w-full flex justify-center items-center">
        <img
          src="/image/logo_no_bg.png"
          alt="logo"
          class="w-1/2 xl:w-1/3 hidden sm:inline-block"
        />
      </div>
    </header>
    <img
      src="/image/wave_bottom.svg"
      class="w-full hidden sm:inline-block z-10"
      style="margin-top: -5%"
    />

    <section class="sm:hidden">
      <img
        src="/image/wave_top.svg"
        class="w-full"
        style="margin-bottom: -1px"
      />
      <div
        class="bg-primary-400 relative w-full flex justify-center items-center"
      >
        <img src="/image/logo_no_bg.png" alt="logo" class="w-1/4" />
      </div>
      <img
        src="/image/wave_bottom.svg"
        class="w-full"
        style="margin-top: -1px"
      />
    </section>

    <section class="p-8">
      <div class="space-y-5 flex flex-col justify-end items-end">
        <h1
          class="font-bold leading-none text-gray-200 text-xl sm:text-3xl xl:text-4xl 2xl:text-6xl text-right"
        >
          Encontre pessoas <br class="inline-block sm:hidden" />
          para adotar um pet
        </h1>

        <p
          class="text-white antialiased text-sm md:text-xl xl:text-2xl 2xl:text-5xl text-right"
        >
          Nós sabemos os desafios de se ter um <br class="hidden sm:inline" />
          ou mais pets, por isso criamos um espaço
          <br class="hidden sm:inline" />
          especial para você divulgar a adoção<br class="hidden sm:inline" />
          dos seus pets caso queira doá-los.
        </p>
        <nuxt-link to="/entrar">
          <a-button color="secondary" shape="square" size="lg">
            Quero doar um pet
          </a-button>
        </nuxt-link>
      </div>
    </section>
    <a-footer />
  </main>
</template>

<script>
export default {}
</script>
