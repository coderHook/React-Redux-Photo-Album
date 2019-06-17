import { ADD_ALBUM, SET_ALBUMS, GET_ALBUMS } from '../actions/test'
import * as request from 'superagent'



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