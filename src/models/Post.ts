import { DataList } from "../data/DataList";
import {User} from "../models/User" ;
import {Comment} from "../models/Comment" ;

export class Post{
    id: number ;
    authorId: number ;
    date: string ;
    imagePath: string;
    description: string ;

    constructor(id = 0, imagePath = '', authorId = 0, date = '', description = ''){
        this.id = id ;
        this.authorId = authorId ;
        this.date = date ;
        this.imagePath = imagePath ;
        this.description = description ;
    }

    GetAuthor():User{
        return DataList.GetUserById(this.authorId) ;
    }

    GetComments():Comment[]{
        return DataList.GetCommentsByPostId(this.id) ;
    }
}