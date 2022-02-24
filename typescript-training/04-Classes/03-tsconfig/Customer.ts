class Customer {
    //Properties
    private _firstName: string;
    private _lastName: string;
    //Constructor
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
myCustomer.firstName = "HCl";
myCustomer.lastName = "Company";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
