/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import './SinglePost.css' ;
import { Post } from '../../models/Post' ;
import { MyContext } from '../MyContext';
import { User } from '../../models/User';
import SingleComment from '../SingleComment/SingleComment';
import { _Comment } from '../../models/_Comment';
var FontAwesome = require('react-fontawesome') ;

class SinglePost extends Component<{currentPost:Post}>{
    isLiked:boolean = false ;
    isDisliked: boolean = false ;
    commentsDiv:any ;
    state = {
        isCommentsClosed: true
    }

    performLike(){
        this.isLiked = !this.isLiked ;
        if(this.isLiked){
            this.props.currentPost.likes++ ;
            if(this.isDisliked){
                this.props.currentPost.dislikes-- ;
                this.isDisliked = false ;
            } 
        }else{
            this.props.currentPost.likes-- ;
        }

        this.context.postModifHandler(this.props.currentPost.id, this.props.currentPost) ;
    }

    performDislike(){
        this.isDisliked = !this.isDisliked ;
        if(this.isDisliked){
            this.props.currentPost.dislikes++ ;
            if(this.isLiked){
                this.props.currentPost.likes-- ;
                this.isLiked = false ;
            }
        }else{
            this.props.currentPost.dislikes-- ;
        }
        this.context.postModifHandler(this.props.currentPost.id, this.props.currentPost) ;
    }

    toggleComments(event:any){
        event.preventDefault() ;
        let a = event.target as HTMLElement ;
        if(a.nodeName !== "a"){
            a = a.parentNode as HTMLElement ;
        }

        this.commentsDiv.style.height = this.commentsDiv.querySelector(".content").clientHeight+20+"px" ;
        a.classList.toggle("active") ;
        this.setState({
            isCommentsClosed: !this.state.isCommentsClosed
        }) ;
    }

    render(){
        let author:User = this.context.getUserById(this.props.currentPost.authorId) ;
        let myComments:_Comment[] = this.context.getCommentsByPostId(this.props.currentPost.id) ;
        return (
            <div className="panel post">
                <div className="user-header">
                    <div className="pdp-container">
                        <img className="object-fit-cover" src={author.pdpPath} alt="Pdp" />
                    </div>
                    <div className="side-info">
                        <p className="name">{author.GetFullName()}</p>
                        <p>
                            <span className="group-name">{this.context.getGroupById(this.props.currentPost.groupId).name}</span>
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
                                this.performLike() ;
                            }
                        } href="#" className={this.isLiked?"active":""}><FontAwesome name="thumbs-o-up" /> <span className="value">{this.props.currentPost.likes}</span></a></li>
                        <li><a onClick={(e) => {
                                e.preventDefault() ; 
                                this.performDislike() ;
                            }
                        } href="#" className={this.isDisliked?"active":""}><FontAwesome name="thumbs-o-down" /> <span className="value">{this.props.currentPost.dislikes}</span></a></li>
                        <li><a onClick={(e) => this.toggleComments(e)} href="#"><FontAwesome name="comment-o" /> <span className="value">{myComments.length}</span></a></li>
                    </ul>
                </div>
                <div ref={node => this.commentsDiv = node} className={this.state.isCommentsClosed?"comments closed": "comments"}>
                    <div className="content">
                        <h5>Réponses</h5>
                        <div className="viewport">
                            {myComments.map((item:_Comment) =>
                                <SingleComment key={item.id} post={this.props.currentPost} currentComment={item} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ) ;
    }
}

SinglePost.contextType = MyContext ;

export default SinglePost ;