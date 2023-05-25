<template>
    <div class="container-historico" v-if="historico">
        <!-- {{ nome }} -->
        <div class="container-data" v-for="registro in registros" :key="registro" v-show="registro.nome==nome">
            <div v-if="registro.nome==nome">
                {{ registro.data }} <br>
                {{ registro.registro }}- {{ registro.hora }}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'RenderHistorico',
        data(){
            return{
                nome: null,
                registros: null,
            }
        },
        created(){
            this.getUser()
        },
        mounted(){ 
            this.getHistorico()
        },
        props:{
            historico: Boolean
        },
        methods:{
            getUser(){
                const user= JSON.parse(localStorage.getItem('user'))
                this.nome = user.nome
            },
            async getHistorico(){
                const req = await fetch ("http://localhost:3000/registros")
                const data = await req.json()
                console.log(data)
                this.registros = data
            },
        }
    }
</script>


<style scoped>
.container-data{
  color: white;
  /* position: absolute; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 12pt;
  background-color: #feb06a;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  /* height: 50px; */
  padding: 20px;
  border-radius: 7px;
}
.container-historico{
    /* background-color: aqua; */
    /* overflow-y: scroll; */
    height: 40%;
}
</style>