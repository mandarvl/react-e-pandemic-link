export class _Comment{
    id: number ;
    content: string ;
    date: string ;
    authorId: number;

    constructor(id = 0, content = '', date = '', authorId = 0){
        this.id = id ;
        this.content = content ;
        this.date = date ;
        this.authorId = authorId ;
    }
}