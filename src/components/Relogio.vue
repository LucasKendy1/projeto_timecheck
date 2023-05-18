<template>
    <div class="container-relogio">
        {{ hora }} : {{ min }} : {{ sec }}
    </div>
</template>

<script>
    export default{
        name:"Relogio",
        data(){
            return{
                hora: null,
                min: null,
                sec: null
            }
        },
        mounted(){
            const getHours = () => {
                const date = new Date()
                const hours = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                const hour = hours < 10 ? `0${hours}` : hours
                const minute = minutes < 10 ? `0${minutes}` : minutes
                const second = seconds < 10 ? `0${seconds}` : seconds
                this.hora = hour
                this.min = minute
                this.sec = second
            }

            setInterval(() => {
            getHours()
            }, 1000)
        }
    }
</script>

<style scoped>
.container-relogio{
    color: white;
    border: 4px solid white;
    width: 250px;
    height: 70px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30pt;
}
</style>