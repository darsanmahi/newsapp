<template>
    <div class="entertainment">
        <EntertainmentNewsVue :articles="articles"></EntertainmentNewsVue>
    </div>
</template>

<script>
import EntertainmentNewsVue from '../components/EntertainmentNews';
import axios from 'axios';


export default {
  name: 'Entertainment',
  components: {
    EntertainmentNewsVue,
  },
  data() {
    return {
      articles: [],
      apikey: 'e2069e95153d4631acce16c4d4471e7c'
    }
  },
  created() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey='+this.apikey)
    .then(response => {
      this.articles = response.data.articles;
      console.log(response.data.articles);
    });
  },
}
</script>
