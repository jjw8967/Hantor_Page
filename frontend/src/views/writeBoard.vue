<template>
  <div>
    <Header></Header>
    <div class="section">
   <form>
    <div class="form-group">
      <label for="bord_title">Title</label>
      <input type="text" class="form-control"
      id="board_title" placeholder="Title" v-model="title">
    </div>
    <div class="form-group">
      <label for="board_content">Content</label>
      <textarea class="form-control" id="board_content" 
      rows="10" v-model="content"></textarea>
    </div>
  
  </form>
  <button type="submit" class="btn btn-primary mb-2" v-on:click="record()">Record</button>
</div>
</div>
</template>
<script>
  import Header from '@/components/Header.vue'
  export default{
    data(){
      return{
        title:"",
        content:"",
        baseUrl: this.$store.state.baseUrl,
      }
    },
    components:{
      Header,
    },
    methods:{
      record(){
        
        this.$http.post(this.baseUrl+"/board/record",
        {"title":this.title,"content":this.content,"author":"jinu"}).then((res)=>{
          if(res.data=="ok"){
            this.$router.push('/board');
          }else{
            alert("Fail");
          }
        })
      }
    }
  }
</script>
<style>

</style>
