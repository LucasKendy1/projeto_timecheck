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
      <router-link to="/entrada">
        <div>Entrada</div>
      </router-link>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Footer
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
main{
  height: calc(100vh - 27vh);
  width: 100%;
  
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

</style>
