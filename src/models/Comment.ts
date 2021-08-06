import {User} from "../models/User" ;

export class Comment{
    id: number ;
    authorId: number ;
    date: string ;
    content: string ;
    postId: number ;

    DataList = require("../data/dataList");

    constructor(id = 0, content = '', authorId = 0, date = '', postId = 0){
        this.id = id ;
        this.authorId = authorId ;
        this.date = date ;
        this.content = content ;
        this.postId = postId ;
    }

    GetAuthor():User{
        return this.DataList.GetUserById(this.authorId) ;
    }
}