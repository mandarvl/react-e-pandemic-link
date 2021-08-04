import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header' ;
import Feed from './Components/Feed/Feed' ;

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Feed/>
      </div>
    );
  }
}

export default App;
