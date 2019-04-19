import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/user/Contacts';
import Header from './components/user/common/Header';
import Footer from './components/user/common/Footer';
import './components/user/user.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
<Contacts />
<Footer />
      </React.Fragment>
      
    );
  }
}

export default App;
