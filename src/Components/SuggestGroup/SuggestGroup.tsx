import { Component } from 'react' ;
import { Group } from '../../models/Group';
import { MyContext } from '../MyContext';
import SingleGroup from '../SingleGroup/SingleGroup';

class SuggestGroup extends Component{
    render(){
        return (
            <div className="right-side">
                <h5 className="panel-title">Suggérées pour vous</h5>
                { this.context.groups.map((item:Group) => 
                    <SingleGroup key={item.id} currentGroup={item} showDescription={true}/>    
                )}
            </div>
        ) ;
    }
}

SuggestGroup.contextType = MyContext ;

export default SuggestGroup ;