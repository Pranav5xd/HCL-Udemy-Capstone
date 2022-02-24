class Customer {
    //Constructor
    constructor( private _firstName: string,  private _lastName: string) {
    }
    
    public set firstName(theFirst: string){
        this._firstName = theFirst;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set lastName(theLast: string){
        this._lastName = theLast;
    }

    public get lastName(): string{
        return this._lastName;
    }

}

let myCustomer = new Customer("Pranav", "Sharma");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
