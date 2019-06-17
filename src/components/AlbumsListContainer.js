import React, { Component } from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld, addAlbum, setAlbums, getAlbums } from '../actions/test'

class AlbumsListContainer extends Component {
  // state = {}

  componentDidMount() {

    // request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => {
    //     this.props.setAlbums(response.body)
    //   })

    this.props.getAlbums()

  }

  render() {
    if(!this.props.albums) return 'Loading...'
    console.log('render', this.props.albums)
    return (
      <AlbumsList albums={ this.props.albums } />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state abums', state)
  return {
    albums: state.albums
  }
}


export default connect(mapStateToProps, {helloWorld, addAlbum, setAlbums, getAlbums})(AlbumsListContainer)