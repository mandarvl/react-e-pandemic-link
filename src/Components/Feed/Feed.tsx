import { Component } from 'react';
import './Feed.css' ;
import SinglePost from '../SinglePost/SinglePost';
import { DataList } from '../../data/DataList' ;

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