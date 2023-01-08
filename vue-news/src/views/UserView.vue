<template>
  <div>
    <p> name: {{user.id}}</p>
    <p> karma: {{user.karma}}</p>
    <p> created: {{user.created}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../utils/bus.js';

export default {
  data(){
    return {
      user:[]
    }
  },
  created(){
    bus.$emit('start:spinner');
    const userName = this.$route.params.id;
    axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
      .then(res=>{this.user=res.data})
      .catch(err=>{})
    bus.$emit('end:spinner');
    
  }
}
</script>

<style>

</style>