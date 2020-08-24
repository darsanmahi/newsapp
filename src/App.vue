<template>
  <div id="app">
    <sidebar-vue></sidebar-vue>
    <router-view/>
    <footer class="footer">
      Made with <b-icon icon="heart-fill" variant="danger"></b-icon> using VUE
    </footer>
  </div>
</template>

<style scoped>
    .footer{
      text-align: center;
      font-weight: bolder;
      font-style: italic;
    }
</style>

<script>
import SidebarVue from './components/Sidebar.vue'

export default {
  components: {
    SidebarVue
  }  
}
</script>