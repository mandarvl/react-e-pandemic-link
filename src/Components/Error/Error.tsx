import { Component } from "react";
import { MyContext } from "../MyContext";
import './Error.css' ;

class Error extends Component{
    componentDidMount(){
        this.context.errorExistHandler(true) ;
    }

    render(){
        return (
            <div className="error-container">
                <h1 className="error-name">Erreur 404</h1>
                <p>La page que vous essayer de naviguer est introuvable.</p>
            </div>
        ) ;
    }

    componentWillUnmount(){
        this.context.errorExistHandler(false) ;
    }
}

Error.contextType = MyContext ;

export default Error ;