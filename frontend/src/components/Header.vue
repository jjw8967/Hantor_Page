<template>
<div id="Header">
    <div class="top bg-b">
        <router-link to="/side">
            <Drawer></Drawer>
        </router-link>
        <span class="title">HANTOR</span>
        
        <ul style="margin: 0 10px" >    
            
            <router-link to="/">
                <li class="navList" v-on:click="navBtn('home')" >
                    <span>Home</span>
                </li>
            </router-link>
            <router-link to="/board">
                <li class="navList" v-on:click="navBtn('board')">
                    <span>Board</span>
                </li>
            </router-link>

        </ul>
        
    </div>
</div>
</template>
<script>
import Drawer from "@/components/Drawer.vue"
export default {
data(){
    return{
    navLists:{},
    selected: null,
    }
},
components:{
    Drawer,
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
#Header{
    margin-bottom : 15px;
}
#Header span{
    font-size: 25px;
}

.title{
    color:white;
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
text-align: center;
padding: 14px 16px;
text-decoration: none;

}


</style>

