<template>
    <div>
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
