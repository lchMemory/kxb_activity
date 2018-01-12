import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   	appname:'',
  },
  mutations: {
    'UPDATE_NAME_mutation':function(state,payload){
    	state.appname=payload
    }
  },
  actions: {
   	'UPDATE_NAME':function(store,payload){
   			store.commit('UPDATE_NAME_mutation',payload)
   	}
  }
})

export default store;