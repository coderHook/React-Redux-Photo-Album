const SET_PHOTOS = 'SET_PHOTOS'

export default function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    photos: photos
  }
}

