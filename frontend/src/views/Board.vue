<template>
  <div class="about">
    <table class="boardBox">
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일</th>
      </tr>
      <tr v-for="board in boardList" v-bind:key="board.num">
        <td v-for="data in board" v-bind:key="data">
          {{data}}
        </td>
      </tr>
    </table>
    <button id='writeBtn' v-on:click="writeBoard()">
      <router-link to="/board/write">
      <i class="glyphicon glyphicon-pencil" style="font-size: 3em;">
        
      </i>
      </router-link>
    </button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      boardList:[{"num":1,"title":"first","author":"jinu","date":"2019-02-22"}]
    }
  },
  created(){
    this.$http.get('http://localhost:3000/board/').then((res)=>{
      let data =res.data;
      for(let i=0;i<data.length;i++){

      }
    })
  },
  methods:{
    writeBoard(){
      
    }
  }
}
</script>
<style>
table.boardBox{
  text-align: center;
  border: 1px solid grey;
  border-collapse: collapse;
  width:100%;
}
table.boardBox td,th{
  border: 1px solid grey;
}
#writeBtn{
  outline: none;
  display:scroll;
  position:fixed;
  bottom:50px;
  right:50px;
  border-radius: 50%;
  size:100px;
  padding: 15px;
  background-color:rgb(214, 237, 255);
  color: white;
}
</style>
