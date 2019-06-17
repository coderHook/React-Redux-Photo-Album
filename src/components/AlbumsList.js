import React, { Component } from 'react'

export default class AlbumsList extends Component {
  render() {
    return (
      <div>
        <h1>All Albums</h1>

        There are { this.props.albums.length } albums available.

        <ul>
          { this.props.albums.map(album => <li key={album.id}>{album.title}</li>)}
        </ul>
      </div>
    )
  }
}
