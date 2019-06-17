import React, { Component } from 'react'

export default class PhotoPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.photos.length} Photos in this album</h1>

        {this.props.photos.map(photo => {
            return (
              <div key={photo.id}>
                 <p>{photo.title}</p>
                 <img src={`${photo.thumbnailUrl}`} alt=""/>
              </div>
            )
        }
        )}
      </div>
    )
  }
}
