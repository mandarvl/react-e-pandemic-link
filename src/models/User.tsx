export class User{
    id: number ;
    firstName: string ;
    lastName: string ;
    pdpPath: string ;
    bio: string ;

    constructor(id = 0, firstName = "", lastName = "", pdpPath = "", bio = ""){
        this.id = id ;
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.pdpPath = pdpPath ;
        this.bio = bio ;
    }

    GetFullName():string{
        return this.firstName+" "+this.lastName ;
    }
}