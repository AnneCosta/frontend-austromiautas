<template>
  <div class="container-fluid">
    <div>
      <!-- Header -->
      <main>
        <section class="header">
          <div class="left-header">
            <h1>Bem vindo à Austromiautas</h1>
            <p class="p-header">
              Nós conectamos pessoas que querem doar seus pets à pessoas que
              querem adotá-los.
            </p>
            <BaseButton>Quero adotar um pet</BaseButton>
          </div>
          <div class="right-header">
            <img
              src="~assets/image/download-icons8.svg"
              alt="Logo do Austromiautas"
              width="250"
            />
          </div>
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
      </main>
      <!-- Middle -->
      <main class="middle">
        <section class="middle-grid">
          <h1>Encontre pessoas para adotar um pet</h1>
          <p class="p-header">
            Nós sabemos os desafios de se ter um ou mais pets, <br />
            por isso criamos um espaço especial para você divulgar a adoção
            <br />
            dos seus pets caso queira doá-los.
          </p>
          <BaseButton>Encontre uma ONG</BaseButton>
        </section>
      </main>
      <!-- Footer -->
      <footer class="container-fluid">
        <section>
          <section class="footer">
            <div class="teste">
              <div>
                <img
                  src="~assets/image/Doggie.svg"
                  alt=""
                  class="doggie"
                  width="360"
                />
              </div>
              <div>
                <img
                  src="~assets/image/petting.svg"
                  alt=""
                  class="pettie"
                  width="360"
                />
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
              <path
                fill="#202567"
                fill-opacity="1"
                d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,208C672,203,768,181,864,170.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </section>
        </section>
      </footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url(~assets/styles/main.scss);
</style>
