import React, { Component } from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld, addAlbum, setAlbums } from '../actions/test'

// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms `), time)
// )

class AlbumsListContainer extends Component {
  // state = {}

  componentDidMount() {
      // sleep(2000)
      //   .then(message => this.props.setAlbums([
      //     {
      //       id: 1,
      //       title: message
      //     },
      //     {
      //       id: 2,
      //       title: 'This is the second album'
      //     },
      //     {
      //       id: 3,
      //       title: 'The last album'
      //     }
      //   ]))

      // sleep(3000)
      //   .then(message => this.props.addAlbum(2, message))


    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        this.props.setAlbums(response.body)
        console.log('response', response.body)
      }
        
        )

      // this.props.helloWorld('Alice', 'Something')

    //   this.props.addAlbum(5, 'Enjoying sunshine');
    //   this.props.addAlbum(10, 'Having fun in the US');

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


export default connect(mapStateToProps, {helloWorld, addAlbum, setAlbums})(AlbumsListContainer)