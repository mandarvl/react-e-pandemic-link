export class Group{
    id: number ;
    name: string ;
    description: string ;
    imagePath: string ;

    constructor(id = 0, name = '', description = '', imagePath = ''){
        this.id = id ;
        this.name = name ;
        this.description = description ;
        this.imagePath = imagePath ;
    }
}