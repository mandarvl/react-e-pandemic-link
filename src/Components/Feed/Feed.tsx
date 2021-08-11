import { Component } from 'react';
import './Feed.css' ;
import SinglePost from '../SinglePost/SinglePost';
import SingleGroup from '../SingleGroup/SingleGroup';
import { MyContext } from '../MyContext' ;
import { Post } from '../../models/Post';
import { Group } from '../../models/Group';
var FontAwesome = require('react-fontawesome');

class Feed extends Component{

    render(){
        return(
            <div className="wrapper flex-container">
                <div className="col-25 flex-item">
                    <div className="panel transparent group-sidebar">
                        <h5 className="panel-title">Vos groupes</h5>
                        <a href="/" className="group-item btn-semi-transparent">
                            <div className="small-img-container">
                                <FontAwesome name="plus" />
                            </div>
                            <div>
                                <span>Créer une groupe</span>
                            </div>
                        </a>
                        { this.context.groups.map((item: Group) => 
                            <SingleGroup key={item.id} currentGroup={item} showDescription={false}/>    
                        )}
                        <a href="/" className="group-item">
                            <div className="small-img-container">
                                <FontAwesome name="group" />
                            </div>
                            <div>
                                <span>Voir plus de groupes</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex-item">
                    <div>
                        <div className="panel">
                            <div className="user-header disabled">
                                <div className="pdp-container small">
                                    <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                </div>
                                <span className="side-info name">Manda Ravalison</span>
                            </div>
                            <h4 className="grey editable" onClick={() => {
                                this.context.newPostStatusHandler(true) ;
                            }}>Quelle est votre question?</h4>
                        </div>
                        { 
                            this.context.posts.slice(0).reverse().map((item:Post) => 
                                <SinglePost key={item.id} currentPost={item} maximize={false} />
                            )
                        }
                    </div>
                </div>
                <div className="col-25 flex-item">
                    <div className="panel right-side">
                        <h5 className="panel-title">Suggérées pour vous</h5>
                        { this.context.groups.map((item:Group) => 
                            <SingleGroup key={item.id} currentGroup={item} showDescription={true}/>    
                        )}
                    </div>
                </div>
            </div>
        ) ;
    }
}

Feed.contextType = MyContext ;

export default Feed ;