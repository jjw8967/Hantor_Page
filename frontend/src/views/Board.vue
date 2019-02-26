<template>
  <div class="about">
    <Header></Header>
    <div class='section'>
    <table class="table">
      <thead>
        <tr class="table-bordered">
          <th class="table-bordered">#</th>
          <th class="table-bordered" style="width:50%;">Title</th>
          <th class="table-bordered" style="">Author</th>
          <th class="table-bordered" >Date</th>
        </tr>
      </thead>
      <tbody class="table-bordered">
        <tr v-for="board in boardList" v-on:click="$router.push(`/board/get/${board.num}`)">
          <th>{{board.num}}</th>
          <td class="board-title">{{board.title}}</td>
          <td>{{board.author}}</td>
          <td>{{board.date.substring(0,10).replace(/-/gi,'.')}}</td>
        </tr>
      </tbody>
    </table>
    <button id="writeBtn" v-on:click="writeBoard()">
      <router-link to="/board/write">
      <i class="glyphicon glyphicon-pencil" style="font-size: 2.0em;color: white;">
        
      </i>
      </router-link>
    </button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default{
  data(){
    return{
      boardList:[],
      baseUrl: this.$store.state.baseUrl,
    }
  },
  components:{
    Header,
  },
  created(){
    this.$http.get(this.baseUrl+'/board/').then((res)=>{
      
      this.boardList=res.data;
    })
  },
  methods:{
    writeBoard(){
      
    }
  }
}
</script>
<style>

.table th,td{
  text-align:center;
}
.board-title{
  text-align:left;
}
#writeBtn{
  outline: none;
  display:scroll;
  position:fixed;
  bottom:50px;
  right:50px;
  border-radius: 50%;
  size:100px;
  padding: 17px;
  background-color: #c2e6f0;
  border-color:transparent;

}
</style>
