<template>
    <div class="main-container">
        <Message v-show="done" status="good" msg="Cadastro concluido"/>
        <h1>Sing in</h1>
        <p>Se cadastre para continuar</p>
        <form>
            <section>
                <div class="container-form">
                    <div class="container-label">
                        <label for="email">Email: </label>
                    </div>
                    <div class="container-input">
                        <input name="email" class="form-inputs" type="email" placeholder="Digite seu email" v-model="email">
                    </div>
                </div>
                
                <br>
                <div class="container-form">
                    <div class="container-label">
                        <label for="pass">Senha: </label>
                    </div>
                    <div class="container-input">
                        <input name="pass" class="form-inputs" type="password" placeholder="Digite sua senha" v-model="pass">
                    </div>
                </div>
                
                <br>
                <div class="container-form">
                    <div class="container-label">
                        <label for="name">Nome: </label>
                    </div>
                    <div class="container-input">
                        <input name="name" class="form-inputs" type="text" placeholder="Digite seu nome" v-model="name">
                    </div>
                </div>
                
                <br>
                <div class="container-form">
                    <div class="container-label">
                        <label for="age">Idade: </label>
                    </div>
                    <div class="container-input">
                        <input name="age" class="form-inputs" type="number" placeholder="Digite sua idade" v-model="age">
                    </div>
                </div>
                
                <br>
                <div class="container-form">
                    <div class="container-label">
                        <label for="profession">Profissão: </label>
                    </div>
                    <div class="container-input">
                        <input name="profession" class="form-inputs" type="text" placeholder="Digite o cargo" v-model="profession">
                    </div>
                </div>
                
                <br>
                
                <div class="container-form">
                    <div class="container-label">
                        <label for="department">Setor: </label>
                    </div>
                    <div class="container-input">
                        <input name="department" class="form-inputs" type="text" placeholder="Digite o setor" v-model="department">
                    </div>
                </div>
            </section>
            
            <br>

            <Button @funcao="postUser()" metodo="Registrar"/>
        </form>
    </div>
</template>

<script>
import Message from '@/components/Message.vue'
import Button from '@/components/Button.vue'

    export default{
        name:'Cadastro',
        components:{
            Message,
            Button
        },

        data(){
            return{
                email: null,
                pass: null,
                name: null,
                age: null,
                profession: null,
                department: null,
                done: false,
                msg: null
            }
        },

        mounted(){
            this.getUsers()
        },

        methods:{
            async getUsers(){
                const req = await fetch("http://localhost:3000/users")
                const data = await req.json()
                console.log(data)
            },

            async postUser(e){
                const form = {
                    email: this.email,
                    pass: this.pass,
                    nome: this.name,
                    idade: this.age,
                    cargo: this.profession,
                    setor: this.department
                } 
                // console.log(form)
                const formatedForm = JSON.stringify(form)
                // console.log(formatedForm)
                const req = await fetch("http://localhost:3000/users",{
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: formatedForm
                })
                const res = await req.json()
                // console.log(res)
                this.done = true
                setTimeout(() => this.done=false ,3000)
                this.email=""
                this.pass=""
                this.name=""
                this.age=""
                this.profession=""
                this.department=""
                setTimeout(() => window.location.href="/login",2000)
            }
        }

    }
</script>

<style scoped>
section{
    margin-top: 20px;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 20px;
}
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: rgb(175, 175, 175); */
}
input{
    width: 100%;
    height: 90%;
    border: none;
    color: rgba(12, 12, 12, 0.548);
    background-color: #7e919e02;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    padding-left: 20px;
}
input::placeholder{
    color: white;
}
form{
    width: 80vw;
    /* background-color: aqua; */
}
label{
    color: black;
}
.container-form{
    /* background-color: rgb(248, 0, 227); */
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.container-label{
    /* background-color: rgb(0, 250, 54); */
    width: 30%;
    height: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.container-input{
    /* background-color: red; */
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>