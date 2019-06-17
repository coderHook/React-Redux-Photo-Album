import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld, addAlbum, setAlbums, getAlbums, createAlbum } from '../actions/albums'
import AddAlbumForm from './AddAlbumForm';


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
    // console.log('render', this.props.albums)
    return (<div>
      <AlbumsList albums={this.props.albums} />
      <AddAlbumForm createAlbum={this.props.createAlbum} />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}


export default connect(mapStateToProps, {helloWorld, addAlbum, setAlbums, getAlbums, createAlbum})(AlbumsListContainer)