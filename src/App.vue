<template>
  <div id="app">
    <router-view></router-view> <!-- Renderiza o componente correspondente à rota -->
    <HelloWorld />
    <AppHeader />
    <Content />
    <AppForm />
    <List />
    <AppFooter />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/Header.vue'
import Content from './components/Content.vue'
import AppForm from './components/Form.vue'
import List from './components/List.vue'
import AppFooter from './components/Footer.vue'
import router from './router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
    Content,
    AppForm,
    List,
    AppFooter,
  },
  router,
}
</script>

<style>
/* Global styles for the application */
</style>
