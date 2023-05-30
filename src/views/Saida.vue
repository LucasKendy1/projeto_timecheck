<template>
    <div>
        <ButtonVoltar />
        <h1>Saida</h1>
        <div class="container-title">
            <div class="container-message">
                <Message v-if="msg" :msg="msg" :class="status"/>
            </div>
        </div>

        <main>
            <Relogio />
            <Button  @funcao="confirmar" metodo="Aperte para confirmar"/>
        </main>

        <div v-if="boxconfirmation" class="blur">
            <div class="message">
                <h2>Deseja confirmar o ponto em {{ hora }}?</h2>
                <div class="buttons">
                    <button class="good" @click="registrar">Yes</button>
                    <button class="bad" @click="confirmar">No</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Relogio from '@/components/Relogio.vue';
import Button from '@/components/Button.vue';
import Message from '@/components/Message.vue';
import ButtonVoltar from '@/components/ButtonVoltar.vue';

    export default{
        name:'Entrada',
        components:{
            Footer,
            Relogio,
            Button,
            Message,
            ButtonVoltar

        },
        data(){
            return{
                msg: null,
                status: null,
                botao: null,
                boxconfirmation: false,
                hora: null,
            }
        },
        props:{
            tela: String,
        },
        methods:{
            async registrar(){
                let hora = document.getElementsByClassName('container-relogio')
                hora=hora[0].outerText
                console.log(hora)

                const myUser = JSON.parse(localStorage.getItem('user'))
                // console.log(myUser.nome)
                const nome=myUser.nome
                const data = new Date()
                const dia = data.getDate()
                const mes = data.getMonth()+1
                const ano = data.getFullYear()
                // console.log(dia)
                // console.log(mes)
                // console.log(ano)
                const formatedData = `${dia}/${mes}/${ano}`
                const form = {
                    nome: nome,
                    registro: 'Saida',
                    hora: hora,
                    data: formatedData 
                }
                const formatedForm = JSON.stringify(form)

                const req = await fetch("http://localhost:3000/registros",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: formatedForm
                })
                this.msg="Ponto registrado"
                this.status='good'
                const res = await req.json()
                setTimeout(() => window.location.href="/",1000)
            },
            confirmar(){
                let hora = document.getElementsByClassName('container-relogio')
                hora=hora[0].outerText
                console.log(hora)
                this.hora=hora
                this.boxconfirmation=!this.boxconfirmation
            }
        }
    }

</script>

<style scoped>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
    flex-direction: column;
}
h1{
    margin-top: 30px;
    height: 7vh;
}
a{
    color: white;
    position: absolute;
    left: 50px;
    top: 50px;
}
span{
    font-size: 30pt;
}
.container-message{
    width: 50%;
}
.container-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.blur{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.288);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.message{
    width: 500px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.good{
    width: 100px;
    height: 50px;
    border-radius: 7px;
    background-color: rgb(16, 165, 16);
    color: white;
    border:none;
    margin-right: 10px;
    margin-top: 10px;
    cursor:pointer;
}
.bad{
    width: 100px;
    height: 50px;
    border-radius: 7px;
    background-color: rgb(231, 31, 31);
    color: white;
    border:none;
    margin-left: 10px;
    margin-top: 10px;
    cursor:pointer;
}
.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>