/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import './SinglePost.css' ;
import { Post } from '../../models/Post' ;
import { MyContext } from '../MyContext';
import { User } from '../../models/User';
var FontAwesome = require('react-fontawesome') ;

class SinglePost extends Component<{currentPost:Post}>{
    render(){
        let author:User = this.context.getUserById(this.props.currentPost.authorId) ;
        return (
            <div className="panel post">
                <div className="user-header">
                    <div className="pdp-container">
                        <img className="object-fit-cover" src={author.pdpPath} alt="Pdp" />
                    </div>
                    <div className="side-info">
                        <p className="name">{author.GetFullName()}</p>
                        <p>
                            <span className="group-name">{this.props.currentPost.groupName}</span>
                            <span className="date">{this.props.currentPost.date}</span>
                        </p>
                    </div>
                </div>
                <div className="post-content">
                    <h5>{this.props.currentPost.title}</h5>
                    <p>
                    {this.props.currentPost.description}
                    </p>
                </div>
                <div className="post-footer">
                    <ul>
                        <li><a onClick={(e) => {
                                e.preventDefault() ;
                                this.props.currentPost.incLike()
                            }
                        } href="#" className="like"><FontAwesome name="thumbs-o-up" /> <span className="value">{this.props.currentPost.likes}</span></a></li>
                        <li><a onClick={(e) => {
                                e.preventDefault() ; 
                                this.props.currentPost.incDislike() ;
                            }
                        } href="#" className="dislike"><FontAwesome name="thumbs-o-down" /> <span className="value">{this.props.currentPost.dislikes}</span></a></li>
                        <li><a href="#"><FontAwesome name="comment-o" /> <span className="value">3</span></a></li>
                    </ul>
                </div>
            </div>
        ) ;
    }
}

SinglePost.contextType = MyContext ;

export default SinglePost ;