<template>
    <div>
        <Header></Header>
        <div class="section">
            <form  @submit.prevent="Apply">
            
            <div class="form-group">
                <label for="name">이름</label>
                <input id='name' class='form-control' v-model="name"
                required/>
            </div>

            <div class="form-group">
                <label for="major">학과</label>
                <select class="form-control" id="major" v-model="major"
                required>
                    <option disabled selected value="">선택</option>
                    <option value="소프트웨어">소프트웨어</option>
                    <option value="사이버보안">사이버보안</option>
                    <option value="디지털미디어">디지털미디어</option>
                    <option value="국방디지털">국방디지털</option>
                    <option value="기타">기타</option>
                </select>
            </div>

            <div class="form-group" v-if="major=='기타'">
                <input type='text' v-model="etcMajor" class='form-control'
                placeholder="학과를 입력해주세요" required/>
            </div>

            <div class="form-group">
                <label for='stdID'>학번</label>
                <input id='stdID' v-model="stdID" class='form-control'
                required pattern="[0-9]{9}" title="9자리 숫자를 입력하세요"
                />
            </div>
            
            <div class="form-group">
                <label for='birthday'>생년월일</label>
                <input id='birthday' v-model="birthday" class='form-control'
                placeholder="YYMMDD"
                required pattern="[0-9]{6}" title="6자리 숫자를 입력하세요"/>
            </div>

            <div class="form-group">
                <label for='phoneNum'>전화번호</label>
                <input id='phoneNum' v-model="phoneNum" class='form-control'
                placeholder="-없이 입력"
                required pattern="[0-9]{10,11}" title="9~10자리 숫자를 입력하세요"/>
            </div>

            <div class="form-group">
                <input type='submit' value="신청" class='form-control'/>
            </div>
            
            </form>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
    data(){
        return{
            stdID:"",
            name:"",
            major:"",
            phoneNum:"",
            etcMajor:"",
            birthday:"",
            baseUrl: this.$store.state.baseUrl
        }
    },
    components:{
        Header,
    },
    methods:{
        checkForm(){
            if(this.check_stdID(this.stdID)){

            }
        },
        check_stdID(stdID){
            let re = /^[0-9]{9}$/
            if(re.test(stdID)){
                return true;
            }else{
                return false;
            }
        },
        Apply(){
            // 학과 기타 처리
            let major;
            if(this.major === "기타"){
                major = this.etcMajor;
            }else major = this.major;

            let user = {
                "stdID" : this.stdID,
                "name" : this.name,
                "major" : major,
                "birthday" : this.birthday,
                "phoneNum" : this.phoneNum,
            }

            this.$http.post(this.baseUrl+'/member/join',user).then((res)=>{
                let data = res.data;
                if(data==='ok'){
                    alert("신청 완료되었습니다.")
                    window.location.reload();

                }else if(data.search("duplicate key")){
                    alert("신청된 학번입니다.");
                }
            })
        }

    },
    mounted(){
        let inputs = document.querySelectorAll('input');
        let i;
        
        // Input AutoComplete Off
        for(i=0;i<inputs.length;i++) inputs[i].setAttribute('autocomplete','off');
    }
}
</script>
<style scoped>

</style>

