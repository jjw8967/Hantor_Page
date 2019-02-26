<template>
  <div id="app">
    <head>
    <!-- 합쳐지고 최소화된 최신 CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <!-- 부가적인 테마 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    </head>
    
    <section>
      <router-view/>
    </section>
  </div>
</template>

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script>
  
  export default{

  }
</script>

<style>
#app{
  font-size: 17px;
}
.bg-b{
  background-color:#33b5e5;
}
.circle-btn{
  outline: none;
  border-radius: 50%;
  border-color:transparent;
}
.section{
  margin: 0 5%;
}
</style>
