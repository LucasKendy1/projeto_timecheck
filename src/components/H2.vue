<template>
    <h2 @click="changeId">
        <span :id="rotate" class="material-symbols-outlined">
            chevron_right
        </span>
        {{ titulo }}
    </h2>
</template>

<script>
    export default{
        name:'H2',
        props:{
            titulo: String,
        },
        data(){
            return{
                rotate: "zero"
            }
        },
        methods:{
            changeId(){
                if(this.rotate== "noventa"){
                    this.rotate= "zero"
                }
                else{
                    this.rotate= "noventa"
                }
                
            }
        }

    }
</script>

<style>
h2{
    cursor: pointer;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
}
#zero{
    transform: rotate(0deg);
}
#noventa{
    transform: rotate(90deg);
}
.material-symbols-outlined{
    transition: .2s ease-in-out;
    font-size: 30pt;
}

</style>