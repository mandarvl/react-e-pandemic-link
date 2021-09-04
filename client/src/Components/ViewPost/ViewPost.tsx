import { Component } from 'react' ;
import { Post } from '../../models/Post';
import SinglePost from '../SinglePost/SinglePost';
import { MyContext } from '../MyContext';
import { NavLink, RouteComponentProps } from 'react-router-dom';

interface ViewPostRouterProps {
    id: any;
}
  
interface ViewPostProps extends RouteComponentProps<ViewPostRouterProps> {

}

class ViewPost extends Component<ViewPostProps>{
    state = {
        selectedPost: new Post()
    }

    loadSelectedPost(){
        const id = Number(this.props.match.params.id) ;
        this.setState({
            selectedPost: this.context.getPostById(id)
        }) ;
    }

    componentDidMount(){
        this.loadSelectedPost() ;
    }

    componentDidUpdate(nextProps:ViewPostProps){
        if (nextProps.location !== this.props.location) {
            this.loadSelectedPost() ;
        }
    }

    render(){
        if(this.state.selectedPost.id === 0 || this.state.selectedPost === undefined){
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
                            <div className="right-side sticky">
                                <h5 className="panel-title">Questions similaires</h5>
                                { this.context.posts.filter((x:Post) => x.id !== this.state.selectedPost.id).map((item:Post) => {
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