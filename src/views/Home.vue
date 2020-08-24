<template>
  <div class="home">
    <headlines-vue :articles="articles" ></headlines-vue>
  </div>
</template>

<style scoped>
    sidebar-vue{
      padding-bottom: 10px;
    }
</style>

<script>
import HeadlinesVue from '../components/Headlines.vue';
import axios from 'axios';


export default {
  name: 'Home',
  components: {
    HeadlinesVue,
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
