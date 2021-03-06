<template>
  <main class="container-fluid text-white h-screen">
    <!-- Header -->
    <header>
      <section class="text-lg flex bg-primary justify-around items-center">
        <section class="justify-center content-center">
          <h1 class="text-4xl">Bem vindo à Austromiautas</h1>
          <p class="leading-7">
            Nós conectamos pessoas que querem doar seus pets à pessoas que
            querem adotá-los.
          </p>
          <nuxt-link to="/dashboard">
            <BaseButton>Quero adotar um pet</BaseButton>
          </nuxt-link>
        </section>
        <section>
          <img
            src="~assets/image/logo.svg"
            alt="Logo do Austromiautas"
            width="250"
          />
        </section>
      </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 150">
          <path
            fill="#202567"
            fill-opacity="1"
            d="M0,192L34.3,186.7C68.6,181,137,171,206,144C274.3,117,343,75,411,74.7C480,75,549,117,617,133.3C685.7,149,754,139,823,117.3C891.4,96,960,64,1029,74.7C1097.1,85,1166,139,1234,154.7C1302.9,171,1371,149,1406,138.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </section>
    </header>
    <!-- Middle -->
    <section
      class="text-lg text-right mr-10 content-center justify-end grid relative z-10"
    >
      <section>
        <h2 class="text-4xl">Encontre pessoas para adotar um pet</h2>
        <p class="leading-7">
          Nós sabemos os desafios de se ter um ou mais pets, <br />
          por isso criamos um espaço especial para você divulgar a adoção
          <br />
          dos seus pets caso queira doá-los.
        </p>
        <nuxt-link to="/login">
          <BaseButton>Quero doar um pet</BaseButton>
        </nuxt-link>
      </section>
    </section>
    <a-footer />
  </main>
</template>

<script>
export default {}
</script>

<style></style>
