<template>
    <div>
        <router-link to="/">
            <span class="material-symbols-outlined">
                arrow_back_ios
            </span>
        </router-link>
        <h1>Volta</h1>
        <div class="container-title">
            <div class="container-message">
                <Message v-if="msg" :msg="msg" :class="status"/>
            </div>
        </div>

        <main>
            <Relogio />
            <Button  @funcao="registrar" metodo="Segure para confirmar"/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Relogio from '@/components/Relogio.vue';
import Button from '@/components/Button.vue';
import Message from '@/components/Message.vue';

    export default{
        name:'Entrada',
        components:{
            Footer,
            Relogio,
            Button,
            Message
        },
        data(){
            return{
                msg: null,
                status: null,
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
                    registro: 'Volta',
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
</style>