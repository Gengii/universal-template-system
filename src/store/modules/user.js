import * as UserApi from '../../api/user'
export default {
  namespaced: true, //! 命名空间
  actions: {
    async userLogin({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
    }
  }
}
