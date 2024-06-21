<template>
  <div class="container">
    <h1>Olá, Mundo!</h1>
    <p>Bem-vindo ao seu segundo projeto Vue.js.</p>
    <form @submit.prevent="enviarFormulario">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="nome" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="email" required>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      nome: '',
      email: '',
    };
  },
  methods: {
    enviarFormulario() {
      // Aqui você pode processar os dados do formulário
      console.log('Nome:', this.nome);
      console.log('E-mail:', this.email);
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
</style>