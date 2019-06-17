import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import AlbumsListContainer from './components/AlbumsListContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <AlbumsListContainer />
      </main>
    </div>
    </Provider>
    
  );
}

export default App;
