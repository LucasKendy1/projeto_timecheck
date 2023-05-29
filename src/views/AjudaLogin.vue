<template>
    <div class="body">
        <header>
            <ButtonVoltar color="black"/>
            <h1>Ajuda</h1>
        </header>
        <H2 titulo="Login"/>
        <Paragrafo display="true" content="As credenciais do Login serão disponibilizadas pela empresa, sendo elas: e-mail institucional e senha.
A senha poderá ser alterada no campo de configurações, marcada pelo simbolo: "/>
        
        <br>

        <Paragrafo display="true" content="Caso a empresa opte por login por impressão digital, aparecerá uma opção para colocar o dedo correspondente ao cadastrado na empresa."/>

        <br>

        <Paragrafo display="true" content="Caso você tenha esquecido a sua senha, aperte na opção 'Esqueci a senha' e irá ser redirecionado para o contato do RH da sua empresa, onde poderá pedir para que mude a senha da sua conta"/>
    </div>
</template>

<script>
    import ButtonVoltar from '@/components/ButtonVoltar.vue';
    import Paragrafo from '@/components/Paragrafo.vue';
    import H2 from '@/components/H2.vue';
    export default{
        name: 'AjudaLogin',
        components:{
            ButtonVoltar,
            Paragrafo,
            H2
        }
    }
</script>

<style scoped>
.body{
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
}
h1{
    color: black;
    font-size: 40pt;
    /* background-color: aqua; */
    height: 140px;
    line-height: 140px;
}
</style>