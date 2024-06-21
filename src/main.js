import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'; // Seu componente raiz
import Content from './components/Content.vue'; // Importe seus componentes

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Content }, // Rota para o componente Content
  // Adicione outras rotas aqui
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use 'history' para URLs limpas (sem #)
});

new Vue({
  render: (h) => h(App),
  router, // Adicione o router à instância Vue
}).$mount('#app');
