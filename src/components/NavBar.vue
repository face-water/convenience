<template>
   <div>
    <span class="title" >{{label}}</span>
    
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/signin">sign in</router-link>
   
   </div>
</template>

<script>
    export default {
        data () {
            return {
                label: 'title'
            }
        }
    }
</script>

<style >
    .title{
        color: red;
        font-size: 20px;
    }
</style>