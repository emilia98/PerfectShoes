import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/images/logo.png'

const MenuItem = (props) => {
    const iconClass = `fas fa-${props.icon}`;
    return (
    <li>
        <Link to={'/admin' + props.href} ><i className={iconClass}></i>{props.linkTitle}</Link>
       
    </li>
    )
};

const Navigation = () => (
    
    <aside className="menu-sidebar d-none d-lg-block">
    <div className="logo">
        <a href="#">
            <img src={logo} alt="PerfectShoes Logo" />
        </a>
    </div>
    <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
                <MenuItem href='/' icon='tachometer-alt'  linkTitle ='Dashboard' />
                <MenuItem href='/brands' icon='copyright'  linkTitle ='Brands' />
                <MenuItem href='/category/new' icon='tags'  linkTitle ='Categories' />
                <MenuItem href='/color/new' icon='paint-brush'  linkTitle ='Colors' />
                <MenuItem href='/size/new' icon='ruler'  linkTitle ='Sizes' />
                <MenuItem href='/users' icon='users'  linkTitle ='Users' />
               
                <li className="has-sub">
        <Link to='#' ><i class="fas fa-check"></i>Others</Link>
        <ul class="list-unstyled navbar__sub-list js-sub-list">
        <li>
        <Link to='/colors'>Colors</Link>
                        </li>
                        <li>
        <Link to='/sizes'>Size</Link>
                        </li>
                       
                    </ul>
    </li>
                <li class="has-sub">
                    <a class="js-arrow" href="#">
                        <i class="fas fa-desktop"></i>UI Elements</a>
                    <ul class="list-unstyled navbar__sub-list js-sub-list">
                        <li>
                            <a href="button.html">Button</a>
                        </li>
                        <li>
                            <a href="badge.html">Badges</a>
                        </li>
                        <li>
                            <a href="tab.html">Tabs</a>
                        </li>
                        <li>
                            <a href="card.html">Cards</a>
                        </li>
                        <li>
                            <a href="alert.html">Alerts</a>
                        </li>
                        <li>
                            <a href="progress-bar.html">Progress Bars</a>
                        </li>
                        <li>
                            <a href="modal.html">Modals</a>
                        </li>
                        <li>
                            <a href="switch.html">Switchs</a>
                        </li>
                        <li>
                            <a href="grid.html">Grids</a>
                        </li>
                        <li>
                            <a href="fontawesome.html">Fontawesome Icon</a>
                        </li>
                        <li>
                            <a href="typo.html">Typography</a>
                        </li>
                    </ul>
                </li>
                <li class="has-sub">
                    <a class="js-arrow" href="#">
                        <i class="fas fa-copy"></i>Pages</a>
                    <ul class="list-unstyled navbar__sub-list js-sub-list">
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="register.html">Register</a>
                        </li>
                        <li>
                            <a href="forget-pass.html">Forget Password</a>
                        </li>
                    </ul>
                </li>
                <li class="has-sub">
                    <a class="js-arrow" href="#">
                        <i class="fas fa-desktop"></i>UI Elements</a>
                    <ul class="list-unstyled navbar__sub-list js-sub-list">
                        <li>
                            <a href="button.html">Button</a>
                        </li>
                        <li>
                            <a href="badge.html">Badges</a>
                        </li>
                        <li>
                            <a href="tab.html">Tabs</a>
                        </li>
                        <li>
                            <a href="card.html">Cards</a>
                        </li>
                        <li>
                            <a href="alert.html">Alerts</a>
                        </li>
                        <li>
                            <a href="progress-bar.html">Progress Bars</a>
                        </li>
                        <li>
                            <a href="modal.html">Modals</a>
                        </li>
                        <li>
                            <a href="switch.html">Switchs</a>
                        </li>
                        <li>
                            <a href="grid.html">Grids</a>
                        </li>
                        <li>
                            <a href="fontawesome.html">Fontawesome Icon</a>
                        </li>
                        <li>
                            <a href="typo.html">Typography</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</aside>
    
)

export default Navigation;