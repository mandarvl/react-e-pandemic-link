/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
import { MyContext } from '../MyContext';
import { NavLink } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Header extends Component {
    render(){
        return (
            <header>
                <div className="wrapper" id="header-content">
                    <Logo />
                    <form className="header-search">
                        <input type="text" className="text" placeholder="Rechercher..."/>
                        <button type="submit" className="btn-icon">
                        <FontAwesome name='search' />
                        </button>
                    </form>
                    <nav id="primary-menu">
                        <ul>
                            <li><NavLink to="/feed" activeClassName="active">Actualités</NavLink></li>
                            <li><NavLink to="/profile" activeClassName="active">Profil</NavLink></li>
                            <li><NavLink to="/login" activeClassName="active">Se connecter</NavLink></li>
                            <li><button className="btn-rounded" onClick={() => this.context.newPostStatusHandler(true)}>Poser une question</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
Header.contextType = MyContext ;
export default Header ;