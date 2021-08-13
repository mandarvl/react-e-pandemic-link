/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import './SinglePost.css' ;
import { Post } from '../../models/Post' ;
import { MyContext } from '../MyContext';
import { User } from '../../models/User';
import { _Comment } from '../../models/_Comment';
import CommentList from '../CommentList/CommentList';
import { NavLink } from 'react-router-dom';
var FontAwesome = require('react-fontawesome') ;

class SinglePost extends Component<{currentPost:Post, maximize: boolean, fromView: boolean}>{
    isLiked:boolean = false ;
    isDisliked: boolean = false ;
    
    state = {
        isCommentsClosed: !this.props.maximize,
    }

    commentsContainer: any ;

    setCommentsContainer = (elem: any) => {
        this.commentsContainer = elem ;
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
        if(!this.props.fromView){

            let a = event.target as HTMLElement ;
            if(a.nodeName.toLowerCase() !== "a"){
                a = a.parentNode as HTMLElement ;
            }

            a.classList.toggle("active") ;
            this.setState({
                isCommentsClosed: !this.state.isCommentsClosed
            }) ;
        }
    }

    componentDidUpdate(){
        if(this.commentsContainer === undefined || this.props.fromView)
            return ;
        
        let comDiv = this.commentsContainer as unknown as HTMLElement ;
        let content:HTMLElement = comDiv.querySelector(".content") as HTMLElement ;
        let viewport = comDiv.querySelector(".viewport") as HTMLElement ;
        
        viewport.setAttribute("style", "max-height: 500px") ;
        comDiv.style.height = content.clientHeight+20+"px" ;
    }

    render(){
        let author:User = this.context.getUserById(this.props.currentPost.authorId) ;
        let myComments:_Comment[] = this.context.getCommentsByPostId(this.props.currentPost.id) ;
        let description = this.props.currentPost.description ;
        const max = 100 ;
        
        if(this.state.isCommentsClosed && description.length > max){
            description = description.substring(0, max).trimEnd().concat("...") ;
        }

        return (
            <div className="panel post">
                <div className="user-header">
                    <div className="pdp-container">
                        <img className="object-fit-cover" src={window.location.origin+"/"+author.pdpPath} alt="Pdp" />
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
                    <h5><NavLink to={"/post/"+this.props.currentPost.id}>{this.props.currentPost.title}</NavLink></h5>
                    <p>
                    {description}
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
                        <li><a onClick={(e) => this.toggleComments(e)} href={"#form-"+this.props.currentPost.id}><FontAwesome name="comment-o" /> <span className="value">{myComments.length}</span></a></li>
                    </ul>
                </div>
                <CommentList setContainer={(val: any) => this.setCommentsContainer(val)} comments={myComments} post={this.props.currentPost} show={!this.state.isCommentsClosed} />
            </div>
        ) ;
    }
}

SinglePost.contextType = MyContext ;

export default SinglePost ;