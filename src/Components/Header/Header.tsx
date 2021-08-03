/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;

class Header extends Component {
    render(){
        return (
            <header>
                <form className="header-search">
                    <input type="text" placeholder="Rechercher..."/>
                    <button type="submit">Rechercher</button>
                </form>
                <nav id="primary-menu">
                    <ul>
                        <li><a href="#" className="active">Actualités</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Groupes</a></li>
                        <li><a href="#">Profil</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header ;