<template>
  <div id="app">
    <head>
      <!--BootStrap Icons -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <header>
        <div class="top">
            <img src="img/mark.png" id="mark"/>
            <span class="title">HANTOR</span>
        </div>
        <nav>
            <ul style="margin: 0 10%">    
                
                <router-link to="/">
                  <li class="navList" v-on:click="navBtn('home')" >Home</li>
                </router-link>
                <router-link to="/board">
                  <li class="navList" v-on:click="navBtn('board')">Board</li>
                </router-link>

            </ul>
        </nav>
        
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        navLists:{},
        selected: null,
      }
    },
    methods:{
      navBtn(key){
        this.navLists[this.selected].style.backgroundColor="transparent";
        this.navLists[key].style.backgroundColor="pink";
        this.selected=key;
      }
    },
    mounted(){
      let temp = document.getElementsByClassName('navList');
      let key,value;
      for(let i=0;i<temp.length;i++){
        key = temp[i].textContent.toLowerCase();
        this.navLists[key] = temp[i];
      }
 
      let path = this.$route.path;
      if(path=='/') key='home'
      else key = path.split('/')[1];
      
      this.navLists[key].style.backgroundColor = 'pink'; 
      
      this.selected = key;
      
    }
  }
</script>

<style>

section{
    margin: 3% 10%;
}
.top{
    margin: 0 10%;
}
.title{
    display: inline;
    color:pink;
    font-size: 4vw;
    font-weight: bold;
}
nav{
    background-color:  #c2e6f0;
}
#mark {
    width: 15%; /* 이미지의 최대사이즈 */

    vertical-align: bottom;
}
ul {
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;

}

.navList{
  
display: inline-block;
color: white;
font-size : 3vw;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}

#app{
  font-size: 2vw;
}
</style>
