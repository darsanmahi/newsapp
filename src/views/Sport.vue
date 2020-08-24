<template>
    <div class="sports">
        <SportsNewsVue :articles="articles"></SportsNewsVue>
    </div>
</template>

<script>
import SportsNewsVue from '../components/SportsNews';
import axios from 'axios';


export default {
  name: 'Science',
  components: {
    SportsNewsVue
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
