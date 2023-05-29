<template>
    <div class="body">
        <header>
            <ButtonVoltar color="black"/>
            <h1>Ajuda</h1>
        </header>
        <main>
            <H2 @click="changedisplayState" titulo="O que é TIME Check?"/>
            <Paragrafo :display="displayState" content="Time Check é um aplicativo de registro de ponto eletrônico, que possibilita o controle de horários do colaborador, sendo de forma prática e simples de utilizar. "/>
            <H2 @click="changedisplayState1" titulo="Como utilizar o aplicativo TIME Check?" />
            <Paragrafo :display="displayState1" content="O aplicativo é composto por 5 partes. São elas:" />
            <ul v-if="displayState1">
                <router-link to="/ajudalogin">
                    <li>Login</li>
                </router-link>
                <li>Home</li>
                <li>Perfil</li>
                <li>Pontos</li>
                <li>Historico</li>
            </ul>
        </main>
    </div>
</template>

<script>
import ButtonVoltar from '@/components/ButtonVoltar.vue';
import Paragrafo from '@/components/Paragrafo.vue';
import H2 from '@/components/H2.vue';

 export default{
    name: "Ajuda",
    components: { 
        ButtonVoltar,
        Paragrafo,
        H2,
    },
    data(){
        return{
            displayState: false,
            displayState1: false,
        }
    },
    methods:{
        changedisplayState(){
            this.displayState= !this.displayState
        },
        changedisplayState1(){
            this.displayState1= !this.displayState1
        }

    }
}
</script>

<style scoped>
.body{
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
}
h1{
    color: black;
    font-size: 40pt;
    /* background-color: aqua; */
    height: 140px;
    line-height: 140px;
}
main{
    text-align: center;
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    width: 30%;
}
</style>