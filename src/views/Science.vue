<template>
    <div class="science">
        <ScienceNewsVue :articles="articles"></ScienceNewsVue>
    </div>
</template>

<script>
import ScienceNewsVue from '../components/ScienceNews';
import axios from 'axios';


export default {
  name: 'Science',
  components: {
    ScienceNewsVue
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
