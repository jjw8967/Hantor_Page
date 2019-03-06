<template>
<div id="Header">
    <div class="bg-b" id="top">
        <router-link to="/side">
            <Drawer></Drawer>
        </router-link>
        <span class="title">HANTOR</span>
        
        <ul>    
            
            <router-link to="/">
                <li class="navList">
                    <span>Home</span>
                </li>
            </router-link>
            <router-link to="/board">
                <li class="navList">
                    <span>Board</span>
                </li>
            </router-link>
            <router-link to="/join">
                <li class="navList">
                    <span>Join</span>  
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
    
    try{
        this.navLists[key].style.backgroundColor = 'skyblue'; 
        this.selected = key;
    }catch(e){

    }
    
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

#top ul {
display:inline;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
margin: 0 10px;
}

.navList{
  
display: inline-block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;

}

.title{
    color:white;
    font-weight: bold;
}

</style>

