import { Component } from "react";
import './Login.css' ;
import { MyContext } from "../MyContext";
import { hideLoader, showLoader } from "../AppLoader/AppLoader";

class Login extends Component{
    constructor(props:any){
        super(props) ;
        showLoader() ;
    }
    componentDidMount(){
        hideLoader() ;
    }

    render(){
        return (
            <div>
                Connectez-vous
            </div>
        ) ;
    }
}

Login.contextType = MyContext ;

export default Login ;