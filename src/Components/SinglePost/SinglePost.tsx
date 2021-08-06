import { Component } from 'react';
import './SinglePost.css' ;
import '../../models/Post' ;

class SinglePost extends Component<{userName:string}>{
    render(){
        return (
            <div className="panel post">
                <div className="user-header">
                    <div className="pdp-container">
                        <img src="assets/images/pdp/2.jpg" alt="Pdp" />
                    </div>
                    <div className="side-info">
                        <p className="name">{this.props.userName}</p>
                        <p>
                            <span className="group-name">Santé et bien-être</span>
                            <span className="date">14h</span>
                        </p>
                    </div>
                </div>
                <div className="post-content">
                    <h5>Que faire si ma température est élevée?</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        ) ;
    }
}

export default SinglePost ;