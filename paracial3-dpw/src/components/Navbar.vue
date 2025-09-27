<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contador">Contador</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}
ul {
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
