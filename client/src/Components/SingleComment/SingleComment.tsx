import { Component } from 'react' ;
import { Post } from '../../models/Post';
import { _Comment } from '../../models/_Comment';
import { MyContext } from '../MyContext';
import './SingleComment.css' ;

class SingleComment extends Component<{post: Post, currentComment: _Comment}>{
    render(){
        let author = this.context.getUserById(this.props.currentComment.authorId) ;
        return (
            <div className="comment">
                <div className="user-header">
                    <div className="pdp-container small">
                        <img className="object-fit-cover" src={process.env.PUBLIC_URL+"/"+author.pdpPath} alt="Pdp" />
                    </div>
                    <div className="side-info">
                        <p className="name">{author.GetFullName()}</p>
                        <p>
                            <span className="group-name">{this.props.post.authorId === this.props.currentComment.authorId?"Auteur":"Membre"}</span>
                            <span className="date">{this.props.currentComment.date}</span>
                        </p>
                    </div>
                </div>
                <p>
                    {this.props.currentComment.content}
                </p>
            </div>
        )
    }
}

SingleComment.contextType = MyContext ;

export default SingleComment ;