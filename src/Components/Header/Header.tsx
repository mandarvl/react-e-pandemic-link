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
export default withRouter(Header) ;