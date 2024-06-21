import Vue from 'vue';
import Router from 'vue-router';

// Importar os componentes que serão usados nas rotas
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Form from './components/Form.vue';
import Header from './components/Header.vue';
import List from './components/List.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Content,
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
  ],
});