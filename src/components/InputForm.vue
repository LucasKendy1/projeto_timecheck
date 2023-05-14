<template>
    <div class="container-imagem">
        <span class="material-symbols-outlined">
            {{ icon }}
        </span>
    </div>
</template>

<script>
export default {
    name:'InputForm',
    props:{
        icon: String,
    }
}
</script>

<style scoped>

.container-imagem{
    width: 30%;
    height: 100%;
    /* background-color: red; */
    color: #feb06a;
    /* border-bottom: 2px solid #feb06a; */
    border-right: 2px solid #feb06a;
    display: flex;
    justify-content: center;
    align-items: center;
}
span{
    font-size: 30pt;
}

</style>