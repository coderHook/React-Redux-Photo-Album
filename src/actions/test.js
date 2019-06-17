export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

export function helloWorld(firstName, lastName) {
  return {
    type: 'NEW_HELLO_WORLD',
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  }
}

export function addAlbum(id, title){
  return {
    type: ADD_ALBUM,
    payload: {
      id: id, 
      title: title
    }
  }
}

export function setAlbums(albums){
  return {
    type: SET_ALBUMS,
    payload: albums
  }
}