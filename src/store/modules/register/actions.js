import registerService from '@/services/api/register'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export default {
  [REGISTER_REQUEST]: async ({commit}, params) => {
    commit(REGISTER_REQUEST)
    try {
      const response = await registerService.register(params)
      commit(REGISTER_SUCCESS)
      return Promise.resolve(response.data)
    } catch (e) {
      commit(REGISTER_ERROR, e.response)
    }
  }
}
