<template>
    <div>
        <router-link :class="color" to="/">
            <span class="material-symbols-outlined">
                arrow_back_ios
            </span>
        </router-link>
    </div>
</template>

<script>
export default{
    name:'ButtonVotar',
    props: {
        color: String,
    }
}
</script>

<style scoped>
div > a{
    color: white;
    position: absolute; 
    left: 50px;
    top: 50px;
    text-decoration: none;
}
.white{
    color: white;
}
.black{
    color: black;
}
span{
    font-size: 30pt;
}
</style>