import { Component } from "react";
import './Authentification.css' ;
import { hideLoader, showLoader } from "../AppLoader/AppLoader";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import SignIn from "../SignIn/SignIn";

class Authentification extends Component{
    state = {
        loginSelected: true
    }

    toggleActionHandler(){
        this.setState({
            loginSelected: !this.state.loginSelected
        })
    }

    constructor(props:any){
        super(props) ;
        showLoader() ;
    }
    
    componentDidMount(){
        hideLoader() ;
        var html = document.getElementsByTagName("html")[0] ;
        html.classList.add("auth") ;
    }

    render(){
        return (
            <div className="auth-container">
                <div className="illustration">
                </div>
                <div className="form-container">
                    <div className="auth-header">
                        <p><Logo invert={true} size="large" /> <br/> Par RAVALISON Manda Jerisoa IMTICIA5</p>
                        <p className="description">
                            Bienvenue sur E-Pandemic Link, un lieu pour rester connecté et être en bonne santé durant cette pandémie.
                        </p>
                    </div>
                    {this.state.loginSelected?<Login toggle={() => this.toggleActionHandler()} />:<SignIn toggle={() => this.toggleActionHandler()}/>}
                    
                </div>
            </div>
        ) ;
    }
}

export default Authentification ;