import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  	...vuexfireMutations
  },
  actions: {
    bindSplash: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('splash', db.collection('splash'))
    })  	
  },
  modules: {
  },
});
