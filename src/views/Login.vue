<template>
    <div class="main-container">
        <Message :msg="msg" :status="status" />
        <h1>Login</h1>
        <p>Entre para continuar</p>
        <form>
            <div class="container-form">
                <InputForm icon="alternate_email"/>
                <div class="container-input">
                    <input type="email" v-model="email" >
                </div>
            </div>
            <br>
            <div class="container-form">
                <InputForm v-model="pass" icon="lock"/>
                <div class="container-input">
                    <input type="password" v-model="pass">
                </div>
            </div>
            
            <Button @funcao="getUser" metodo="Login"/>
        </form>
    </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue';
import Button from '@/components/Button.vue';
import Message from '@/components/Message.vue';

    export default{
        name: 'Login',
        data(){
            return{
                email: '',
                pass: '',
                verificadoemail:null,
                verificadosenha: null,
                msg: '',
                status: ''
            }
        },
        components:{
            InputForm,
            Button,
            Message
        },
        methods:{
            async getUser(){
                const userEmail = this.email
                const userPass = this.pass

                console.log("formulario enviado! ")
                console.log("email: ",userEmail)
                console.log("senha: ",userPass)

                const req = await fetch("http://localhost:3000/users")
                const data = await req.json()
                console.log(data)
                console.log(data[0].nome)

                for(let i=0; i<data.length; i++){
                    console.log(data[i])
                    if(data[i].email==userEmail){
                        //se for igual, é pq ele achou o email
                        console.log("achei o email")
                        this.verificadoemail=true

                        //se ele acha o email, vai procurar pela senha
                        if(data[i].pass==userPass){
                            //se ele entrar aqui, a senha esta correta e pode ser redirecionado para a tela home
                            console.log("senha correta")
                            this.verificadosenha=true
                            this.msg = "email e senha verificados com sucesso"
                            this.status = "good"
                            
                        }
                        else{
                            //se entrar aqui é pq a senha esta incorreta
                            console.log("senha incorreta")
                            this.verificadosenha=false
                            this.msg = "senha incorreta"
                            this.status = "bad"
                            
                        }
                    }
                    else{
                        //se entrar aqui é pq n existe esse email cadastrado
                        console.log("email nao cadastrado")
                        this.verificadoemail=false
                        this.msg = "email não cadastrado no sistema"
                        this.status = "non"
                    }
                }
            }
        }
    }
</script>

<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.container-input{
    width: 70%;
    height: 100%;
    /* border-bottom: 2px solid #feb06a; */
    /* background-color: rgb(21, 255, 0); */
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width: 90%;
    height: 90%;
    border: none;
    color: white;
    background-color: #30526a00
}
.container-form{
    width: 300px;
    height: 50px;
    /* background-color: rgb(179, 179, 179); */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #feb06a;
}
</style>