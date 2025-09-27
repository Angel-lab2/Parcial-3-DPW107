<template>
  <div class="contador-page">
    <h1>Página de contador</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: "Contador",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.contador-page {
  text-align: center;
  margin-top: 2rem;
  font-family: Arial, sans-serif;
}
</style>
