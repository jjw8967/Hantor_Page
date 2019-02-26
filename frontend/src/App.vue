<template>
  <div id="app">
    <head>
      <!--BootStrap Icons -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <Header style="background-color:#33b5e5;"></Header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Header  from '@/components/Header.vue'
  export default{
    data(){
      return{
        navLists:{},
        selected: null,
      }
    },
    components:{
      Header,
    }
  }
</script>

<style>

section{
    margin: 3% 10%;
}

#app{
  font-size: 2vw;
}
</style>
