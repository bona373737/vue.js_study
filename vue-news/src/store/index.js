import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList,fetchJobsList,fetchAskList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[],
    }, 
    getters:{
        fetchedAsk(state){
            return state.ask;
        }
    },
    mutations:{
        SET_NEWS(state,data){
            state.news= data;
        },
        SET_ASK(state,data){
            state.ask=data;
        }
    },
    actions:{
        //api호출만 수행한다, 응답결과를 state값에 할당하려면 mutation필요
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response=>{
                    // console.log(response)
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error=>{})
        },
        FETCH_JOBS({commit}){

        },
        FETCH_ASK({commit}){
            fetchAskList()
                .then(({data})=>{
                    commit('SET_ASK',data);
                })
                .catch(error=>{})
        }
    }
  })