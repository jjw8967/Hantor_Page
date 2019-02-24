<template>
  <div id="getBoard">
    <div class = "getBoard-board">
        <p style="font-size: 4vw"
        >{{board.title}}</p>
        <p style="color:grey">
            {{date}}
        </p>
        <hr>
        <p style="font-size: 3vw">
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
</template>
<script>
export default{
    data(){
        return{
            boardNum:this.$route.params['num'],
            baseUrl:this.$store.state.baseUrl,
            board:{},
            date: "",
        }
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
    margin: 3% 0%;
}
#getBoard button{
    margin: 0% 1%;
}
</style>
