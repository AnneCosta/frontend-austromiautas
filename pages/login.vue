<template>
  <section>
    <header class="container-fluid">
      <section class="flex justify-center bg-dark-custom">
        <img
          src="~assets/image/logo.svg"
          alt="Logo do Austromiautas"
          width="200"
        />
      </section>
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 70 1440 123"
          style="position: relative; z-index: -1"
        >
          <path
            fill="#202567"
            fill-opacity="1"
            d="M0,192L34.3,186.7C68.6,181,137,171,206,144C274.3,117,343,75,411,74.7C480,75,549,117,617,133.3C685.7,149,754,139,823,117.3C891.4,96,960,64,1029,74.7C1097.1,85,1166,139,1234,154.7C1302.9,171,1371,149,1406,138.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </section>
    </header>
    <main class="container-fluid flex justify-center">
      <section class="bg-white rounded-3xl background text-center">
        <h1 class="text-4xl pb-8 text-dark-custom text-center">Entrar</h1>
        <form action="" class="justify-center">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            class="config focus:outline-none border-opacity-25 text-lg w-80"
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Senha"
            class="config focus:outline-none text-lg w-80"
          />
          <br />
          <a href="#" class="text-dark-custom">Esqueci minha senha</a>
          <br />
          <button
            class="text-xl bg-dark-custom text-white w-2/4 p-2 rounded-full mt-6"
            type="submit"
          >
            Entrar
          </button>
        </form>
        <button
          onclick="window.location.href = '/'"
          class="text-xl border-2 border-dark-custom text-dark-custom w-2/4 p-2 rounded-full mt-2"
        >
          Criar conta
        </button>
      </section>
    </main>
    <Footer />
  </section>
</template>

<style lang="css">
@import url('~assets/styles/main.scss');
.background {
  position: relative;
  bottom: 8em;
  padding: 30px;
  width: 50%;
  z-index: 10;
}
.config {
  width: 80%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  border-bottom: 1px solid rgb(177, 177, 177);
  margin-bottom: 1em;
}
</style>
