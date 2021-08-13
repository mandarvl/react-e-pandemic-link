import { Component } from "react";
import { User } from "../../models/User";
import { MyContext } from "../MyContext";


class SignUp extends Component<{toggle:any}>{
    state = {
        errorMessage: null
    }

    loading = false ;

    performSignup = async (event:any) => {
        event.preventDefault() ;

        if(this.loading)
            return ;
        this.loading = true ;
        const form = event.target ;
        const firstName = form[0] ;
        const lastName = form[1] ;
        const email = form[2] ;
        const password = form[3] ;
        const users = this.context.users ;

        const mailExist = users.find((x:User) => x.email === email.value) ;
        if(mailExist === undefined){
            const newUser = new User(this.context.getLastId(users), firstName.value, lastName.value, "assets/images/pdp/9.jpg", email.value, password.value) ;
            await this.context.addUser(newUser) ;
            await this.context.login(newUser) ;
        }else{
            this.setState({
                errorMessage: "Cette adresse email est déjà utilisée."
            }) ;
        }
        this.loading = false ;

        email.value = "" ;
        password.value = "" ;
    }

    render(){
        return(
            <form onSubmit={(e) => this.performSignup(e)}>
                <h5>S'inscrire</h5>
                {this.state.errorMessage != null ?<p style={{color: "red", fontSize: "14px"}}>{this.state.errorMessage}</p>:null}
                <div className="form-control">
                    <input type="text" name="prenom" required placeholder="Votre prénom" className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control">
                    <input type="text" name="nom" required placeholder="Votre nom" className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control">
                    <input type="email" name="email" required placeholder="Votre email" className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control">
                    <input type="password" name="password" required placeholder="Votre mot de passe" className="input100" />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="form-control two-separation">
                    <p className="small">Vous avez déjà un compte? <a href="/" onClick={(e) => {
                        e.preventDefault() ;
                        this.props.toggle() ;
                    }}><b>Se connecter</b></a></p>
                    <input type="submit" name="signin" className="btn-rounded" value="Créer mon compte" />
                </div>
            </form>
        ) ;
    }
}

SignUp.contextType = MyContext ;

export default SignUp ;