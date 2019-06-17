import React, { Component } from 'react'

export default class PhotoPage extends Component {
  render() {
    return (
      <div>
        <h1>Photos in this album</h1>

        {this.props.photos.map(photo => <p>{photo.title}</p>)}
      </div>
    )
  }
}
