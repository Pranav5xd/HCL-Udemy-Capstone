var Customer = /** @class */ (function () {
    //Constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (theLast) {
        this.lastName = theLast;
    };
    return Customer;
}());
/* No Consturctor
let myCustomer = new Customer();
myCustomer.firstName = "Pranav";
myCustomer.lastName = "Sharma";
*/
var myCustomer = new Customer("Pranav", "Sharma");
myCustomer.setFirstName("HCl");
myCustomer.setLastName("Company");
/* Works when properties are public
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
