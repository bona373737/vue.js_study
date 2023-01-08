<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.header{
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
  
  a {
    color: white;
  }
  .router-link-exact-active{
    color:#35495e;
  }
}
</style>