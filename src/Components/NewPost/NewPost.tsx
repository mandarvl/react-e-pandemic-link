import {Component} from 'react' ;
import './NewPost.css' ;
var FontAwesome = require('react-fontawesome') ;

class NewPost extends Component<{show: boolean, toggleShowStatus: any}>{
    render(){
        return (
            <div hidden={!this.props.show} className="modal">
                <div className="modal-content animation-zoom-in container">
                    <div className="modal-header">
                        <h5 className="text-center modal-title">Poser une question</h5>
                        <FontAwesome className="close red-hover" onClick={()=>this.props.toggleShowStatus(false)} name="times" />
                    </div>
                    <div className="modal-body small-margin-y">
                        <form>
                            <div className="user-header disabled">
                                <div className="pdp-container">
                                    <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                </div>
                                <div className="side-info inline-flex">
                                    <span className="name">Manda Ravalison</span>
                                    <FontAwesome name="caret-right" />
                                    <div className="custom-select">
                                        <select>
                                            <option value="1">Santé</option>
                                            <option value="2">Sport</option>
                                            <option value="3">Coronavirus</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <input type="text" className="input100" placeholder="Quelle est votre question ?" />
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control">
                                <textarea className="input100" placeholder="Donner plus de détails concernant votre question..."></textarea>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                            <div className="form-control text-right">
                                <button className="btn-transparent">Annuler</button>
                                <input type="submit" className="btn-rounded" value="Publier maintenant" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) ;
    }
}

export default NewPost ;