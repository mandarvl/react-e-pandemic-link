import { Component } from 'react' ;
import Authentification from '../Authentification/Authentification';
import Feed from '../Feed/Feed';
import { MyContext } from '../MyContext';
import './Home.css' ;

class Home extends Component<{isLogged: boolean}>{
    render(){
        var base = <Authentification /> ;
        var html = document.getElementsByTagName("html")[0] ;
        html.classList.remove("auth") ;
        if(this.props.isLogged){
            base = <Feed />
        }
        return (
            <div className="Home">
                {
                    base
                }
            </div>
        ) ;
    }
}

Home.contextType = MyContext ;

export default Home ;