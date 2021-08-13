import { MyContext } from "../MyContext";
import { Component } from 'react' ;
import { User } from "../../models/User";
import React from "react";


class Login extends Component<{toggle:any}>{
    state = {
        errorMessage: null
    }

    loading = false ;

    performLogin = async (event:any) => {
        event.preventDefault() ;

        if(this.loading)
            return ;
        this.loading = true ;
        const form = event.target ;
        const email = form[0] ;
        const password = form[1] ;

        const user = this.context.users.find((x:User) => x.email === email.value && x.mdp === password.value) ;
        if(user !== undefined){
            await this.context.login(user) ;
        }else{
            this.setState({
                errorMessage: "L'adresse email ou le mot de passe est incorrect."
            }) ;
        }
        this.loading = false ;

        email.value = "" ;
        password.value = "" ;
    }

    render(){
        
        return(
            <form onSubmit={(e) => {this.performLogin(e)}}>
                <h5>Se connecter</h5>
                {this.state.errorMessage != null ?<p style={{color: "red", fontSize: "14px"}}>{this.state.errorMessage}</p>:null}
                <div className="form-control">
                    <input type="email" name="email" required placeholder="Votre email" value={this.context.users[0].email} className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control">
                    <input type="password" name="password" required placeholder="Votre mot de passe" value={this.context.users[0].mdp} className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control two-separation">
                    <p className="small">Vous n'avez pas encore de compte? <a href="/" onClick={(e) => {
                        e.preventDefault() ;
                        this.props.toggle() ;
                    }}><b>S'inscrire</b></a></p>
                    <input type="submit" name="login" className="btn-rounded" value="Se connecter" />
                </div>
            </form>
        ) ;
    }
}

Login.contextType = MyContext ;

export default Login ;