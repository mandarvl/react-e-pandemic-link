import { Component } from 'react';
import './Feed.css' ;
import SinglePost from '../SinglePost/SinglePost';
import SingleGroup from '../SingleGroup/SingleGroup';
import { MyContext } from '../MyContext' ;
import { Post } from '../../models/Post';
import { Group } from '../../models/Group';
import NewPost from '../NewPost/NewPost';
var FontAwesome = require('react-fontawesome');

class Feed extends Component{
    state = {
        isModalPostShown: false
    }

    changeNewPostStatus = (status: boolean) => {
        this.setState({
            isModalPostShown: status
        })
    }

    constructor(props: {} | Readonly<{}>){
        super(props) ;
        this.changeNewPostStatus = this.changeNewPostStatus.bind(this) ;
    }

    render(){
        return (
            <MyContext.Consumer>
            {
                (result) => {
                    let posts = result.posts as Post[] ;
                    let groups = result.groups as Group[] ;
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
                                    { groups.map((item: Group) => 
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
                                            <div className="pdp-container">
                                                <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                            </div>
                                            <span className="side-info name">Manda Ravalison</span>
                                        </div>
                                        <h4 onClick={() => this.changeNewPostStatus(true)} className="grey editable">Quelle est votre question?</h4>
                                    </div>
                                    { posts.map((item:Post) => 
                                        <SinglePost key={item.id} currentPost={item} />
                                    )}
                                </div>
                            </div>
                            <div className="col-25 flex-item">
                                <div className="panel right-side">
                                    <h5 className="panel-title">Suggérées pour vous</h5>
                                    { groups.map(item => 
                                        <SingleGroup key={item.id} currentGroup={item} showDescription={true}/>    
                                    )}
                                </div>
                            </div>
                            <NewPost show={this.state.isModalPostShown} toggleShowStatus={this.changeNewPostStatus} />
                        </div>
                    )
                }
            }
            </MyContext.Consumer>
        ) ;
    }
}

export default Feed ;