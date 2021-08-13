import { Component } from 'react' ;
import { Post } from '../../models/Post';
import SinglePost from '../SinglePost/SinglePost';
import { MyContext } from '../MyContext';
import { Group } from '../../models/Group';
import SingleGroup from '../SingleGroup/SingleGroup';

class ViewPost extends Component<{match: {params:any}}>{
    state = {
        selectedPost: null
    }

    componentDidMount(){
        const id = Number(this.props.match.params.id) ;
        this.setState({
            selectedPost: this.context.getPostById(id)
        }) ;
    }

    render(){
        if(this.state.selectedPost === null || this.state.selectedPost === undefined){
            return(
                <div></div>
            )  ;     
        }else{
            return (
                <div className="full-padding flex-container">
                    <div className="flex-item">
                        <SinglePost maximize={true} fromView={true} currentPost={this.state.selectedPost as unknown as Post} />
                    </div>
                    <div className="col-25 flex-item">
                        <div className="panel right-side">
                            <h5 className="panel-title">Suggérées pour vous</h5>
                            { this.context.groups.map((item:Group) => 
                                <SingleGroup key={item.id} currentGroup={item} showDescription={true}/>    
                            )}
                        </div>
                    </div>
                </div>
            ) ;
        }
    }
}

ViewPost.contextType = MyContext ;

export default ViewPost ;