import { createStore } from 'vuex'
import createPersistState from 'vuex-persistedstate'

import userStore from './user'

// const vuexLocal = new VuexPersistence<any>({
//   storage: window.localStorage
// })

export default createStore({
  plugins: [createPersistState()],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: {
      namespaced: true,
      ...userStore
    }
  },
  // plugins: [vuexLocal.plugin]
})
