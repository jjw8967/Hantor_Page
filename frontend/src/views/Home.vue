<template>
  <div class="home">
      <Header></Header>
      <div class="section">
          <p align="center" style="font-size:30px;font-weight: bold; " ><span style="color:#33b5e5;">소학회 </span>
              <span style=" color:skyblue;">HANTOR</span>
          </p>
          <p style="font-size:30px; font-weight: bold; color:#33b5e5;">소개 :</p>
          <p class='text' style="font-size:17px">
              1989년 4월 10일에 설립한 학술 소학회 한터는 '다같이 모여 공부하는 큰 공간'이라는 뜻입니다. 이러한 의미에 걸맞게 저희 소학회에서는 신입생들을 위한 c언어 강의와 재학생들을 위한 객체 지향 프로그래밍 언어 강의 및 안드로이드 스터디 등 기초 전공 지식을 습득하고 고학년 이상의 학생들은 팀 단위로의 프로젝트를 진행하여 서로 협력하며 작품을 만듭니다. 이처럼 서로가 모여 함께 공부하는 곳이 바로 '한터'입니다.
              이제까지 어느 한 분야에 국한하지 않고 여러 분야를 공부하였습니다. 하지만 올해부터는 한 가지 목표를 정하여 그것을 중심으로 다른 분야로 발전시켜 나가보려 합니다. 앞으로의 전망을 고려하여 IoT나 가상화 기술을 main 분야로 정하고 이를 발전시켜 웹과 앱 개발 및 시스템 프로그래밍 심화를 진행할 예정입니다.
              학교에서만의 공부에 그치지 않고 소학회 회원들끼리 머리를 모아 보다 전문적인 지식을 쌓아 SW가 중요시되는 세계 트렌드에서 중요한 역할을 수행하는 IT인재로서 성장하는 것이 저희 소학회 설립 이유입니다.
          </p>
      </div>   
  </div>
</template>

<script>
import Header  from '@/components/Header.vue'
// @ is an alias to /src


export default {
  name: 'home',
  components:{
      Header,
  }
}
</script>
<style>
.text {
    line-height:2.0em;
}

</style>
