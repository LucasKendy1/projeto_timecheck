<template>
  <div>
    <header @click="abrirHeader" :class="expand">
      <div class="container-nome">
        <h3>Logado como:</h3> <h2>{{ nome }}</h2>
      </div>

      <div class="container-foto">
        <img :src="foto" alt="foto" :class="expandFoto">
        <!-- <input v-if="show" type="file" @change="uploadFile">
        <button v-if="show" @click="submitFile">Upload</button> -->
      </div>

      <div class="container-infos" v-if="show">
        <ContainerDado nome="Email" :myProp="email"/>
        <ContainerDado nome="Cargo" :myProp="cargo"/>
        <ContainerDado nome="Setor" :myProp="setor"/>
      </div>
      <div class="container-button" v-if=show>
          <button>
            <router-link to="/login">
            <span class="material-symbols-outlined">
              logout
            </span>
            Sair da conta
          </router-link>
          </button>
      </div>
    </header>

    <main :class="expandMain">
      <div class="container-telas">
        <router-link to="/entrada" tela="Entrada">
          <div class="container-tela">
            <div class="container-span">
          </div>
            Entrada
            <div class="container-span">
              <span class="material-symbols-outlined">
                play_arrow
              </span>
            </div>
          </div>
        </router-link>
        <router-link to="/pausa" tela="Pausa">
          <div class="container-tela">
            <div class="container-span">
              <span class="material-symbols-outlined">
                pause
              </span>
            </div>
            Pausa
            <div class="container-span">

            </div>
          </div>
        </router-link>
        <router-link to="/volta" tela="Volta">
          <div class="container-tela">
            <div class="container-span"></div>
            Volta
            <div class="container-span">
              <span class="material-symbols-outlined">
                local_cafe
              </span>
            </div>
          </div>
        </router-link>
        <router-link to="/saida" tela="Saida">
          <div class="container-tela">
            <div class="container-span">
              <span class="material-symbols-outlined">
                logout
              </span>
            </div>
            Saida
            <div class="container-span">
              
            </div>
          </div>
        </router-link>
      </div>

      <div :class="containerHistorico">
        <div class="container-aba" @click="abrirHistorico">^</div>
        <div class="container-h1">Histórico de pontos</div>
        <div class="container-componente" v-if="historico">
          <RenderHistorico :historico="historico"/>
        </div>
      </div>
    </main>

    <Footer @abrir-header = "abrirHeader"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContainerDado from '@/components/ContainerDado.vue';
import RenderHistorico from '@/components/RenderHistorico.vue';

export default {
  name: 'HomeView',
  components: {
    Footer,
    ContainerDado,
    RenderHistorico
  },
  data(){
    return{
      expand: "normal",
      expandFoto: "normalFoto",
      expandMain: "normalMain",
      nome: null,
      email: null,
      cargo: null,
      setor: null,
      foto: null,
      containerHistorico: 'container-historico',
      registros: null,
      data:null,
      historico: null,
      show:false,
      files: null,
    }
  },
  methods:{
    abrirHeader(){
      if(this.expand == "aberto"){
        this.expand = "normal"
        this.expandMain = "normalMain"
        this.expandFoto = "normalFoto"
      }
      else{
        this.expand = "aberto"
        this.expandMain = "abertoMain"
        this.expandFoto = "abertoFoto"
      }
      this.show= !this.show
    },
    abrirHistorico(){
      this.historico = !this.historico
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
    },
  },
  mounted(){
    this.getUser()
  },
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
  justify-content: space-between;
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
  background-color: #233c4d;
  position: absolute;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
h3,h2{
  font-weight: 400;
}
.normalFoto{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  padding: 5px;
}
.abertoFoto{
  width: 300px;
  height: 300px;
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
.container-h-aberto{
  position: absolute;
  width: 100%;
  height: 76vh;
  background-color: #223c4d;
  text-align: center;
  color: white;
  font-size: 20pt;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.container-h1{
  height: 5vh;
  width: 100%;
  /* background-color: #26471f; */
}
.container-componente{
  height: 60vh;
  width: 100%;
  /* background-color: #e9fa2d; */
  overflow-y: scroll;
}
.container-aba{
  width: 100%;
  height: 5vh;
  background-color: #1f3747;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: .5s ease;
}
.container-aba:hover{
  height: 6vh;
}
.container-telas{
  width: fit-content;
  height: fit-content;
  /* background-color: red; */
}


.container-button{
  display: none;
}
.container-span{
  /* background-color: #f25044; */
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-span > span{
  color: #2d3e50;
  font-size: 40pt;
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
  
  .container-span > span{
    color: #2d3e50;
    font-size: 50pt;
    /* background-color: #feb06a; */
    /* position: relative; */
    
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
  .abertoFoto{
    width: 200px;
    height: 200px;
  }
  .aberto{
    /* background-color: #f25044; */
    flex-direction: row;
    align-items: start;
    padding-top: 20px;
    justify-content: space-around;
  }
  .container-infos{
    position: absolute;
    top: 40%;
  }
  .container-button{
    width: 300px;
    height: 70px;
    border-radius: 10px;
    display: block;
    position: absolute;
    background-color: #f25044;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 70%;
  }
  .container-button > button{
    border: none;
    background-color: #f25044;
    color: white;
    font-size: 20pt;
  }
  .container-button > button > a{
    color: white;
  }
}
</style>
