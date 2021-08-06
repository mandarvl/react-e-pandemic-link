import { Component } from 'react';
import './SinglePost.css' ;
import { Post } from '../../models/Post' ;

class SinglePost extends Component<{currentPost:Post}>{
    render(){
        return (
            <div className="panel post">
                <div className="user-header">
                    <div className="pdp-container">
                        <img className="object-fit-cover" src={this.props.currentPost.GetAuthor().pdpPath} alt="Pdp" />
                    </div>
                    <div className="side-info">
                        <p className="name">{this.props.currentPost.GetAuthor().GetFullName()}</p>
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
            </div>
        ) ;
    }
}

export default SinglePost ;