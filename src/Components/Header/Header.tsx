/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
import { MyContext } from '../MyContext';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');

interface HeaderRouterProps {
    history: any
}
  
interface HeaderProps extends RouteComponentProps<HeaderRouterProps> {

}

class Header extends Component<HeaderProps> {
    inputRef: any ;

    search(e:any){
        e.preventDefault() ;
        this.props.history.push("/search/"+this.inputRef.value) ;
    }

    showLogin(){
        
    }

    render(){
        return (
            <header>
                <div className="wrapper" id="header-content">
                    <NavLink exact to="/"><Logo invert={false} size="normal" /></NavLink>
                    <form className="header-search" onSubmit={(e) => this.search(e)}>
                        <input type="text" ref={node => this.inputRef = node} className="text" placeholder="Rechercher..."/>
                        <button type="submit" className="btn-icon">
                        <FontAwesome name='search' />
                        </button>
                    </form>
                    <nav id="primary-menu">
                        
                        {this.context.isLogged()?
                        (<ul>
                            <li><NavLink exact to="/" activeClassName="active">Actualités</NavLink></li>
                            <li><a href="/logout" onClick={
                                (e)=>{
                                    e.preventDefault() ; 
                                    this.context.logout() ;
                                    this.props.history.push("/") ;
                                }}>Se déconnecter</a></li>
                            <li>
                                <button title="Poser une question" className="btn-rounded" onClick={() => this.context.newPostStatusHandler(true)}>
                                    <div>
                                        <FontAwesome name="edit fa-fw" />
                                        <span>Poser une question</span>
                                    </div>
                                </button>
                            </li>
                        </ul>):
                        (
                        <ul>
                            <li>
                                <button title="Se connecter" className="btn-rounded" onClick={() => this.context.setLoadAuthComp("login")}>
                                    <div>
                                        <FontAwesome name="sign-in fa-fw" />
                                        <span>Se connecter</span>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button title="Créer un compte" className="btn-rounded" onClick={() => this.context.setLoadAuthComp("signUp")}>
                                    <div>
                                        <FontAwesome name="user-plus fa-fw" />
                                        <span>Créer un compte</span>
                                    </div>
                                </button>
                            </li>
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
export default withRouter(Header) ;