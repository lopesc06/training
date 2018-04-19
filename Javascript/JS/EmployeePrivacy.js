function Employee(firstName, lastName) 
{
    // Private Field
    var privateFullName;

    // Public Fields
    this.firstName = firstName;
    this.lastname = lastName;

    // Private Function
    var privateGetFullName = function () 
    {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    };

    // Privileged Function
    this.privilegedGetFullName = function () 
    {
        return privateGetFullName();
    };

    // Public Function
    Employee.prototype.publicGetFullName = function () 
    {
        return this.privilegedGetFullName();
    };
}
