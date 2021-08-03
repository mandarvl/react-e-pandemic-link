/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
var FontAwesome = require('react-fontawesome');

class Header extends Component {
    render(){
        return (
            <header>
                <Logo />
                <form className="header-search">
                    <input type="text" className="text" placeholder="Rechercher..."/>
                    <button type="submit">
                    <FontAwesome name='search' />
                    </button>
                </form>
                <nav id="primary-menu">
                    <ul>
                        <li><a href="#" className="active">Actualités</a></li>
                        <li><a href="#">Profil</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Groupes</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header ;