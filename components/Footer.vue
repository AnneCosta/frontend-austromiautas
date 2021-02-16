<template>
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
</template>

<script>
export default {}
</script>

<style lang="scss">
.teste {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
}

img .pettie {
  z-index: 10;
  position: relative;
  bottom: 320;
}

.container-fluid {
  justify-content: flex-end;
}

.geral {
  min-height: 100%;
  position: relative;
  width: 800px;
}

.footer {
  width: 100%;
  bottom: 0;
  position: fixed;
}
</style>
