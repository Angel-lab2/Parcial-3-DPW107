<template>
  <footer class="footer">
    <p>© 2025 Mi Proyecto VueJS. Todos los derechos reservados.</p>
    <div class="social-links">
      <a href="#" target="_blank">Facebook</a> |
      <a href="#" target="_blank">Twitter</a> |
      <a href="#" target="_blank">Instagram</a>
    </div>
    <p>Acerca de: Este proyecto es un ejemplo de VueJS con Vite.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f2f2f2;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

.footer a {
  text-decoration: none;
  color: #333;
}

.footer a:hover {
  text-decoration: underline;
}

.social-links {
  margin: 0.5rem 0;
}
</style>
