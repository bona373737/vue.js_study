<template>
  
</template>

<script>
export default {
    created(){
        //공통컴포넌트 페이지별 데이터분기처리_컴포넌트에 name지정한뒤 name기준으로 분기처리
        const componentName = this.$route.name;
        if(componentName ==='news'){
            this.$store.dispatch('FETCH_NEWS');
        }else if(componentName==='ask'){
            this.$store.dispatch('FETCH_ASK');
        }else if(componentName==='jobs'){
            this.$store.dispatch('FETCH_JOBS');
        }
    }
}
</script>

<style>

</style>