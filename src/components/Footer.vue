<template>
    <div>
        <footer>
            <div v-show="menu" class="menuAberto">
                <ul>
                    <li>Perfil</li>
                    <li>Meus Pontos</li>
                    <li>Chat RH</li>
                    <li>Ajuda</li>
                </ul>
            </div>
            <div v-show="menu" class="menu-fechar" @click="abrirmenu"></div>

            <div class="container-icon" @click="abrirmenu">
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
            <div class="container-icon" @click="$emit(abrirHistorico)">
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
    data(){
        return{
            menu: null,
        }
    },
    methods:{
        abrirmenu(){
            this.menu = !this.menu
        }
    },
    emits:['abrirHistorico']
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
    position: fixed;
    width: 100%;
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
.menuAberto{
    height: 93vh;
    width: 60vw;
    background-color: #f7deb5;
    position: absolute;
    bottom: 7vh;
    left: 0;
    transition: 1s linear;
}

.menu-fechar{
    height: 93vh;
    width: 40vw;
    background-color: #00000059;
    position: absolute;
    bottom: 7vh;
    right: 0;
    transition: 1s linear;
}
ul{
    color: #f25044;
    font-size: 20pt;
}
li{
    cursor: pointer;
}
</style>