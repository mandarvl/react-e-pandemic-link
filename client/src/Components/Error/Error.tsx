import { Component } from "react";
import { MyContext } from "../MyContext";
import './Error.css' ;

class Error extends Component{
    render(){
        return (
            <div className="error-container">
                <h1 className="error-name">Erreur 404</h1>
                <p>La page que vous essayer d'atteindre est introuvable.</p>
            </div>
        ) ;
    }
}

Error.contextType = MyContext ;

export default Error ;