<template>
  <div class="layout">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped>
/* Style your layout here */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  margin: 0; 
  padding: 0; 
}

nav {
  /* Style the navigation bar as desired */
  background-color: #f0f0f0;
  padding: 20px;
}

main {
  /* Style the content area as desired */
  flex: 1; /* Make main content area flexible */
  padding: 20px;
}
</style>