<template>
    <div class="headlines">
        <b-container>
            <h1>Headlines</h1>
        </b-container>
        <b-container v-for="(article, index) in articles" :key="index">
            <b-card class="headline-card">
                <b-card-title> {{article.title}} </b-card-title>
                <b-card-sub-title> <strong>Author:</strong> {{article.author}}  <strong>Source:</strong> {{ article.source.name }} </b-card-sub-title>
                <b-card-text>
                    {{article.description}}
                </b-card-text>
            </b-card>
        </b-container>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
    }

    .headline-card{
        padding: 8px;
        border: none;
    }
</style>

<script>
export default {
    props: {
        articles: Array
    }
}
</script>