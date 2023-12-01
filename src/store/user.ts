
import createPersistState from 'vuex-persistedstate'

interface IState {
  userInfo: {
    name: String,
    email: String,
    role: String
  }
}

const userStore = {
  state: {
    userInfo: {},
  } as IState,
  getters: {
    getUserInfo (state: any) {
      return state.userInfo
    }
  },
  mutations: {
    setUserValue(state: any, payload: any) {
      state.userInfo = payload
    }
  },
  actions: {
    setUserValue(state: any, payload: any) {
      const { userInfo } = payload
      console.log('payload', userInfo)
      state.commit('setUserValue', userInfo)
    }
  },
  plugins: [createPersistState()]
}

export default userStore