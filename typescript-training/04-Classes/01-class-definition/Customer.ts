class Customer {
    //Properties
    private firstName: string;
    private lastName: string;
    //Constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    public getFirstName(): string {
        return this.firstName
    }

    public setFirstName(theFirst: string): void {
        this.firstName = theFirst;
    }

    public getLastName(): string {
        return this.lastName
    }

    public setLastName(theLast: string): void {
        this.lastName = theLast;
    }
}

/* No Consturctor 
let myCustomer = new Customer();
myCustomer.firstName = "Pranav";
myCustomer.lastName = "Sharma";
*/
let myCustomer = new Customer("Pranav", "Sharma");
myCustomer.setFirstName("HCl");
myCustomer.setLastName("Company");

/* Works when properties are public
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/

console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
