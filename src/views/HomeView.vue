<template>
  <div>
    <header @click="abrirHeader" :class="expand">
      <div class="container-nome">
        <h3>Logado como:</h3> <h2>{{ nome }}</h2>
      </div>
      <div class="container-foto">
        <img :src="foto" alt="foto">
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
        Historico de pontos
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Footer,
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
      containerHistorico: 'container-historico'
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
    },
    abrirHistorico(){
      if(this.containerHistorico == 'container-h-aberto'){
        this.containerHistorico='container-historico'
      }else{
        this.containerHistorico='container-h-aberto'
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
</style>
