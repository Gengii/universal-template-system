import * as UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true, //! 命名空间
  state: () => {
    token: '' || getItem('userToken')
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      // console.log('111'+token);
      setItem('userToken', token)
    }
  },
  actions: {
    async userLogin({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        // console.log(response)
        commit('setToken', response.token)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
