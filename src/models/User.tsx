export class User{
    id: number ;
    firstName: string ;
    lastName: string ;
    pdpPath: string ;
    bio: string ;
    pdcPath: string ;

    constructor(id = 0, firstName = "", lastName = "", pdpPath = "", bio = "", pdcPath = ""){
        this.id = id ;
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.pdpPath = pdpPath ;
        this.bio = bio ;
        this.pdcPath = pdcPath ;
    }

    getFullName():string{
        return this.firstName+" "+this.lastName ;
    }
}