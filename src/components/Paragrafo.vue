<template>
    <p v-if="display">{{ content }}</p>
</template>

<script>
    export default{
        name: 'Paragrafo',
        props:{
            content: String,
            display: Boolean
        }
    }
</script>

<style scoped>
p{
    color: black;
    font-weight: 300;
    text-align: justify;
    max-width: 70vw;
    margin: auto;
    /* transition: linear; */
}
@media (min-width: 1200px){
    p{
        max-width: 30vw;
    }
}

</style>