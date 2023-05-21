<template>
    <div class="container-info">
        <div class="container-1">
            {{ nome }}
        </div> 
        <div class="container-2">
            {{ myProp }}
        </div>
    </div>
</template>

<script>
export default{
    name: 'ContainerDado',
    props:{
        nome: String,
        myProp: String
    }
}
</script>

<style scoped>
.container-info{
/* background-color: aqua; */
border-bottom: 2px solid #feb06a;
width: 400px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
}
.container-1{
    /* background-color: rgb(255, 0, 0); */
    border-right: 2px solid #feb06a;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
}
.container-2{
    /* background-color: rgb(0, 255, 0); */
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
}
</style>