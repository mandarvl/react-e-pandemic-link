import { Component } from 'react';
import './Feed.css' ;

class Feed extends Component{
    render(){
        return (
            <div className="wrapper flex-container">
                <div className="col-25 flex-item">
                    <div className="panel">Vos groupes</div>
                </div>
                <div className="flex-item">
                    <div>
                        <div className="panel">
                            <div className="user-header disabled">
                                <div className="pdp-container">
                                    <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                </div>
                                <span className="name">Manda Ravalison</span>
                            </div>
                            <h4 className="grey editable">Quelle est votre question?</h4>
                        </div>
                        <div className="panel">
                            
                        </div>
                    </div>
                </div>
                <div className="col-25 flex-item">
                    <div className="panel">Suggérée pour vous</div>
                </div>
            </div>
        ) ;
    }
}

export default Feed ;