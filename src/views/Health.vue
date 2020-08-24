<template>
    <div class="health">
        <HealthNewsVue :articles="articles"></HealthNewsVue>
    </div>
</template>

<script>
import HealthNewsVue from '../components/HealthNews';
import axios from 'axios';


export default {
  name: 'Health',
  components: {
    HealthNewsVue
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
