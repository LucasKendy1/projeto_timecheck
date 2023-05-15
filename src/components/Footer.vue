<template>
    <div>
        <footer>
            <div class="container-icon">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </div>
            <router-link to="/">
                <div class="container-icon">
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </div>
            </router-link>
            <div class="container-icon">
                <span class="material-symbols-outlined">
                    check_circle
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
export default{
    name: "Footer",

}
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
}
footer{
    height: 7vh;
    background-color: white;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* position: fixed; */
}
.container-icon{
    width: 20%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
}
span{
    font-size: 32pt;
    transition: .5s ease;
    cursor: pointer;
}
span:hover{
    font-size: 40pt;
}
</style>