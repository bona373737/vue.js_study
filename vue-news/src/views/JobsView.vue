<template>
  <div>
    <div v-for="job in jobs">{{job}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';
export default {
  data(){
    return{
      jobs:[]
    }
  },
  created(){
    fetchJobsList()
    .then(response=>{
      this.jobs=response.data;
    })
    .catch(error=>{

    })
  }

}
</script>

<style>

</style>