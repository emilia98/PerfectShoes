import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header class="header_area sticky-header">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light main_box">
				<div class="container">
					<a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav ml-auto">
							<li class="nav-item"><Link class="nav-link menu-item" to="/">Home</Link></li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle menu-item" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Shop</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
									<li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
									<li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a></li>
									<li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
									<li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a></li>
								</ul>
							</li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle menu-item" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
									<li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
									<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
								</ul>
							</li>
							<li class="nav-item"><Link class="nav-link menu-item" to="/contacts">Contacts</Link></li>
                            <li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle menu-item" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false"><span class="ti-user"></span></a>
								<ul class="dropdown-menu">
								<li class="nav-item"><Link to="/signup" class="nav-link">Sign Up</Link></li>
									<li class="nav-item"><Link to="/signin" class="nav-link">Sign In</Link></li>
									<li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
									<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right menu_nav">
							<li class="nav-item"><a href="#" class="cart nav-link dropdown-toggle menu-item"><span class="ti-bag"></span></a></li>
                            <li class="nav-item"><Link to="/admin" class="cart nav-link dropdown-toggle menu-item"><span class="ti-dashboard"></span></Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
        )
    }
}

export default Header;