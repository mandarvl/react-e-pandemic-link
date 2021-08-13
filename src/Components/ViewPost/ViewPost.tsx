import { Component } from 'react' ;
import { Post } from '../../models/Post';
import SinglePost from '../SinglePost/SinglePost';
import { MyContext } from '../MyContext';
import { NavLink } from 'react-router-dom';

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
                <div className="bg-white">
                    <div className="full-padding wrapper flex-container">
                        <div className="flex-item">
                            <SinglePost maximize={true} fromView={true} currentPost={this.state.selectedPost as unknown as Post} />
                        </div>
                        <div className="col-25 flex-item">
                            <div className="right-side">
                                <h5 className="panel-title">Questions similaires</h5>
                                { this.context.posts.map((item:Post) => {
                                    return (
                                        <div key={item.id}>
                                            <NavLink to={"/post/"+item.id} >{item.title}</NavLink>
                                        </div>
                                    ) ;
                                }    
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) ;
        }
    }
}

ViewPost.contextType = MyContext ;

export default ViewPost ;