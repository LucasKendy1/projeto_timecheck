<template>
    <div>
        <input @click="$emit('funcao')" class="input-button" type="button" :value="metodo">
    </div>
</template>

<script>
export default{
    name:'Button',
    props:{
        metodo: String
    },
    emits:['funcao']
}
</script>

<style scoped>
.input-button{
    width: 100%;
    height: 70px;
    cursor: pointer;
    border-radius: 70px;
    border: none;
    background-color: #f25044;
    color: white;
    font-weight: 800;
    font-size: 15pt;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: .5s;
}
.input-button:hover{
    background-color: #ad3a32;
    font-size: 18pt;
}
</style>