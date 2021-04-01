<template>
  <div class="min-h-screen bg-primary">
    <a-header />
    <section>
      <h1 class="text-white text-4xl font-bold ml-10">Meus Pets</h1>
    </section>
    <a-footer />
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
}
</script>
