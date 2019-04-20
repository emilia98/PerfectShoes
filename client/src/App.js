import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Contacts from './components/user/Contacts';
import Header from './components/user/common/Header';
import Footer from './components/user/common/Footer';
import './components/user/user.css';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <Index />
    );
  }
}

export default App;