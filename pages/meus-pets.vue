<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="../static/image/logo_no_bg.png" alt="" width="150" />
        <button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg">
          Bem vindo(a), {{ nome }}!
        </button>
      </nav>
      <img src="../static/image/wave.png" alt="" width="100%" />
    </header>
    <main class="container m-auto">
      <h1
        class="text-4xl text-center md:text-left font-bold text-primary-100 py-4"
      >
        Meus pets
      </h1>
      <!---->
      <article class="flex pb-12 flex-wrap justify-center md:justify-start">
        <section
          class="w-64 mr-0 mb-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
          style="height: 320px"
        >
          <a-animal-card
            bg="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
          >
            <section
              class="flex justify-end pr-4 customDetailsUp"
              style="height: 50%"
            >
              <p class="text-4xl textShadow">&#9794;</p>
            </section>
            <section class="flex items-end" style="height: 50%">
              <section class="pl-2 pb-2 w-full customDetailsBottom">
                <h1 class="text-2xl textShadow">Doguinho</h1>
                <p class="pb-2 textShadow">≈ 1 ano</p>
                <a-button color="secondary" size="sm">Ver detalhes</a-button>
              </section>
            </section>
          </a-animal-card>
        </section>
        <section
          class="w-64 mr-0 mb-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
          style="height: 320px"
        >
          <a-animal-card
            bg="https://timesofindia.indiatimes.com/photo/67586673.cms"
          >
            <section
              class="flex justify-end pr-4 customDetailsUp"
              style="height: 50%"
            >
              <p class="text-4xl textShadow">&#9792;</p>
            </section>
            <section class="flex items-end" style="height: 50%">
              <section class="pl-2 pb-2 w-full customDetailsBottom">
                <h1 class="text-2xl textShadow">Catinha</h1>
                <p class="pb-2 textShadow">≈ 6 meses</p>
                <a-button color="secondary" size="sm">Ver detalhes</a-button>
              </section>
            </section>
          </a-animal-card>
        </section>
      </article>
      <!---->
      <h2
        class="text-4xl text-center md:text-left pb-5 font-bold text-primary-100"
      >
        Pets adotados
      </h2>
      <article class="flex flex-wrap justify-around">
        <section class="flex py-6">
          <img
            class="rounded-xl petsadotados"
            src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
            alt=""
            width="120"
          />
          <section class="pl-4">
            <p class="text-xl">Petinho</p>
            <p class="pb-2">≈ 6 meses <br /></p>
            <a-button color="secondary" size="sm">Ver detalhes</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl petsadotados"
            src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
            alt=""
            width="120"
            height="120"
          />
          <section class="pl-4">
            <p class="text-xl">Fofinho</p>
            <p class="pb-2">≈ 1 ano <br /></p>
            <a-button color="secondary" size="sm">Ver detalhes</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl petsadotados"
            src="https://i.natgeofe.com/n/867b88cb-b464-4a53-897b-11528bb5d669/01-cat-names-nationalgeographic_1525054.jpg"
            alt=""
            width="120"
          />
          <section class="pl-4">
            <p class="text-xl">Gatito</p>
            <p class="pb-2">≈ 3 anos <br /></p>
            <a-button color="secondary" size="sm">Ver detalhes</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl petsadotados"
            src="https://images6.fanpop.com/image/photos/41400000/cute-kitties-kitties-41455758-500-460.jpg"
            alt=""
            width="120"
          />
          <section class="pl-4">
            <p class="text-xl">Catinha</p>
            <p class="pb-2">≈ 2 meses <br /></p>
            <a-button color="secondary" size="sm">Ver detalhes</a-button>
          </section>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      nome: 'Ana Maria Fulana da Silva',
    }
  },
}
</script>

<style>
.customDetailsUp {
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  border-radius: 10px 10px 0px 0px;
}
.customDetailsBottom {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  border-radius: 0px 0px 10px 10px;
}
.textShadow {
  text-shadow: 1px 1px 3px #000;
}

.petsadotados {
  height: 120px !important;
  border-radius: 20px;
  object-fit: cover;
}
</style>
