<template>
    <div>
        <footer>
            <div v-show="menu" class="menuAberto">
                <div class="container-imagem"></div>
                <ul>
                    <li @click="$emit('abrirHeader') "><div @click="abrirmenu">Perfil</div></li>
                    <router-link to="/historico">
                        <li>Meus Pontos</li>
                    </router-link>
                    <a target="blank" href="https://chat.whatsapp.com/I71VfpsDMbZEd8pzaDO4qi">
                        <li>Chat RH</li>
                    </a>
                    <router-link to="/ajuda">
                        <li>Ajuda</li>
                    </router-link>
                </ul>

                <div class="container-botoes">
                    <div class="container-settings">
                        <span class="material-symbols-outlined">
                            settings
                        </span>
                        Configurações
                    </div>
                    <div class="container-logout">
                        <router-link to="/login">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            Sair da conta
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-show="menu" class="menu-fechar" @click="abrirmenu"></div>

            <div class="container-icon" @click="abrirmenu">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </div>
            <div class="container-icon">
                <router-link to="/">
                        <span class="material-symbols-outlined">
                            home
                        </span>
                </router-link>
            </div>
            <div class="container-icon">
                <router-link to="/historico">
                        <span class="material-symbols-outlined">
                            check_circle
                        </span>
                </router-link>
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
    emits:['abrirHeader','abrirHistorico']
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
    transform: translateY(-80px);
}
ul > a{
    color: #f25044;
    transform: translateX(-30px);
}
li{
    cursor: pointer;
    list-style-type: none;
    margin-top: 20px;
}
.container-imagem{
    width: 300px;
    height: 300px;
    background: url(../../public/time_check.png);
    background-position: center center;
    /* position: absolute; */
    /* background-color: #f25044; */
    transform: translateY(-70px);
    top:0;
}
.container-botoes{
    /* background-color: aqua; */
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}
.container-logout > a {
    color: white;
}
.container-settings{
    /* background-color: #f25044; */
    width: 97%;
    height: 47%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:20pt;
    color: #f25044;
}
.container-logout{
    background-color: #f25044; 
    width: 97%;
    height: 47%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:20pt;
    border-radius: 10px;
}
@media(min-width: 780px) and (max-width: 1440px){
.menuAberto{
    max-width: 40%; 
}  
.menu-fechar{
    width: 60%;
}
}

@media(min-width: 1440px){
.menuAberto{
    max-width: 20%; 
}  
.menu-fechar{
    width: 80%;
}
}
</style>