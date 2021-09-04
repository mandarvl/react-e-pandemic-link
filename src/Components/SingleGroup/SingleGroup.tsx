import {Component} from 'react' ;
import {Group} from '../../models/Group' ;
import './SingleGroup.css'

class SingleGroup extends Component<{currentGroup: Group, showDescription: boolean}>{
    render(){
        return (
            <a href="/" className="group-item">
                <div className="small-img-container">
                    <img className="object-fit-cover" src={process.env.PUBLIC_URL+"/"+this.props.currentGroup.imagePath} alt="Groupe" />
                </div>
                <div>
                    <span className="name">{this.props.currentGroup.name}</span>
                    { this.props.showDescription?<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>:null }
                </div>
            </a>
        ) ;
    }
}

export default SingleGroup ;