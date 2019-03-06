<template>
    <div id="Side">
        <div id="side-top" class="bg-b">
            
            <ul class='nav-list'>
                <li>
                    <button class="circle-btn" >
                        
                    <i class="glyphicon glyphicon-user user-icon"></i>
                    </button>
                </li >
                <li>
                    <span>로그인</span>
                </li>
                <li >
                    <router-link to="/">
                    <span style="right:20px;position:fixed;color:white;">
                        <i class="glyphicon glyphicon-log-out"
                        style="font-size:25px;"></i>
                    </span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class='section'>
            <Login></Login>
        </div>
    </div>
</template>
<script>
import Login from "@/components/Login.vue"

export default{
    components:{
        Login,
    }
}
</script>
<style>
#Side label{
    font-size: 20px;
    color: grey;
}
#login-btn{
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    outline:none;
}

#side-top{
    padding: 10px 0;
    font-weight: bold;
    margin-bottom: 15px;
}
.user-icon{
    font-size : 25px;
}
.nav-list{
  margin: 0 10px;
  display:inline;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.nav-list li{
  
  display: inline;
  font-size : 25px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
