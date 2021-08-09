export class Post{
    id: number ;
    imagePath: string ;
    authorId: number ;
    date: string ;
    title: string ;
    description: string ;
    groupName: string ;
    likes: number ;
    dislikes: number;

    constructor(id = 0, imagePath = '', authorId = 0, date = '', title = '', description = '', groupName = '', likes = 0, dislikes = 0){
        this.id = id ;
        this.imagePath = imagePath ;
        this.authorId = authorId ;
        this.date = date ;
        this.title = title ;
        this.description = description ;
        this.groupName = groupName ;
        this.likes = likes ;
        this.dislikes = dislikes ;
    }
}