import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actions'

export default {
  [REGISTER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [REGISTER_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [REGISTER_ERROR]: (state, error) => {
    state.status = 'error'
    state.errorMessage = error.data.message
  }
}
