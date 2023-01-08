<template>
  <div>
    <!-- <div v-for="user in users">{{user}}</div> -->
    <p v-for="item in this.$store.state.news">
      <a v-bind:href=item.url>{{item.title}}</a>
      <small>{{item.time_ago}} by 
        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import bus from '../utils/bus.js';

export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>
