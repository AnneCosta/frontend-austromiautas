<template>
  <div class="min-h-screen bg-primary">
    <div class="min-h-screen min-w-full flex justify-center items-center px-8">
      <a-card class="flex flex-col login-container relative z-10" fluid>
        <h1 class="text-primary font-bold text-3xl">Criar Conta</h1>

        <form class="space-y-6 w-full" @submit.prevent="handleRegister">
          <div class="space-y-1">
            <a-flat-input
              v-model="credentials.name"
              placeholder="Nome completo"
            />

            <div class="w-full sm:flex justify-around items-center">
              <div class="mt-2">
                <input
                  id="cpf"
                  v-model="credentials.type"
                  name="type"
                  value="cpf"
                  type="radio"
                />
                <label class="text-primary font-thin" for="cpf"
                  >Pessoa Física</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="type"
                  v-model="credentials.type"
                  name="type"
                  value="cnpj"
                  type="radio"
                />
                <label class="text-primary font-thin" for="cpf"
                  >Pessoa Jurídica</label
                >
              </div>
            </div>

            <a-flat-input
              v-model="credentials.document"
              :placeholder="
                credentials.type === 'cpf' ? 'Seu CPF' : 'CNPJ da sua ONG'
              "
            />

            <a-flat-input
              v-if="credentials.type === 'cpf'"
              id="birth"
              v-model="credentials.birth"
              placeholder="Data de nascimento"
              type="date"
            />

            <a-flat-input v-model="credentials.email" placeholder="E-mail" />

            <a-flat-input
              v-model="credentials.password"
              placeholder="Senha"
              type="password"
            />
          </div>
          <nuxt-link to="/">
            <p class="text-primary font-thin mt-3">esqueci minha senha</p>
          </nuxt-link>
          <div>
            <a-button fluid size="sm" :disabled="formIsValid" class="w-full"
              >Cadastrar</a-button
            >
            <a-dividor>ou</a-dividor>
            <nuxt-link to="/entrar">
              <a-outline-button fluid size="sm" class="w-full">
                Já possuo uma conta
              </a-outline-button>
            </nuxt-link>
          </div>
        </form>
      </a-card>
      <a-footer class="absolute bottom-0 z-0" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      credentials: {
        name: '',
        type: 'cpf',
        document: '',
        birth: '',
        email: '',
        password: '',
      },
    }
  },

  computed: {
    formIsValid() {
      return (
        this.credentials.name === '' ||
        this.credentials.document === '' ||
        this.credentials.email === '' ||
        this.credentials.password === ''
      )
    },
  },
  methods: {
    ...mapActions({ register: 'user/register' }),
    async handleRegister() {
      try {
        await this.register(this.credentials)
        this.$router.push('/success')
      } catch (error) {
        const statusCode = error.response.status
        if (statusCode === 409) {
          this.$toast.error(
            'Já existe um doador cadastrado com as credenciais fornecidas!',
            {
              position: 'top-center',
            }
          )
        } else if (statusCode === 400) {
          const { errors } = error.response.data
          const translatedFields = {
            name: 'Nome',
            document: 'Documento',
            birth: 'Data de nascimento',
            email: 'E-mail',
            password: 'Senha',
          }
          const translatedErrors = errors.map(
            (err) => translatedFields[err.property]
          )

          this.$toast.error(
            `Preencha corretamente os campos: ${translatedErrors}`,
            {
              position: 'top-center',
            }
          )
        }
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: $bp-xs) {
  .login-container {
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

@media (max-width: $bp-sm) {
  .login-container {
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

@media (max-width: $bp-md) {
  .login-container {
    width: 360px;
  }
}

@media (max-width: $bp-lg) {
  .login-container {
    width: 380px;
  }
}

@media (max-width: $bp-xl) {
  .login-container {
    width: 420px;
  }
}

@media (max-width: $bp-2xl) {
  .login-container {
    width: 480px;
  }
}
</style>
