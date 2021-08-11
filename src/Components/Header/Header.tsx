/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
import { MyContext } from '../MyContext';
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
                            <li><a href="#" className="active">Actualités</a></li>
                            <li><a href="#">Profil</a></li>
                            <li><a href="#">Groupes</a></li>
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