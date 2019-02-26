<template>
<div>
    <div class="top">
        
        <span class="title">HANTOR</span>
        
        <ul style="margin: 0 10%">    
            
            <router-link to="/">
                <li class="navList" v-on:click="navBtn('home')" >Home</li>
            </router-link>
            <router-link to="/board">
                <li class="navList" v-on:click="navBtn('board')">Board</li>
            </router-link>

        </ul>
        
    </div>
</div>
</template>
<script>
export default {
data(){
    return{
    navLists:{},
    selected: null,
    }
},
methods:{
    navBtn(key){
    if(key==this.selected) return;
    this.navLists[this.selected].style.backgroundColor="transparent";
    this.navLists[key].style.backgroundColor="skyblue";
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
    
    this.navLists[key].style.backgroundColor = 'skyblue'; 
    
    this.selected = key;
    
}
}

</script>
<style>
.top{
    margin: 0 5%;
}
.title{
    color:white;
    font-size: 4vw;
    font-weight: bold;
}

ul {
display:inline;
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


</style>

