<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="../static/image/logo_no_bg.png" alt="" width="150" />
        <input
          class="w-1/3 rounded-full focus:outline-none pl-6"
          type="text"
          placeholder="Pesquisar..."
          style="height: 40px"
        />
        <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg"
          >Entrar</a-button
        >
      </nav>
      <img src="../static/image/wave.png" alt="" width="100%" />
    </header>
    <main class="container m-auto">
      <h1>Detalhes do pet</h1>
      <section>
        <!-- Prev/Next Arrows -->
        <div class="flex">
          <div class="flex items-center justify-center w-1/2">
            <button
              class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              @click="
                activeSlide =
                  activeSlide === 1 ? slides.length : activeSlide - 1
              "
            >
              &#8592;
            </button>
          </div>
          <div class="flex items-center justify-center w-1/2">
            <button
              class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
              @click="
                activeSlide =
                  activeSlide === slides.length ? 1 : activeSlide + 1
              "
            >
              &#8594;
            </button>
          </div>
        </div>
        <!-- Slides -->
        <div>
          <div v-for="slide in slidess" :key="slide">
            <div
              v-show="activeSlide === slide"
              class="p-24 font-bold text-5xl h-64 flex justify-center items-center bg-teal-500 text-white rounded-lg"
            >
              <span class="w-12 text-center" v-text="slide"></span>
              <span class="text-teal-300">/</span>
              <span class="w-12 text-center" v-text="slides.length"></span>
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div class="w-full flex items-center justify-center px-4">
          <div v-for="slide in slidess" :key="slide">
            <button
              class="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
              :class="{
                'bg-orange-600': activeSlide === slide,
                'bg-teal-300': activeSlide !== slide,
              }"
              @click="activeSlide = slide"
            ></button>
          </div>
        </div>
      </section>
      <section>
        <vueper-slides autoplay>
          <vueper-slide
            v-for="slide in slides"
            :key="slide.id"
            :title="slide.title"
            :content="slide.content"
          />
        </vueper-slides>
      </section>
    </main>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      activeSlide: 1,
      slidess: [1, 2, 3],
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          id: 'slide-1',
          title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          content:
            'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        },
        {
          id: 'slide-2',
          title: 'Slide <b style="font-size: 1.3em;color: yellow">#2</b>',
          content:
            'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        },
      ],
    }
  },
}
</script>
