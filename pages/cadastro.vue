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
    <main>
      <div
        class="w-full h-full px-2 flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-40"
      >
        <section
          class="bg-white rounded-3xl text-center py-5 flex flex-col items-center justify-center"
        >
          <h1 class="text-4xl pb-3 font-bold text-dark-custom text-center">
            Criar conta
          </h1>
          <section class="w-9/12">
            <a-flat-input
              v-model="user.name"
              class="input my-1"
              type="text"
              name="nome"
              placeholder="Nome"
            />
            <section class="flex flex-row justify-around my-1">
              <div>
                <input
                  id="fisica"
                  v-model="user.type"
                  class="input my-1"
                  type="radio"
                  name="radio"
                  value="cpf"
                />
                <label class="text-gray-700" for="fisica">Pessoa Física</label>
              </div>
              <div>
                <input
                  id="juridica"
                  v-model="user.type"
                  type="radio"
                  name="radio"
                  value="cnpj"
                />
                <label class="text-gray-700" for="juridica"
                  >Pessoa Jurídica</label
                >
              </div>
            </section>
            <a-flat-input
              v-model="user.document"
              class="input my-1"
              type="text"
              placeholder="CPF"
            />
            <a-flat-input
              v-if="user.type === 'cpf'"
              v-model="user.birth"
              class="input my-1 text-gray-600"
              type="date"
              placeholder="Data de nascimento"
            />
            <a-flat-input
              v-model="user.email"
              class="input my-1 text-gray-600"
              type="email"
              placeholder="E-mail"
            />
            <a-flat-input
              v-model="user.password"
              class="input my-1 text-gray-600"
              type="password"
              placeholder="Senha"
            />

            <div class="flex flex-col justify-center items-center px-10">
              <button
                class="text-sm bg-dark-custom text-white p-2 rounded-full mt-6 w-full outline-none focus:outline-none"
                @click="handleRegister"
              >
                Cadastrar
              </button>

              <span
                class="flex items-center justify-center p-2 text-gray-500 w-full"
              >
                <hr class="w-full mr-4" />
                ou
                <hr class="w-full ml-4" />
              </span>
              <nuxt-link
                to="/login"
                class="text-sm border-2 border-dark-custom text-dark-custom p-2 mb-10 rounded-full w-full whitespace-no-wrap"
              >
                <button>Já tenho uma conta</button>
              </nuxt-link>
            </div>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        name: 'Gabriel Silva',
        type: 'cpf',
        document: '86320301597',
        birth: '2000-01-23',
        email: 'gabriel@gmail.com',
        password: '12345678',
      },
    }
  },
  methods: {
    ...mapActions({ register: 'user/register' }),

    async handleRegister() {
      try {
        await this.register(this.user)
        this.$toast.success('Doador cadastrado', { position: 'top-center' })
        this.$router.push('/')
      } catch (error) {
        if (error.response.status === 409) {
          this.$toast.error(
            'Já existe um doador cadastrado com as credenciais informadas!',
            {
              position: 'top-center',
            }
          )
        } else if (error.response.status === 400) {
          const translatedFields = {
            email: 'E-mail',
            name: 'Nome',
            password: 'Senha',
            document: 'Documento',
            birth: 'Nascimento',
          }

          const fields = error.response.data.errors.map(
            (err) => translatedFields[err.property]
          )

          this.$toast.error(`Os seguintes campos são inválidos: ${fields}`, {
            position: 'top-center',
          })
        }
      } finally {
        setTimeout(() => {
          this.$toast.clear()
        }, 10000)
      }
    },
  },
}
</script>

<style lang="css">
@import url('~assets/styles/main.scss');
</style>
