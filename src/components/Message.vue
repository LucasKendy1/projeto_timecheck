<template>
    <div>
        <p v-show="msg" :class="status">{{ msg }}</p>
    </div>
</template>

<script>
export default{
    name: "Message",
    props:{
        msg: String,
        status: String
    }
}
</script>

<style scoped>
.good{
    background-color: rgb(83, 224, 90);
    border-radius: 7px;
    border: 2px solid rgb(57, 155, 65);
    padding: 10px;
    color: black;
}
.bad{
    background-color: rgb(224, 83, 83);
    border-radius: 7px;
    border: 2px solid rgb(172, 64, 64);
    padding: 10px;
    color: black;
}
.non{
    background-color: rgb(222, 224, 83);
    border-radius: 7px;
    border: 2px solid rgb(163, 165, 61);
    padding: 10px;
    color: black;
}
</style>