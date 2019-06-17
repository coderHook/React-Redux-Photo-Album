import { ADD_ALBUM, SET_ALBUMS } from '../actions/test'


export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_ALBUMS:
      return action.payload
    case ADD_ALBUM:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
  
}