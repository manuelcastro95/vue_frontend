<template>
  <nav>
    <router-link to="/writers">Writers</router-link> |
    <router-link to="/books">Books</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
// No necesitas lógica aquí por ahora
</script>

<style>
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

nav {
  padding: 1rem;
  background: #2d3e50;
  margin-bottom: 2rem;
}
nav a {
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
nav a.router-link-active {
  font-weight: bold;
  color: #ffd700;
}
nav a:hover {
  color: #ffd700;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}

form {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 2rem;
}

input, select, button {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #bbb;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
}

button {
  background: #2d3e50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
button:hover {
  background: #1a2533;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
</style>