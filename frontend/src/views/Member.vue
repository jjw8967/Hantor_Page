<template>
    <div id="member">
    <Header></Header>
    <div class="section">
        <div class='member-menu' style="background-color:">        
                <i class="glyphicon glyphicon-search"></i>
                <input placeholder="검색" v-model="search"/>
            <button type="button"  class='exportBtn' @click="getExcel">
            <i class="glyphicon glyphicßon-open"></i>
            Export
        </button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr class="table-bordered">
                    <th class="table-bordered">#</th>
                    <th class="table-bordered">이름</th>
                    <th class="table-bordered">학과</th>
                    <th class="table-bordered">학번</th>
                    <th class="table-bordered">생년월일</th>
                    <th class="table-bordered">전화번호</th>
                    <th class="table-bordered">수정</th>
                    <th class="table-bordered">삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members" v-bind:key="member.num"
                class="table-bordered"
                v-if="searchFn(member)">
                    <th>{{member.num}}</th>
                    <td>{{member.name}}</td>
                    <td>{{member.major}}</td>
                    <td>{{member.stdID}}</td>
                    <td>{{member.birthday}}</td>
                    <td>{{member.phoneNum}}</td>
                    <td><i @click="" class="glyphicon glyphicon-pencil" style="cursor:pointer;" ></i></td>
                    <td><i @click="deleteMember(member.stdID)" class="glyphicon glyphicon-remove" style="cursor:pointer;"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default{
    data(){
        return{
            baseUrl : this.$store.state.baseUrl,
            members:[],
            search: "",
        }
    },
    mounted(){
        //let key = prompt("Enter key")
        let key="godjinu"
        this.$http.post(this.baseUrl+'/member',{"key":key}).then((res)=>{
            if(res.status===500){
                alert("Fail");
                this.$router.push("/");
            }
            let data = res.data;
            this.members=data;
        })
    },
    computed:{
        test(){
            return this.search
        }
    },
    methods:{
        getExcel(){
            let request = new XMLHttpRequest();
            let url = this.baseUrl+"/member/output/excel"
            let fileName = "member.xlsx"
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.responseType = 'blob';

            request.onload = function(e) {
                if (this.status === 200) {
        
                    var blob = this.response;
                    
                    if(window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveBlob(blob, fileName);
                    }
                    else{
                        var downloadLink = window.document.createElement('a');
                        var contentTypeHeader = request.getResponseHeader("Content-Type");
                        downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: contentTypeHeader }));
                        downloadLink.download = fileName;
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                    }
                }else if(this.status === 500){
                    alert("fail");
                    return;
                }
            };
            let key = prompt("key");
            request.send(`key=${key}`);

        },
        searchFn(member){
            let keyword = this.search;
            if(keyword=="") return true;
            else{
                let value=0;
                let data = [member.num,member.name,member.major,member.stdID,member.birthday,member.phoneNum];
                for(let i in data){
                    
                    if((data[i]+"").search(keyword)!=-1) return true;
                }
            }
            return false;
        },
        deleteMember(stdID){
            if(confirm("학번 "+stdID+" 학생을 삭제하시겠습니까?")){
                this.$http.post(this.baseUrl+"/member/delete",{"stdID":stdID}).then((res)=>{
                    if(res.data=="ok"){
                        confirm("삭제 완료됬습니다.");
                        window.location.reload();
                    }
                })
            }
        }
    },
    components:{
        Header,
    }
}
</script>
<style>
.exportBtn{
    background-color:#43b352;
    border:none;
    color:white;
    padding:4px 10px;
    margin:0px 5px;
}
.member-menu{
    margin-bottom:15px;
}
.member-menu input{
    margin:0px 5px;
    outline:none;
    border:none;
    background-color:#dddddd;
    color:grey;
}
</style>
