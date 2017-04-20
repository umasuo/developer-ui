import * as types from '../util/types'
import state from './state'

//export the module
export default {
  state: state,

  getters: {
    [types.DEVELOPER_EMAIL] (state) {
      return state.email
    }
  }
}
