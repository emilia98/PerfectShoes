import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import Contacts from './Contacts';
import Footer from './common/Footer';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
               <Router>
               <Header />
        
        <Home />
         
  <Footer />
               </Router>
       
      </React.Fragment> 
        )
    }
}

export default Main;

/*
  <Router>
        <Switch>
      
        <Route path='contacts' component={Contacts} />
      <Route path='' exact component={Home} />
      
       </Switch>
        </Router>
         
*/