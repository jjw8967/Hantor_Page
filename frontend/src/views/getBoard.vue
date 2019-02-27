<template>
  <div id="getBoard">
    <Header></Header>
    <div class="section">
    <div class = "getBoard-board">
        <p style="font-size: 25px"
        >{{board.title}}</p>
        <p style="color:grey">
            {{date}}
        </p>
        <hr>
        <p style="font-size: 17px">
            {{board.content}}
        </p>
    </div>
    <div>
        <button class="btn btn-primary mb-2" 
        v-on:click="$router.push('/board/')">Check</button>
        <button class="btn btn-primary mb-2"
        v-on:click="deleteBoard">Delete</button>
    </div>
  </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
export default{
    data(){
        return{
            boardNum:this.$route.params['num'],
            baseUrl:this.$store.state.baseUrl,
            board:{},
            date: "",
        }
    },
    components:{
        Header,
    },
    created(){
        this.$http.get(this.baseUrl+`/board/get/${this.boardNum}`)
        .then((res)=>{
            this.board = res.data;
            this.date = res.data.date.substring(0,10);
        })
    },
    methods:{
        deleteBoard(){
            if(confirm("정말 삭제 하시겠습니까?")==true){
                this.$http.post(this.baseUrl+`/board/delete/${this.boardNum}`)
                .then((res)=>{
                    if(res.data=="ok"){
                        alert('확인');
                        this.$router.push('/board');
                    }
                })
            }
        }
    }
}
</script>
<style>
.getBoard-board{
    font-family: "Helvetica Neue","Apple SD Gothic Neo","Malgun Gothic","맑은 고딕",Dotum,"돋움",sans-serif;
    border:1px solid rgb(204, 204, 204);
    padding : 1%;

}
#getBoard button{
    margin: 10px 0;
    margin-right: 10px;
}
</style>
