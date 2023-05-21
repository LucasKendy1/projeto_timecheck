<template>
  <div>
    <header @click="abrirHeader" :class="expand">
      <div class="container-nome">
        <h3>Logado como:</h3> <h2>{{ nome }}</h2>
      </div>

      <div class="container-foto">
        <img :src="foto" alt="foto">
      </div>

      <div class="container-infos" v-if="show">
        <ContainerDado nome="Email" :myProp="email"/>
        <ContainerDado nome="Cargo" :myProp="cargo"/>
        <ContainerDado nome="Setor" :myProp="setor"/>
      </div>
    </header>

    <main :class="expandMain">
      <div class="container-telas">
        <router-link to="/entrada" tela="Entrada">
          <div class="container-tela">Entrada</div>
        </router-link>
        <router-link to="/pausa" tela="Pausa">
          <div class="container-tela">Pausa</div>
        </router-link>
        <router-link to="/volta" tela="Volta">
          <div class="container-tela">Volta</div>
        </router-link>
        <router-link to="/saida" tela="Saida">
          <div class="container-tela">Saida</div>
        </router-link>
      </div>

      <div :class="containerHistorico">
        <div class="container-aba" @click="abrirHistorico">^</div>
        Histórico de pontos
        
        <div class="container-data" v-for="registro in registros" :key="registro" v-show="historico">
          <div v-if="registro.nome==nome">
            {{ registro.data }} <br>
            {{ registro.registro }}- {{ registro.hora }}
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContainerDado from '@/components/ContainerDado.vue';

export default {
  name: 'HomeView',
  components: {
    Footer,
    ContainerDado
  },
  data(){
    return{
      expand: "normal",
      expandMain: "normalMain",
      nome: null,
      email: null,
      cargo: null,
      setor: null,
      foto: null,
      containerHistorico: 'container-historico',
      registros: null,
      data:null,
      historico: false,
      show:false
    }
  },
  methods:{
    abrirHeader(){
      if(this.expand == "aberto"){
        this.expand = "normal"
        this.expandMain = "normalMain"
      }
      else{
        this.expand = "aberto"
        this.expandMain = "abertoMain"
      }
      this.show= !this.show
    },
    abrirHistorico(){
      this.historico = !this.historico
      if(this.containerHistorico == 'container-h-aberto'){
        this.containerHistorico='container-historico'
      }else{
        this.containerHistorico='container-h-aberto'
        this.getHistorico()
      }
      
    },
    async getUser(){
      const myUser = JSON.parse(localStorage.getItem('user'))
      // console.log(myUser)
      this.nome =myUser.nome
      this.email=myUser.email
      this.cargo=myUser.cargo
      this.setor=myUser.setor
      this.foto =myUser.foto
      // console.log(this.nome)
      // console.log(this.email)
      // console.log(this.cargo)
      // console.log(this.setor)
      // console.log(this.foto)
    },
    async getHistorico(){
      const req = await fetch ("http://localhost:3000/registros")
      const data = await req.json()
      console.log(data)
      this.registros = data
      // console.log(this.nome)
    }
  },
  mounted(){
    this.getUser()
  }
}
</script>

<style scoped>
header{
  height: 20vh;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: white;
  cursor: pointer;
  transition: .5s linear;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header:hover{
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.301);
}
main{
  height: calc(100vh - 27vh);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: aqua; */
}
.container-tela{
  color: white;
  font-size: 20pt;
  width: 60vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32566e;
  border-radius: 6px;
  margin-top: 20px;
  transition: .5s ease;
}
.container-tela:hover{
  background-color: #2c495e;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.26);
}
a{
  text-decoration: none;
}
.abertoMain{
  height: calc(100vh - (27vh - 20vh));
}
.normalMain{
  height: calc(100vh - 27vh);
}
.normal{
  background-color: #f25044;
}
.aberto{
  background-color: #f25044;
  position: absolute;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
h3,h2{
  font-weight: 400;
}
img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  padding: 5px;
}
.container-historico{
  width: 100%;
  height: 100px;
  background-color: #223c4d;
  text-align: center;
  color: white;
  font-size: 20pt;
  transition: 1s ease;
}
.container-aba{
  width: 100%;
  height: 30px;
  background-color: #1f3747;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: .5s ease;
}
.container-aba:hover{
  height: 40px;
}
.container-telas{
  width: fit-content;
  height: fit-content;
  /* background-color: red; */
}
.container-h-aberto{
  position: absolute;
  height: 90%;
  width: 100%;
  background-color: #223c4d;
  text-align: center;
  color: white;
  font-size: 20pt;
}
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
}
.container-infos{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 800px) and (max-width: 1378px){
  .container-telas{
    flex-wrap: wrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;

  }
  .container-tela{
    width: 300px;
    height: 250px;
    margin: 20px;
  }
}

@media (min-width: 1378px){
  .container-telas{
    flex-wrap: wrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;

  }
  .container-tela{
    width: 300px;
    height: 400px;
    margin: 20px;
  }
}
</style>
