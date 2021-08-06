import { Component } from 'react';
import './Feed.css' ;
import SinglePost from '../SinglePost/SinglePost';
import { DataList } from '../../data/DataList' ;
var FontAwesome = require('react-fontawesome');

class Feed extends Component{
    render(){
        return (
            <div className="wrapper flex-container">
                <div className="col-25 flex-item">
                    <div className="panel transparent group-sidebar">
                        <h5 className="panel-title">Vos groupes</h5>
                        <div className="group-item">
                            <div className="small-img-container left">
                                <FontAwesome name="plus" />
                            </div>
                            <a href="/group" className="clear"> Créer un groupe</a>
                        </div>
                        <div className="group-item">
                            <div className="small-img-container left">
                                <img className="object-fit-cover" src="assets/images/post/1.jpg" alt="Groupe" />
                            </div>
                            <a href="/group" className="clear">Santé et bien-être</a>
                        </div>
                        <div className="group-item">
                            <div className="small-img-container left">
                                <img className="object-fit-cover" src="assets/images/post/2.jpg" alt="Groupe" />
                            </div>
                            <a href="/group" className="clear">Sport</a>
                        </div>
                        <div className="group-item">
                            <div className="small-img-container left">
                                <img className="object-fit-cover" src="assets/images/post/3.jpg" alt="Groupe" />
                            </div>
                            <a href="/group" className="clear">Tout sur le covid</a>
                        </div>
                    </div>
                </div>
                <div className="flex-item">
                    <div>
                        <div className="panel">
                            <div className="user-header disabled">
                                <div className="pdp-container">
                                    <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                </div>
                                <span className="side-info name">Manda Ravalison</span>
                            </div>
                            <h4 className="grey editable">Quelle est votre question?</h4>
                        </div>
                        { DataList.posts.map(item => 
                            <SinglePost currentPost={item} />
                        ) }
                    </div>
                </div>
                <div className="col-25 flex-item">
                    <div className="panel">Suggérées pour vous</div>
                </div>
            </div>
        ) ;
    }
}

export default Feed ;