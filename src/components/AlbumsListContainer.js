import React, { Component } from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'

export default class AlbumsListContainer extends Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({
        albums: response.body
      }))
  }

  render() {
    if(!this.state.albums) return 'Loading...'
    return (
      <AlbumsList albums={ this.state.albums } />
    )
  }
}
