import {Component} from 'react' ;
import { Post } from '../../models/Post';
import { _Comment } from '../../models/_Comment';
import { MyContext } from '../MyContext';
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css' ;

class CommentList extends Component<{comments: _Comment[], post: Post, show: boolean, setContainer:any}>{
    render(){
        return (
            <div ref={(node) => this.props.setContainer(node)} className={this.props.show?"comments": "comments closed"}>
                <div className="content">
                    <h5>Réponses</h5>
                    <div className="viewport">
                        {this.props.comments.map((item:_Comment) =>
                            <SingleComment key={item.id} post={this.props.post} currentComment={item} />
                        )}
                        { 
                        this.props.comments.length === 0? <p className="small-margin-y"><i>Aucune réponse pour l'instant.</i></p>:<br/>
                        }
                        {this.context.isLogged()?
                        (<form id={"form-"+this.props.post.id} onSubmit={this.createComment.bind(this)}>
                            <p>Aidez cette personne en répondant à sa question</p>
                            <div className="form-control">
                                <textarea className="input100" name="answer" required placeholder="Entrer votre réponse..."></textarea>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </form>) : (
                            <p>Vous devez vous <a href="/" onClick={(e) => {e.preventDefault() ; this.context.setLoadAuthComp("login")}}><span className="highlight">connecter</span></a> ou <a href="/" onClick={(e) => {e.preventDefault() ; this.context.setLoadAuthComp("signUp")}}><span className="highlight">créer un compte</span></a> pour donner une réponse</p>
                        ) }
                    </div>
                </div>
            </div>
        ) ;
    }
    createComment(e:any) {
        e.preventDefault() ;
        console.log(e) ;
        let textarea = e.target[0] as HTMLInputElement ;
        let newCom = new _Comment(this.context.getLastId(this.context.comments), textarea.value, "1m", this.context.loggedUser.id, this.props.post.id) ;
        this.context.addComment(newCom) ;
        textarea.value = "" ;
    }
}

CommentList.contextType = MyContext ;

export default CommentList ;