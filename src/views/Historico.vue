<template>
    <div>
        <ButtonVoltar />
        <h1>Historico de pontos</h1>
        <RenderHistorico :historico="historico"/>
    </div>
</template>

<script>
import RenderHistorico from '@/components/RenderHistorico.vue';
import ButtonVoltar from '@/components/ButtonVoltar.vue';
export default{
    nome:'Historico',
    components:{
        RenderHistorico,
        ButtonVoltar
    },
    data(){
        return{
            historico: true
        }
    }

}
</script>

<style scoped>
h1{
    font-size: 30pt;
    margin-top: 40px;
}
</style>