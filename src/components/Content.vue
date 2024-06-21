<template>
  <main>
    <router-view></router-view> <!-- Área para os componentes de rota -->
  </main>
</template>

<script>
export default {
  name: 'Content',
  // Importe os componentes que você deseja associar às rotas
  components: {
    Header: () => import('./Header.vue'),
    Content: () => import('./Content.vue'),
    Footer: () => import('./Footer.vue'),
    Form: () => import('./Form.vue'),
    List: () => import('./List.vue'),
  },
};
</script>

<style scoped>
.content {
  padding: 20px;
  background-color: #e9ecef;
}
</style>