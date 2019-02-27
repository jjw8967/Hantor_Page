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
        <form>
        <div class="form-group">
            <label for="Email1">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="PW">Password</label>
            <input type="password" class="form-control"
             v-model="pw" placeholder="Password">
        </div>
        </form>
        <button class='btn btn-info' id="login-btn" @click="checkForm">로그인</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:"",
            pw : "",
            baseUrl : this.$store.state.baseUrl,
        }
    },
    methods:{
        checkForm(){
            if(this.validEmail(this.email)){
                let user = {"email":this.email,"pw":this.pw}
                this.$http.post(this.baseUrl+'/user/login',user)
                .then((res)=>{
                    console.log(res);
                })
            }else{
                alert("이메일 형식이 맞지 않습니다.")
                return 0;
            }
        },
        validEmail(email){
            let re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
           
        }
    },
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
