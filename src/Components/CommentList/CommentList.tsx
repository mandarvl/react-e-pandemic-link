import {Component} from 'react' ;
import { Post } from '../../models/Post';
import { _Comment } from '../../models/_Comment';
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css' ;

class CommentList extends Component<{comments: _Comment[], post: Post, show: boolean}>{
    render(){
        
        return (
            <div className={this.props.show?"comments": "comments closed"}>
                <div className="content">
                    <h5>Réponses</h5>
                    <div className="viewport">
                        {this.props.comments.map((item:_Comment) =>
                            <SingleComment key={item.id} post={this.props.post} currentComment={item} />
                        )}
                        <br />
                        <form>
                            <h5>Aidez cette personne en répondant à sa question</h5>
                            <div className="form-control">
                                <textarea className="input100" name="answer" placeholder="Entrer votre réponse..."></textarea>
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
}

export default CommentList ;