<template>
    <div>
        <router-link to="/">
            <span class="material-symbols-outlined">
                arrow_back_ios
            </span>
        </router-link>
    </div>
</template>

<script>
export default{
    name:'ButtonVotar'
}
</script>

<style scoped>
a{
    color: white;
    position: absolute;
    left: 50px;
    top: 50px;
}
span{
    font-size: 30pt;
}
</style>