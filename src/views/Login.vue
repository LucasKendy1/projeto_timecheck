<template>
    <div class="main-container">
        <Message :msg="msg" :status="status" />
        <img src="@/../public/imagelogin.webp" alt="">
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
const STORAGE_KEY = 'user'
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
                msg: null,
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
                    if(data[i].email!=userEmail){
                        this.msg="email ou senha não cadastrados no sistema"
                        this.status="bad"
                    }
                    else{
                        this.msg="email verificado"
                        if(data[i].pass!=userPass){
                            this.msg="senha incorreta"
                            this.status="bad"
                        }
                        else{
                            this.msg="email e senha verificados"
                            this.status="good"
    
                            localStorage.setItem(STORAGE_KEY, JSON.stringify(data[i]))
                            
                            i=data.length+1
                            setTimeout(() => window.location.href="./",1000)
                        }
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
    /* background-color: aqua; */
    height: 100vh;
    width: 100vw;
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
img{
    width: 300px;
}
</style>