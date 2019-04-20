import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import MobileNav from './Navigation/MobileNav';

import './public/css/font-face.css';
import './public/css/theme.css';
import NewBrand from './Brand/NewBrand';
import Header from './Navigation/Header';

import './Admin.css';

/*
 <link href="css/font-face.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">


    <!-- Vendor CSS-->
    <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all"> 
*/
class Admin extends Component
{
    render() {
        return (
            <div class="page-wrapper">
            <Router>
                <MobileNav />
                <Navigation />
                <div class="page-container">
                <Header />

                <div class="main-content">
                <Route path='/admin/brand/new' component={NewBrand} />
                </div>
            
           </div>
            </Router>
            </div>
            
        )
    }
}

export default Admin;