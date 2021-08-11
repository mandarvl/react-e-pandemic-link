import {Component} from 'react' ;
import { Post } from '../../models/Post';
import { _Comment } from '../../models/_Comment';
import { MyContext } from '../MyContext';
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css' ;

class CommentList extends Component<{comments: _Comment[], post: Post, show: boolean, innerRef:any}>{
    render(){
        
        return (
            <div ref={this.props.innerRef} className={this.props.show?"comments": "comments closed"}>
                <div className="content">
                    <h5>Réponses</h5>
                    <div className="viewport">
                        {this.props.comments.map((item:_Comment) =>
                            <SingleComment key={item.id} post={this.props.post} currentComment={item} />
                        )}
                        { 
                        this.props.comments.length === 0? <p className="small-margin-y"><i>Aucune réponse pour l'instant.</i></p>:<br/>
                        }
                        <form onSubmit={this.createComment.bind(this)}>
                            <p>Aidez cette personne en répondant à sa question</p>
                            <div className="form-control">
                                <textarea className="input100" name="answer" required placeholder="Entrer votre réponse..."></textarea>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) ;
    }
    createComment(e:any) {
        e.preventDefault() ;
        console.log(e) ;
        let textarea = e.target[0] as HTMLInputElement ;
        let newCom = new _Comment(this.context.getLastId(this.context.comments), textarea.value, "1m", 1, this.props.post.id) ;
        this.context.addComment(newCom) ;
        textarea.value = "" ;
    }
}

CommentList.contextType = MyContext ;

export default CommentList ;