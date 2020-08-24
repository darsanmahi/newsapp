<template>
    <div class="sportsnews">
        <b-container class="text-center">
            <h1>Sports News</h1>
        </b-container>
        <b-container>
            <b-row>
                <b-col v-for="(article, index) in articles" :key="index">
                    <b-card bg-variant="light" text-variant="black" class="headline-card text-center" :img-src="article.urlToImage">
                        <b-card-title> {{article.title}} </b-card-title>
                        <b-card-sub-title><strong>Source:</strong> {{ article.source.name }} </b-card-sub-title>
                        <b-card-text>
                            {{article.description}}
                        </b-card-text>
                        <b-card-footer footer-bg-variant="light" footer-border-variant="none" style="max-width: 100%; margin-top: 5px">
                            <a :href="article.url"> {{ article.url }} </a>
                        </b-card-footer>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
    }

    .headline-card{
        padding: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
        max-width: 530px;
    }
</style>

<script>
export default {
    props: {
        articles: Array
    }
}
</script>