<template>
    <div id="member">
    <Header></Header>
    <div class="section">
        <div class='member-menu' style="background-color:">        
                <i class="glyphicon glyphicon-search"></i>
                <input placeholder="검색"/>
            <button type="button"  class='exportBtn'>
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
                    <th class="table-bordered">전화번호</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members" v-bind:key="member.num"
                class="table-bordered">
                    <th>{{member.num}}</th>
                    <td>{{member.name}}</td>
                    <td>{{member.major}}</td>
                    <td>{{member.stdID}}</td>
                    <td>{{member.phoneNum}}</td>
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
        }
    },
    mounted(){
        this.$http.post(this.baseUrl+'/member').then((res)=>{
            let data = res.data;
            this.members=data;
        })
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
