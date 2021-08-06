export class Post{
    id: number ;
    imagePath: string ;
    authorId: number ;
    date: string ;
    description: string ;

    constructor(id = 0, imagePath = '', authorId = 0, date = '', description = ''){
        this.id = id ;
        this.imagePath = imagePath ;
        this.authorId = authorId ;
        this.date = date ;
        this.description = description ;
    }
}