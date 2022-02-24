var Customer = /** @class */ (function () {
    //Constructor
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirst) {
            this._firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLast) {
            this._lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Pranav", "Sharma");
myCustomer.firstName = "HCl";
myCustomer.lastName = "Company";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
