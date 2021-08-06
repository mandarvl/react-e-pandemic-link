import {DataList} from '../data/DataList' ;
import { User } from '../models/User' ;

export class Post{
    id: number ;
    imagePath: string ;
    authorId: number ;
    date: string ;
    title: string ;
    description: string ;
    groupName: string ;

    constructor(id = 0, imagePath = '', authorId = 0, date = '', title = '', description = '', groupName = ''){
        this.id = id ;
        this.imagePath = imagePath ;
        this.authorId = authorId ;
        this.date = date ;
        this.title = title ;
        this.description = description ;
        this.groupName = groupName ;
    }

    GetAuthor():User{
        return DataList.GetUserById(this.authorId) ;
    }
}