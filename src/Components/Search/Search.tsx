import { Component } from 'react' ;
import { Post } from '../../models/Post';
import { MyContext } from '../MyContext';
import './Search.css' ;
import SinglePost from '../SinglePost/SinglePost';
import SuggestGroup from '../SuggestGroup/SuggestGroup';
import { RouteComponentProps } from 'react-router-dom';

interface SearchRouterProps {
    keyword: any;
}
  
interface SearchProps extends RouteComponentProps<SearchRouterProps> {

}

class Search extends Component<SearchProps>{
    state = {
        keyword: null as unknown as string
    }

    loadSearchKeyword(){
        this.setState({
            keyword: this.props.match.params.keyword.toString()
        }) ;
    }

    componentDidUpdate(nextProps:SearchProps) {
        if (nextProps.location !== this.props.location) {
            this.loadSearchKeyword() ;
        }
    }

    componentDidMount(){
        this.loadSearchKeyword() ;
    }

    render(){
        let result = this.context.posts.filter((x:Post) => x.title.toLowerCase().includes(this.state.keyword)) ;
        return (
            <div className="bg-white" id="search">
                <div className="full-padding wrapper flex-container">
                    <div className="flex-item">
                        <div>
                            <h4 className="text-lead">Résultat de votre recherche</h4>
                            {
                            result.length > 0?
                            result.map((item:Post) => 
                                <div className="list-result" key={item.id}>
                                    <SinglePost fromView={false}  currentPost={item} maximize={false} />
                                </div>
                            ):
                            <p>Aucune question ne correspond à votre recherche</p>
                            }
                        </div>
                        
                    </div>
                    <div className="flex-item col-25">
                        <SuggestGroup />
                    </div>
                </div>
            </div>
        ) ;
    }
}

Search.contextType = MyContext ;

export default Search ;