import { Component } from 'react' ;
import { Group } from '../../models/Group';
import { Post } from '../../models/Post';
import { MyContext } from '../MyContext';
import './NewPost.css' ;
var FontAwesome = require('react-fontawesome') ;

class NewPost extends Component{
    groupSelect: any ;
    titleInput: any ;
    descInput: any ;

    createPost(){
        const lastId = this.context.getLastId(this.context.posts) ;
        let newPost = new Post(lastId, '', this.context.loggedUser.id, 'A l\'instant', this.titleInput.value, this.descInput.value, Number(this.groupSelect.value), 0, 0) ;
        
        this.context.addPost(newPost) ;
        this.context.newPostStatusHandler(false) ;

        this.groupSelect.value = this.groupSelect.querySelector("option:first-child").value ;
        this.titleInput.value = "" ;
        this.descInput.value = "" ;
    }

    render(){
        return(
            <div hidden={!this.context.showNewPostModal} className="modal">
                <div className="modal-content animation-zoom-in container">
                    <div className="modal-header">
                        <h5 className="text-center modal-title">Poser une question</h5>
                        <FontAwesome className="close red-hover" name="times" onClick={() => {
                            this.context.newPostStatusHandler(false) ;
                        }} />
                    </div>
                    <div className="modal-body small-margin-y">
                        <form onSubmit={(e) => {e.preventDefault() ; this.createPost()}}>
                            <div className="user-header disabled">
                                <div className="pdp-container">
                                    <img src={this.context.loggedUser.pdpPath} alt="Pdp" />
                                </div>
                                <div className="side-info inline-flex">
                                    <span className="name">{this.context.loggedUser.GetFullName()}</span>
                                    <FontAwesome name="caret-right" />
                                    <div className="custom-select">
                                        <select name="group" required ref={node => this.groupSelect = node}>
                                            {this.context.groups.map((item:Group) => {
                                                return(
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ) ;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <input type="text" required name="titre" ref={node => this.titleInput = node} className="input100" placeholder="Quelle est votre question ?" />
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control">
                                <textarea className="input100" name="description" ref={node => this.descInput = node} placeholder="Donner plus de détails concernant votre question..."></textarea>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control text-right">
                                <button className="btn-transparent" type="reset" onClick={() => {
                                    this.context.newPostStatusHandler(false) ;
                                }}>Annuler</button>
                                <input type="submit" className="btn-rounded" value="Publier maintenant" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) ;
    }
}

NewPost.contextType = MyContext ;

export default NewPost ;