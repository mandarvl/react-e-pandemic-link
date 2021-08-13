/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
import { MyContext } from '../MyContext';
import { NavLink } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Header extends Component {
    inputRef: any ;
    search(e:any){
        e.preventDefault() ;
        this.context.setKeyword(this.inputRef.value) ;
    }

    render(){
        return (
            <header>
                <div className="wrapper" id="header-content">
                    <NavLink exact to="/"><Logo invert={false} size="normal" /></NavLink>
                    {this.context.loggedUser !== null?
                    (<form className="header-search" onSubmit={(e) => this.search(e)}>
                        <input type="text" ref={node => this.inputRef = node} onChange={(e) => this.search(e)} className="text" placeholder="Rechercher..."/>
                        <button type="submit" className="btn-icon">
                        <FontAwesome name='search' />
                        </button>
                    </form>):null}
                    <nav id="primary-menu">
                        
                        {this.context.loggedUser !== null?
                        (<ul>
                            <li><NavLink exact to="/" activeClassName="active">Actualités</NavLink></li>
                            <li><a href="/logout" onClick={(e)=>{e.preventDefault() ; this.context.logout()}}>Se déconnecter</a></li>
                            <li><button className="btn-rounded" onClick={() => this.context.newPostStatusHandler(true)}>Poser une question</button></li>
                        </ul>):
                        (
                        <ul>
                            <li><NavLink exact to="/">Revenir à la page d'accueil</NavLink></li>
                            <li><NavLink to="/login" className="btn-rounded">Se connecter</NavLink></li>
                        </ul>
                        )
                        }
                        
                    </nav>
                </div>
            </header>
        )
    }
}
Header.contextType = MyContext ;
export default Header ;