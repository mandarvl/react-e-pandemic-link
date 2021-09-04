import { Component } from 'react' ;
import './Footer.css' ;
var FontAwesome = require('react-fontawesome') ;

class Footer extends Component{
    render(){
        return (
            <footer>
                <p><FontAwesome name="copyright" /> E-Pandemic Link | Ravalison Manda Jerisoa IMTICIA5</p>
            </footer>
        ) ;
    }
}

export default Footer ;