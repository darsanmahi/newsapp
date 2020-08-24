<template>
    <div class="business">
        <BusinessNewsVue :articles="articles"></BusinessNewsVue>
    </div>
</template>

<script>
import BusinessNewsVue from '../components/BusinessNews';
import axios from 'axios';


export default {
  name: 'Business',
  components: {
    BusinessNewsVue,
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
