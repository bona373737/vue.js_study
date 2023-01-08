# vue.js_study
- 샘플코드 : https://github.com/joshua1988/vue-advanced/tree/3_api
- 실습 클론사이트: Hacker News_https://news.ycombinator.com/
- api문서 : https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
![hackerNews](https://user-images.githubusercontent.com/73373898/211205701-13e60b00-cc53-4e56-9cc7-b6d441ae9c09.png)

### 개발환경
- vue cli v3.2.1
- yarn
- vuex v3.6.2
-
```
Vue CLI 2버전 vs 3버전 차이점 
- Vue CLI 2.x버전
  명령어 : vue init 프로젝트이름 파일위치  
  웹팩 설정파일: 노출O_webpack.config.js파일
  프로젝트 구성 : 깃헙의 템플릿 다운로드 
  ES6이해도 : 필요X
 
- Vue CLI 3.x버전
  명령어 : vue create 프로젝트이름
  웹팩 설정파일: 노출X   
                 설정내용을 추가하고자 하는 경우 별도의 설정파일 생성하여 작성한다.   
                 ex)vue.config.js    
                 https://cli.vuejs.org/guide/webpack.html#simple-configuration   
  프로젝트 구성 : 플러그인 기반으로 기능추가 
  ES6이해도 : 필요O 
```

### 프로젝트구조 
```

```
### 학습내용
1.vuejs를 이용한 웹서비스 구현절차
2.실무 프로젝트 진행방식(컴폰넌트,라우터,API,스토어)
3.컴포넌트 디자인패턴과 자바스크립트 비동기처리
4.Mixins과 HOC를 이용한 컴포넌트 재활용방법
5.외부 라이브러리 모듈화 및 실무 프로젝트 구성방법
6.사용자경험을 높이는 라우터 설계방법과 고급라우터패턴

#### 기초문법
- v-if, v-else
- <template v-if=""></template>
- <template v-else=""></template>
- v-for="item in items"
- v-bind,v-html,v-once
- v-on

#### 컴포넌트 옵션

#### 라우터
- yarn add vue-router@3.5.3
- <router-view></router-view>
- <router-link></router-link>
- 리다이렉트
- mode:'history'
- 동적라우팅_this.$route.params.
- 라우터 트랜지션_https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition

#### 라이프사이클 훅
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

#### API호출
- axios
- 함수에서의 this, 화살표함수에서의 this
- callback, promise, async-await

#### Vuex 스토어구현
- yarn add vuex@3.6.2
- this.$store.state.~
- this.$store.state.dispatch('')
- mapState
- getters, computed

#### 스타일관련 
- scss 사용_ yarn add sass sass-loader@10
```
<style lang="scss" scoped>
.title{
  color:red;
  .sub_title{
    font-size:16px;
    :hover{
      color:blue;
    }
  }
}
</style>
```
#### 공통컴포넌트
- 리스트아이템 컴포넌트
- 공통컴포넌트에서 this.$route.name기준으로 페이지별 데이터분기처리
- 공통컴포넌트에서 조건부렌더링   
  <template v-if=""></template>,<template v-else=""></template>
- 공통컴포넌트에 props로 데이터 전달
- slot활용 상위컴포넌트에서 하위컴포넌트 내부의 내용정의

#### 하이오더(HOC)컴포넌트
- 컴포넌트의 로직(코드)를 재사용하는 하이오더 컴포넌트

#### Mixin

*단방향 데이터 흐름 pros와 emit
*양방향 데이터 바인딩 디렉티브_v-mode

#### 데이터호출시점
1. 컴포넌트 라이프사이클 훅
  - created :컴포넌트가 생성 되자마자 호출되는 로직
2. 라우터 네비게이션 가드    
  "특정URL로 접근하기 전의 동작을 정의하는 속성(함수)"    
  라우터 네비게이션 가드가 컴포넌트 생성되지 전에 먼저 호출 된다.   
  ```
  네비게이션가드란 뷰 라우터로 특정 URL에 접근할때 해당 URL의 접근을 막는 방법을 말한다.   
  가령, 사용자 인증정보가 없으면 특정 페이지에 접근하지 못하게 할때 사용하는 기술이다.
  
  네비게이션 가드의 종류 
  - 애플리케이션 전역에서 동작하는 전역가드
  - 특정 URL에서만 동작하는 라우터가드
  - 라우터 컴포넌트 안에 정의하는 컴포넌트 가드
  ```
  ```javascript
  var router = new VueRouter();
  router.beforeEach(funtion(to,from,next)){
    
  }
  ```
  ```javascript
  routes:[
    {
      path:'/',
      redirect:'/news',
      beforeEnter:(to,from,next)=>{
        if(to.auth){
          next();
        }else{
          router.push('/');
        }
      }
    },
  ```
    
#### 이벤트버스
#### 외부라이브러리 모듈화
- 차트
- 데이트 피커
- 테이블
- 스피너
#### 컴포넌트 디자인패턴
#### 서비스배포환경 구성




