export class User{
    id: number ;
    firstName: string ;
    lastName: string ;
    pdpPath: string ;
    email: string ;
    mdp: string

    constructor(id = 0, firstName = "", lastName = "", pdpPath = "", email = "", mdp = ""){
        this.id = id ;
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.pdpPath = pdpPath ;
        this.email = email ;
        this.mdp = mdp ;
    }

    GetFullName():string{
        return this.firstName+" "+this.lastName ;
    }
}